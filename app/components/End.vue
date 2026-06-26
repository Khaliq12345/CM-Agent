<template>
  <section class="w-full overflow-hidden">
    <!-- Haut : illustration pleine largeur -->
    <div
      class="relative bg-muted flex items-center justify-center min-h-80 md:min-h-100 overflow-hidden border-b border-border"
    >
      <div
        class="absolute w-20 h-20 rounded-full border border-border animate-[pulse-ring_2.8s_ease-in-out_infinite]"
      />
      <div
        class="relative z-10 flex items-center justify-center gap-2 w-20 h-20 rounded-full bg-background border border-border"
      >
        <Icon name="lucide:file-text" class="w-5 h-5 text-muted-foreground" />
        <Icon name="lucide:mail" class="w-5 h-5 text-muted-foreground" />
        <Icon name="lucide:user" class="w-5 h-5 text-muted-foreground" />
      </div>

      <div
        v-for="card in floatingCards"
        :key="card.label"
        :class="[
          'absolute z-20 flex items-center gap-2 bg-background border border-border rounded-xl px-3 py-2 min-w-37',
          card.pos,
        ]"
        :style="{ animation: card.anim }"
      >
        <span
          class="w-2 h-2 rounded-full shrink-0"
          :style="{ background: card.color }"
        />
        <div>
          <p class="text-[11px] font-medium text-foreground leading-tight">
            {{ card.label }}
          </p>
          <p class="text-[10px] text-muted-foreground leading-tight">
            {{ card.sub }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bas : titre gauche | sous-titre + CTA droite -->
    <div class="grid grid-cols-1 md:grid-cols-2 bg-background">
      <!-- Titre -->
      <div class="flex items-center p-4 md:p-12">
        <KineticTextReveal
          text="Commencez à automatiser votre croissance aujourd'hui."
          split-by="words"
          direction="up"
          :stagger="0.08"
          :distance="20"
          :blur="true"
          class="text-2xl md:text-5xl font-medium text-foreground leading-tight"
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
        <InteractiveHoverButton :class="'rounded-none hover:rounded-none'">
          Rejoindre la liste d'attente
        </InteractiveHoverButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import KineticTextReveal from "~/components/ui/kinetic-text-reveal/KineticTextReveal.vue";
import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";

const floatingCards = [
  {
    label: "Publication planifiée",
    sub: "LinkedIn · dans 2h",
    color: "#4ade80",
    pos: "top-[18%] left-[6%]",
    anim: "floatA 3.6s ease-in-out infinite",
  },
  {
    label: "Prospect identifié",
    sub: "Score 94% · SaaS B2B",
    color: "#fbbf24",
    pos: "top-[40%] right-[8%]",
    anim: "floatB 4.2s ease-in-out infinite 0.6s",
  },
  {
    label: "Relance envoyée",
    sub: "J+3 · Ouvert ✓",
    color: "#60a5fa",
    pos: "bottom-[18%] left-[10%]",
    anim: "floatC 3.8s ease-in-out infinite 1.1s",
  },
];
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
