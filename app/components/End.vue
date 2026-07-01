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
        <div
            class="grid grid-cols-1 md:grid-cols-2 bg-background border-t border-border"
        >
            <!-- Titre -->
            <div class="flex items-center p-6 md:p-16">
                <ShinyText
                    text="Prenez une longueur d'avance sur votre marché."
                    :speed="2"
                    color="#8c8c8c"
                    shine-color="#171717"
                    class="text-3xl md:text-5xl font-black tracking-tight"
                />
            </div>

            <!-- Sous-titre + CTA -->
            <div
                class="flex flex-col items-start md:items-end md:justify-center gap-6 p-6 md:p-16"
            >
                <p
                    class="text-base text-muted-foreground leading-relaxed text-left md:text-right max-w-md"
                >
                    Rejoignez les entreprises de premier plan qui exploitent
                    notre IA pour automatiser leur visibilité, capturer des
                    leads et accélérer leur croissance.
                </p>
                <InteractiveHoverButton
                    :class="'rounded-none hover:rounded-none font-semibold uppercase tracking-wider'"
                    @click="showModal = true"
                >
                    Demander mon accès anticipé
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
