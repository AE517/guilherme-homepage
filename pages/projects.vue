<template>
  <div>
    <div class="wrapper">
      <section class="project-view">
        <div class="projects-container">
          <header class="my-8 text-center font-oxanium text-6xl font-bold tracking-wider lg:text-7xl">PROJECTS</header>
          <div class="grid size-full grid-cols-1 justify-center gap-3 lg:grid-cols-2">
            <GithubCard
              v-for="(repo, index) in repositories"
              :repo="repo"
              class="animate-fade-up animate-delay-1000"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'content',
});

const githubResponse: Array<object> = await githubApi();
const repositories: Array<object> = githubResponse.filter((item: any) => {
  if (item.name !== 'Guilherme-HJA') return item; // Github Config ignore
});
</script>

<style scoped></style>
