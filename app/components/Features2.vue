<template>
  <section class="w-full">
    <!-- Header -->
    <div class="w-full flex flex-col justify-start mb-10 md:mb-18">
      <KineticTextReveal
        text="Un agent, Quatre super-pouvoirs"
        split-by="words"
        direction="up"
        :stagger="0.08"
        :distance="20"
        :blur="true"
        class="text-2xl md:text-[50px] font-medium text-foreground"
      />
      <p class="md:text-xl">Tout ce dont vous avez besoin à un seul endroit</p>
    </div>

    <!-- Grid 2x2 avec bordures comme la capture -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border">
      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        :class="[
          'w-full h-full',
          index % 2 === 0 && 'md:border-r border-border',
          index < 2 && 'border-b border-border',
        ]"
      >
        <ShowcaseCard
          class="w-full h-full"
          :tagline="feature.tagline"
          :heading="feature.title"
          :description="feature.description"
          :image-url="feature.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import KineticTextReveal from "~/components/ui/kinetic-text-reveal/KineticTextReveal.vue";
import ShowcaseCard from "~/components/ui/showcase-card/ShowcaseCard.vue";

const features = [
  {
    title: "Création & Publication automatique",
    description:
      "CM Agent rédige, planifie et publie vos contenus aux heures d'impact maximal sur LinkedIn, Instagram, X et Facebook.",
    tagline: "Votre calendrier éditorial, rempli à l'avance.",
    image:
      "https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg",
  },
  {
    title: "Engagement & Veille",
    description:
      "L'agent surveille votre secteur, répond aux commentaires et interagit avec les publications pertinentes.",
    tagline: "Restez présent, sans effort.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    title: "Sourcing de Prospects",
    description:
      "Définissez votre client idéal. L'agent identifie les bons profils et amorce la relation.",
    tagline: "Trouvez vos futurs clients avant qu'ils vous trouvent.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
  },
  {
    title: "Outreach & Relances automatiques",
    description:
      "Messages personnalisés, suivis intelligents et relances automatiques.",
    tagline: "Votre commercial qui ne dort jamais.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
  },
];
</script>
