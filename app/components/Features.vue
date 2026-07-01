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
            "L'agent rédige, planifie et distribue vos contenus stratégiques aux heures d'impact maximal sur LinkedIn, X, Instagram et Facebook.",
        tagline: "",
        image: "/features/automatique-posts.mp4",
    },
    {
        title: "",
        description:
            "Une veille sectorielle en temps réel pour interagir instantanément avec les décideurs et répondre intelligemment à votre communauté.",
        tagline: "",
        image: "/features/engagement.mp4",
    },
    {
        title: "",
        description:
            "Cartographiez votre client idéal. L'agent segmente les profils à forte valeur et prépare le terrain pour la mise en relation.",
        tagline: "",
        image: "/features/prospect.mp4",
    },
    {
        title: "",
        description:
            "Engagez la conversation via des messages ultra-personnalisés, et laissez l'agent piloter les relances jusqu'à la conversion.",
        tagline: "",
        image: "/features/outreach.mp4",
    },
];
</script>
