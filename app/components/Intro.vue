<template>
    <div class="w-full flex flex-col gap-4">
        <!-- left section -->
        <section class="p-4 space-y-8 md:max-w-[50%]">
            <TextType
                :text="[
                    'L’IA qui pilote vos réseaux sociaux.',
                    'Propulsez votre visibilité en continu.',
                    'Le commercial ultime pour votre business.',
                ]"
                :typing-speed="50"
                :pause-duration="800"
                class="text-4xl md:text-5xl font-black tracking-tight"
            />
            <p
                class="md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
                De la création de contenu à la prospection active : automatisez
                votre croissance pendant que vous vous concentrez sur votre cœur
                de métier.
            </p>
            <InteractiveHoverButton
                :class="'rounded-none hover:rounded-none font-semibold uppercase tracking-wider'"
                @click="showModal = true"
            >
                Accéder à l'accès anticipé
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
    <Modal v-model="showModal" />
</template>

<script lang="ts" setup>
import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";
import TextType from "~/components/ui/text-type/TextType.vue";

const showModal = ref(false);
</script>

<style></style>
