<template>
  <header class="w-full flex items-center justify-between pb-4 px-4">
    <ShinyText
      text="CM AGENT"
      :speed="2"
      color="#8c8c8c"
      shine-color="#171717"
      class="text-2xl font-bold"
    />
    <PulsatingButton pulse-color="#171717" @click="showModal = true"
      >S'inscrire</PulsatingButton
    >
  </header>
  <Modal v-model="showModal" />
</template>
<script setup lang="ts">
import PulsatingButton from "~/components/ui/pulsating-button/PulsatingButton.vue";
import ShinyText from "~/components/ui/shiny-text/ShinyText.vue";

const showModal = ref(false);
</script>
