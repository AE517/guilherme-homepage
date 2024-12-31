<template>
  <div
    id="container"
    class="flex size-full flex-nowrap items-center gap-5 overflow-x-scroll p-5 lg:flex-wrap lg:justify-center"
  >
    <a
      v-for="item in socials"
      id="logo"
      class="rounded-xl border-2 border-sundress p-2"
      :href="item.link"
      target="_blank"
      :aria-label="item.name"
    >
      <Icon :name="`mdi:${item.name}`" :size="props.size" color="#EBCA89" />
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['size']);

const socials: Array<{ name: string; link: string }> = [
  { name: 'github', link: 'https://github.com/AE517' },
  { name: 'linkedin', link: 'https://linkedin.com/in/guilherme-hj-araujo' },
  { name: 'deviantart', link: 'https://deviantart.com/ae517' },
  { name: 'instagram', link: 'https://instagram.com/ae517.art' },
  { name: 'pinterest', link: 'https://pinterest.com/ae_517' },
];
</script>

<style scoped></style>
