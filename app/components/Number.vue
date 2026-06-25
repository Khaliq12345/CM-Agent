<template>
  <XDivider />
  <div class="grid grid-cols-1 lg:grid-cols-4 py-12">
    <div class="bg-foreground">
      <Squares
        :speed="0.2"
        direction="diagonal"
        border-color="#fff"
        hover-fill-color="#222"
        :square-size="50"
        class="opacity-20"
      />
    </div>
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="flex flex-col justify-center gap-1 text-center p-4 md:border-t-3 border-b-3 border-r-3 last:border-r-0"
    >
      <div class="flex justify-center items-center gap-0.5">
        <span v-if="stat.prefix" class="text-4xl font-semibold">{{
          stat.prefix
        }}</span>
        <CountUp
          :to="stat.value"
          :separator="stat.separator ?? ''"
          :duration="3"
          :decimals="stat.decimals ?? 0"
          class="text-5xl font-bold tracking-tight"
        />
        <span class="text-5xl font-semibold">{{ stat.suffix }}</span>
      </div>
      <p class=" text-muted-foreground leading-snug">
        {{ stat.label }}
      </p>
    </div>
  </div>
  <XDivider />
</template>

<script lang="ts" setup>
import CountUp from "~/components/ui/count-up/CountUp.vue";
import Squares from "~/components/ui/squares/Squares.vue";

const stats = [
  {
    value: 10,
    suffix: "×",
    label: "plus de contenu publié",
  },
  {
    value: 40,
    suffix: "%",
    label: "de taux de réponse",
    prefix: "+",
  },
  {
    value: 3,
    suffix: "h/j",
    label: "économisées sur les réseaux",
  },
] satisfies Array<{
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  separator?: string;
  decimals?: number;
}>;
</script>
