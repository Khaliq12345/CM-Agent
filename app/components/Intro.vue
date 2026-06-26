<template>
  <div class="py-4 flex flex-col gap-4">
    <!-- left section -->
    <section class="space-y-8 md:max-w-[50%]">
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
    <section>
      <video
        src="/motion.mp4"
        autoplay
        loop
        muted
        class="w-full h-full object-cover"
      ></video>
    </section>
  </div>
</template>

<script lang="ts" setup>
import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";
</script>

<style></style>
