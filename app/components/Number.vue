<template>
    <XDivider />
    <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="md:border-r-3">
            <Galaxy
                :star-count="2000"
                :speed="0.5"
                :star-size="2"
                star-color="#333333"
            />
        </div>
        <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col md:justify-center gap-1 md:text-center p-6 border-t-3 md:border-t-0 md:border-r-3 last:border-r-0"
        >
            <div
                class="flex md:justify-center items-center gap-0.5 text-neutral-900 dark:text-neutral-50"
            >
                <span
                    v-if="stat.prefix"
                    class="text-2xl md:text-4xl font-semibold"
                    >{{ stat.prefix }}</span
                >
                <CountUp
                    :to="stat.value"
                    :separator="stat.separator ?? ''"
                    :duration="3"
                    :decimals="stat.decimals ?? 0"
                    class="text-3xl md:text-5xl font-black tracking-tight"
                />
                <span class="text-2xl md:text-5xl font-semibold">{{
                    stat.suffix
                }}</span>
            </div>
            <p
                class="text-muted-foreground text-sm md:text-base font-medium leading-snug max-w-[200px] md:mx-auto"
            >
                {{ stat.label }}
            </p>
        </div>
    </div>
    <XDivider />
</template>

<script lang="ts" setup>
import CountUp from "~/components/ui/count-up/CountUp.vue";
import Galaxy from "~/components/ui/galaxy/Galaxy.vue";

const stats = [
    {
        value: 3.5,
        suffix: "×",
        label: "Engagement et portée organique",
        decimals: 1,
    },
    {
        value: 45,
        suffix: "%",
        label: "De prospects qualifiés en plus",
        prefix: "+",
    },
    {
        value: 15,
        suffix: "h",
        label: "Gagnées par semaine sur votre gestion",
        prefix: "+",
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
