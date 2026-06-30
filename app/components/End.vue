<template>
  <section class="w-full overflow-hidden">
    <!-- Haut : illustration pleine largeur -->
    <div>
      <video
        src="/cta.mp4"
        autoplay
        loop
        muted
        class="w-full h-full object-cover"
      ></video>
    </div>

    <!-- Bas : titre gauche | sous-titre + CTA droite -->
    <div class="grid grid-cols-1 md:grid-cols-2 bg-background">
      <!-- Titre -->
      <div class="flex items-center p-4 md:p-12">
        <ShinyText
          text="Commencez à automatiser votre croissance aujourd'hui."
          :speed="2"
          color="#8c8c8c"
          shine-color="#171717"
          class="text-2xl md:text-5xl"
        />
      </div>

      <!-- Sous-titre + CTA -->
      <div
        class="flex flex-col items-center md:items-end md:justify-center gap-6 p-4 md:p-12"
      >
        <p
          class="text-sm text-muted-foreground leading-relaxed text-left md:text-right"
        >
          Rejoignez les équipes qui utilisent CM Agent pour publier, prospecter
          et convertir — sans effort manuel.
        </p>
        <InteractiveHoverButton
          :class="'rounded-none hover:rounded-none'"
          @click="showModal = true"
        >
          Rejoindre la liste d'attente
        </InteractiveHoverButton>
      </div>
    </div>
    <Modal v-model="showModal" />
  </section>
</template>

<script setup lang="ts">
import ShinyText from "~/components/ui/shiny-text/ShinyText.vue";

import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";

const showModal = ref(false);
</script>

<style>
@keyframes floatA {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}
@keyframes floatB {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
@keyframes floatC {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}
@keyframes pulse-ring {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.18);
    opacity: 0.1;
  }
}
</style>
