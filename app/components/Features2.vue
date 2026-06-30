<template>
  <section class="w-full">
    <!-- Header -->
    <div
      class="md:w-[50%] flex flex-col justify-start items-start mb-10 md:mb-18 p-4"
    >
      <TrueFocus
        sentence="Un agent, Quatre super-pouvoirs"
        class="text-3xl md:text-[50px]"
      />
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
import ShowcaseCard from "~/components/ui/showcase-card/ShowcaseCard.vue";
import TrueFocus from "~/components/ui/true-focus/TrueFocus.vue";

const features = [
  {
    title: "",
    description:
      "CM Agent rédige, planifie et publie vos contenus aux heures d'impact maximal sur LinkedIn, Instagram, X et Facebook.",
    tagline: "",
    image: "/features/automatique-posts.mp4",
  },
  {
    title: "",
    description:
      "L'agent surveille votre secteur, répond aux commentaires et interagit avec les publications pertinentes.",
    tagline: "",
    image: "/features/engagement.mp4",
  },
  {
    title: "",
    description:
      "Définissez votre client idéal. L'agent identifie les bons profils et amorce la relation.",
    tagline: "",
    image: "/features/prospect.mp4",
  },
  {
    title: "",
    description:
      "Messages personnalisés, suivis intelligents et relances automatiques.",
    tagline: "",
    image: "/features/outreach.mp4",
  },
];
</script>
