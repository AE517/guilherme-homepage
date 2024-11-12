<template>
  <div>
    <div class="wrapper">
      <section class="project-view">
        <div class="projects-container">
          <header class="my-8 text-center font-oxanium text-6xl font-bold tracking-wider lg:text-7xl">PROJECTS</header>
          <div v-fi="loaded" class="grid size-full grid-cols-1 justify-center gap-3 lg:grid-cols-2">
            <GithubCard v-for="(repo, index) in repositories" :repo="repo" class="animate-fade-up animate-delay-1000" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import githubApi, { Repo } from '../utils/githubApi';

definePageMeta({
  layout: 'content',
});

const loaded = ref(false);
const repositories = ref();
const githubRes: Array<object> = await githubApi();

onMounted(async () => {
  repositories.value = githubRes.filter((item: any) => {
    if (item.name !== 'Guilherme-HJA') return item;
  });
  loaded.value = !loaded.value;
});
</script>

<style scoped></style>
