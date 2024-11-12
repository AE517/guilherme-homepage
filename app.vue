<template>
  <div class="h-screen">
    <!-- <div v-if="loading" class="fixed flex justify-center align-center items-center left-0 top-0 h-full w-full bg-dsotm"> -->
    <!--   <img src="/static/G.svg" alt="G.svg" class="size-1/4" /> -->
    <!-- </div> -->

    <NuxtLayout>
      <NuxtPage class="size-full p-2" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';

useSeoMeta({
  title: 'Guilherme - Homepage',
  ogTitle: 'Guilherme - Homepage',
  description: "Guilherme Araujo's | Web Developer Portfolio Page",
  ogDescription: "Guilherme Araujo's | Web Developer Portfolio Page",
  ogImage: '/G.svg',
  icon: '/favicon.png',
  lang: 'en',
  twitterTitle: 'Guilherme Araujo',
  twitterDescription: 'Guilherme Araujo - Web Developer',
  twitterImage: '/G.svg',
  twitterCard: "Guilherme Araujo's Homepage",
  ogUrl: 'guilherme-homepage.pages.dev',
});

// const nuxtApp = useNuxtApp();
// const loading = ref(false);
//
// nuxtApp.hook("page:start", () => {
//   loading.value = true;
// });
// nuxtApp.hook("page:finish", () => {
//   loading.value = false;
// })
</script>
