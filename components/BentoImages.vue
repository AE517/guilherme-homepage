<template>
  <div id="image" class="size-full animate-fade-up rounded-lg" :class="`animate-delay-${200 * props.index}`">
    <NuxtImg :src="props.source" class="size-full rounded-lg" alt="gallery-image-preview.webp" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['source', 'index']);
</script>

<style scoped></style>
