<template>
  <div class="w-full flex flex-col gap-4">
    <!-- left section -->
    <section class="p-4 space-y-8 md:max-w-[50%]">
      <TextType
        :text="[
          'L\'agent IA qui gère vos réseaux sociaux',
          'Quatre super-pouvoirs, un seul agent',
          'Votre commercial qui ne dort jamais',
        ]"
        :typing-speed="50"
        :pause-duration="700"
        class="text-4xl md:text-5xl font-black"
      />
      <p class="md:text-xl">
        Publication automatique, engagement ciblé, prospection active. Tout ça
        pendant que vous vous concentrez sur votre métier.
      </p>
      <InteractiveHoverButton
        :class="'rounded-none hover:rounded-none'"
        @click="showModal = true"
      >
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
  <Modal v-model="showModal" />
</template>

<script lang="ts" setup>
const showModal = ref(false);
import InteractiveHoverButton from "~/components/ui/interactive-hover-button/InteractiveHoverButton.vue";
import TextType from "~/components/ui/text-type/TextType.vue";
</script>

<style></style>
