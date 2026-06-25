<template>
  <header class="w-full md:mx-auto md:max-w-6xl md:px-6 md:py-4">
    <BlurText
      text="CM Agent"
      by="letters"
      :delay="200"
      class="text-2xl font-bold"
    />
  </header>
  <XDivider />
</template>
<script setup lang="ts">
import BlurText from "~/components/ui/blur-text/BlurText.vue";
</script>
