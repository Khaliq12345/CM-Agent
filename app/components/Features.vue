<template>
  <section class="w-full md:py-58">
    <div class="w-full flex items-center justify-center mb-10 md:mb-32">
      <KineticTextReveal
        text="Un agent, Quatre super-pouvoirs"
        split-by="words"
        direction="up"
        :stagger="0.08"
        :distance="20"
        :blur="true"
        class="text-[60px] font-bold text-foreground"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-3 border-b-3">
      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        :class="[
          'p-8 space-y-4',

          // séparation verticale desktop
          index % 2 === 0 && 'md:border-r border-border',

          // séparation horizontale première ligne
          index < 2 && 'border-b border-border',

          feature.invert
            ? 'bg-foreground text-background'
            : 'bg-background text-foreground',
        ]"
      >
        <h3
          :class="[
            'p-3 text-xl font-medium',
            feature.invert
              ? 'bg-background text-foreground'
              : 'bg-foreground text-background',
          ]"
        >
          {{ feature.title }}
        </h3>

        <p>
          {{ feature.description }}
        </p>

        <p class="font-medium">
          {{ feature.tagline }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import KineticTextReveal from "~/components/ui/kinetic-text-reveal/KineticTextReveal.vue";
const features = [
  {
    title: "Création & Publication automatique",
    description:
      "CM Agent rédige, planifie et publie vos contenus aux heures d'impact maximal sur LinkedIn, Instagram, X et Facebook.",
    tagline: "Votre calendrier éditorial, rempli à l'avance.",
    invert: true,
  },
  {
    title: "Engagement & Veille",
    description:
      "L'agent surveille votre secteur, répond aux commentaires et interagit avec les publications pertinentes.",
    tagline: "Trouvez vos futurs clients avant qu'ils vous trouvent.",
    invert: false,
  },
  {
    title: "Sourcing de Prospects",
    description:
      "Définissez votre client idéal. L'agent identifie les bons profils et amorce la relation.",
    tagline: "Trouvez vos futurs clients avant qu'ils vous trouvent.",
    invert: false,
  },
  {
    title: "Outreach & Relances automatiques",
    description:
      "Messages personnalisés, suivis intelligents et relances automatiques.",
    tagline: "Votre commercial qui ne dort jamais.",
    invert: true,
  },
];
</script>
<style></style>
