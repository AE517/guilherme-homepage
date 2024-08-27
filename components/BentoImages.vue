<template>
  <div id="image" class="size-full animate-fade-up rounded-lg" :class="`animate-delay-${200 * props.index}`">
    <img :src="props.source" loading="lazy" class="size-full rounded-lg" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['source', 'index']);
</script>

<style scoped></style>
