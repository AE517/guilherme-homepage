<template>
  <div>
    <section
      v-if="repo.name !== 'Guilherme-HJA'"
      class="card-wrapper flex size-full flex-col justify-between gap-y-3 rounded-lg border-sundress bg-midnight p-4 transition-all duration-100 hover:border-2 lg:justify-start"
    >
      <header>
        <h2 class="mb-2 font-oxanium text-3xl capitalize">
          {{ repo.name }}
          <span>
            <a :href="repo.url" target="_blank">
              <Icon name="mdi:github" size="35" color="#EBCA89" />
            </a>
          </span>
        </h2>
        <h3 class="test-xl text-justify italic">{{ repo.description }}</h3>
      </header>
      <div class="card-body">
        <div class="topics">
          <ul class="flex flex-wrap items-center justify-start gap-x-4">
            <li v-for="topic in repo.topics" class="rounded-lg px-2 py-1 capitalize text-sundress">
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
