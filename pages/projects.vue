<template>
  <div>
    <div class="wrapper">
      <section class="project-view">
        <div class="projects-container">
          <header class="my-8 text-center font-oxanium text-6xl font-bold tracking-wider lg:text-7xl">PROJECTS</header>
          <div class="grid size-full grid-cols-1 justify-center gap-x-3 lg:grid-cols-[3fr,_1fr]">
            <div class="project-content">
              <Suspense>
                <MDCRenderer v-if="ast?.body" :body="ast.body" :data="ast.data" class="font-poppins" />
                <template #fallback>Loading...</template>
              </Suspense>
            </div>
            <div class="cards-space flex content-stretch gap-x-5 overflow-x-scroll lg:flex-col lg:gap-y-4">
              <GithubCard v-for="repo in repositories" :repo="repo" @click="readMe(repo.name)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import MDCRenderer from '@nuxtjs/mdc/runtime/components/MDCRenderer.vue';
import type { MDCParserResult } from '@nuxtjs/mdc';
import useMarkdownParser from '../composables/useMarkdownParser';

definePageMeta({
  layout: 'content',
});
const ast = ref<MDCParserResult | null>(null);
const parse = useMarkdownParser();

const repositories: Array<object> = await githubApi();
const readMe = async (repoName: string) => {
  const response = await getReadMe(repoName);
  ast.value = await parse(response);
};
</script>

<style scoped></style>
