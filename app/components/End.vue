<template>
  <div class="space-y-4">
    <KineticTextReveal
      text="Rejoignez les premiers à automatiser leur croissance."
      split-by="words"
      direction="up"
      :stagger="0.08"
      :distance="20"
      :blur="true"
      class="text-4xl font-bold text-foreground"
    />
    <button class="bg-foreground text-white p-3">
      Rejoindre la liste d'attente
    </button>
  </div>
</template>
<script setup lang="ts">
import KineticTextReveal from "~/components/ui/kinetic-text-reveal/KineticTextReveal.vue";
</script>
