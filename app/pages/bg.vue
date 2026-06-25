<template>
  <div class="h-screen w-full opacity-20">
    <Squares
      :speed="0.3"
      direction="diagonal"
      border-color="#333"
      hover-fill-color="#222"
      :square-size="300"
    />
  </div>
</template>

<script setup lang="ts">
import Squares from "~/components/ui/squares/Squares.vue";
</script>

<!-- <script setup lang="ts">
import PixelSnow from "~/components/ui/pixel-snow/PixelSnow.vue";
</script>

<template>
  <div class="h-screen w-full opacity-20">
    <PixelSnow color="#ffffff" :speed="1.25" :density="0.3" variant="square" />
  </div>
</template> -->
<!-- 
<script setup lang="ts">
import Galaxy from "~/components/ui/galaxy/Galaxy.vue";
</script>

<template>
  <div class="h-screen w-full">
    <Galaxy
      :star-count="2000"
      :speed="0.5"
      :star-size="2"
      star-color="#ffffff"
    />
  </div>
</template> -->
