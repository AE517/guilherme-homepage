<template>
  <div>
    <section
      class="card-wrapper flex size-full flex-col justify-between gap-y-3 rounded-lg bg-midnight p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-maui-mist/10 lg:justify-start"
    >
      <header>
        <div
          class="align-center flex flex-col content-center items-center justify-center gap-y-3 md:flex-row md:justify-between"
        >
          <h2 class="mb-2 font-oxanium text-4xl text-center uppercase lg:text-3xl">
            {{ repo.name }}
          </h2>
          <div class="flex flex-row justify-between gap-x-4">
            <a
              :href="repo.url"
              target="_blank"
              class="flex flex-row items-center gap-x-2 rounded-lg border-2 border-sundress px-3 py-2 text-sundress lg:text-lg"
            >
              <span><Icon name="mdi:github" size="35" /></span>
            </a>
            <a
              v-if="repo.homepage !== ''"
              :href="repo.homepage"
              target="_blank"
              class="flex flex-row items-center gap-x-2 rounded-lg border-2 bg-sundress px-4 border-sundress py-2 text-midnight lg:text-lg"
            >
              <span><Icon name="material-symbols:arrow-insert" size="25" class="rotate-90" /></span
            ></a>
          </div>
        </div>
        <h3 class="test-xl mt-4 text-justify italic">{{ repo.description }}</h3>
      </header>
      <div class="card-body">
        <div class="topics">
          <ul class="flex flex-wrap items-center justify-center gap-x-4 lg:justify-start">
            <li v-for="topic in repo.topics" class="font-lg rounded-lg py-1 capitalize text-sundress">
              {{ topic }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['repo']);
</script>

<style scoped></style>
