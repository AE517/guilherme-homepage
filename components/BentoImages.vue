<template>
  <div
    id="image"
    v-for="(style, index) in animationStyles"
    class="size-full rounded-lg"
    :class="`animate-delay-${100 * index} animate-${style}`"
  >
    <img :src="`/art/${index + 1}.webp`" loading="lazy" class="size-full rounded-lg" />
  </div>
</template>

<script setup lang="ts">
const animationStyles: Array<string> = ['fade-down', 'fade-up', 'fade-left', 'fade-right'];
</script>

<style scoped></style>
