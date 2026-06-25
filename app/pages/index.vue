<template>
  <div class="relative">
    <main class="w-full py-4 mx-auto max-w-330 space-y-8 border-r-3 border-l-3">
      <Header />
      <Intro />
      <XDivider />

      <div class="py-8">
        <Number />
      </div>
      <XDivider />

      <Features />
      <XDivider />

      <End />
    </main>
  </div>
</template>

<script setup lang="ts">
import Squares from "~/components/ui/squares/Squares.vue";
import PixelSnow from "~/components/ui/pixel-snow/PixelSnow.vue";
</script>
n
