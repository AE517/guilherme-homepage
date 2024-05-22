<template>
  <div
    id="image"
    v-for="(image, index) in images"
    class="size-full rounded-2xl"
    :class="`animate-delay-${100 * index} animate-${['fade', 'fade-down', 'fade-up', 'fade-left', 'fade-right'][Math.floor(Math.random() * 5)]}`"
  >
    <img :src="image" loading="lazy" class="size-full rounded-2xl" />
  </div>
</template>

<script setup lang="ts">
import djinn from '/art/Djinn.webp';
import eeyuh from '/art/Eeyuh.webp';
import jotunn from '/art/Jotunn.webp';
import traveller from '/art/Traveller.webp';

const images: Array<string> = [djinn, eeyuh, jotunn, traveller];
</script>

<style scoped></style>
