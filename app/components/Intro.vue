<template>
  <div class="py-4 md:py-46 grid grid-cols-1 md:grid-cols-2 between">
    <!-- left section -->
    <section class="space-y-8">
      <h1 class="text-2xl md:text-[60px] font-medium">
        L'agent IA qui gère vos réseaux sociaux
      </h1>
      <p class="md:text-xl">
        Publication automatique, engagement ciblé, prospection active. Tout ça
        pendant que vous vous concentrez sur votre métier.
      </p>
      <InteractiveHoverButton :class="'rounded-none hover:rounded-none'">
        Rejoindre la liste d'attente
      </InteractiveHoverButton>
    </section>

    <!-- right section -->
    <section></section>
  </div>
</template>

<script lang="ts" setup>
import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";
</script>

<style></style>
