<template>
  <div class="h-full">
    <div
      ref="wrapper"
      class="wrapper grid size-full grid-cols-1 gap-5 p-3 font-poppins *:size-full *:rounded-lg *:bg-midnight sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:content-center xl:grid-rows-[repeat(3,_minmax(255px,_300px))]"
    >
      <div id="greet" class="flex animate-fade-up flex-col justify-center p-5 animate-delay-100 lg:col-span-2">
        <NuxtLink to="/about" id="container" class="ml-4 size-full py-12">
          <h1 class="mb-5 font-oxanium text-2xl lg:text-4xl">
            Hi, I&apos;m <span @mouseover="switchName" v-html="name"></span>
            <Icon name="material-symbols:arrow-insert" size="25" color="#EBCA89" class="ml-3 rotate-90" />
          </h1>
          <p class="text-lg lg:text-xl xl:text-2xl">
            A <span class="text-sundress">Web Developer</span> and <span class="text-sundress">Pixel Artist</span> based
            in Brazil
          </p>
        </NuxtLink>
      </div>
      <div
        id="logo-self"
        class="animate-delay-50 relative animate-fade-down overflow-hidden lg:col-start-1 lg:row-start-2"
      >
        <div id="logo" class="absolute z-10 flex size-full items-center justify-center bg-midnight">
          <NuxtImg src="/G.svg" loading="lazy" alt="guilherme-araujo-logo" class="size-full" />
        </div>
      </div>
      <div id="tech-stack" class="animate-fade-left animate-delay-200 lg:col-span-2 lg:row-start-2">
        <div id="container" class="box-border flex size-full flex-col justify-evenly gap-y-5 p-5">
          <h2 class="text-center text-4xl lg:text-left lg:text-3xl">Stack I use</h2>
          <TechStack />
        </div>
      </div>
      <div id="links" class="animate-delay-120 animate-fade-right !bg-transparent">
        <Socials size="60" />
      </div>
      <div id="projects" class="animate-fade-up p-5 animate-delay-300 xl:col-span-2">
        <NuxtLink to="/projects" class="flex size-full flex-col justify-between py-4">
          <p class="text-lg opacity-60 lg:text-2xl">Development | Projects</p>
          <div class="flex items-center justify-center gap-x-5">
            <p class="text-lg lg:text-2xl">
              A passion for <span class="text-sundress"> Web </span> and <span class="text-sundress"> Games </span> that
              you enjoy...
            </p>
            <div class="border-sundressress rounded-full border-2 p-2">
              <Icon name="material-symbols:arrow-insert" size="25" color="#EBCA89" class="rotate-90" />
            </div>
          </div>
        </NuxtLink>
      </div>
      <BentoImages v-for="index in 4" :source="`/art/${index}.webp`" :index="index" />
      <div id="email" class="animate-fade-right p-5 animate-delay-200 xl:col-start-5">
        <div class="container flex size-full flex-wrap items-center justify-center gap-y-5 md:gap-y-2">
          <h2 class="text-center text-xl">Got any ideas? Let&apos;s connect!</h2>
          <button
            @click="email"
            class="flex h-[5rem] items-center justify-between gap-x-10 rounded-xl bg-dsotm px-5 py-3 md:h-auto"
          >
            <span ref="emailLabel" class="text-xl text-sundress">Copy email</span>
            <Icon name="simple-icons:protonmail" size="50" color="#EBCA89" />
          </button>
        </div>
      </div>
      <div
        id="about-pixel-art"
        class="animate-delay-600 col-span-full animate-fade-down p-5 md:col-span-2 lg:col-span-full xl:col-span-2 xl:col-start-3 xl:row-start-3"
      >
        <NuxtLink to="/gallery" class="flex size-full flex-col justify-evenly py-4 lg:justify-between">
          <p class="text-lg text-lg opacity-60 md:text-2xl">
            Pixel Art | &AElig;517 <span class="ml-4"> <Icon name="pixelarticons:image-gallery" size="35" /></span>
          </p>
          <div class="flex items-center justify-center gap-x-5">
            <p class="text-xl md:text-2xl">
              A simple <span class="text-sundress">bit</span> of creativity to any imagination...
            </p>
            <div class="rounded-full border-2 border-sundress p-2">
              <Icon name="pixelarticons:arrow-right" size="25" color="#EBCA89" class="-rotate-45" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emailLabel = ref<HTMLSpanElement | null>(null);
const name = ref('Guilherme Araujo');

const switchName = () => {
  name.value = name.value === 'Guilherme Araujo' ? '&AElig;517' : 'Guilherme Araujo';
};

const email = () => {
  copyEmail();
  emailLabel.value.innerText = 'Email copied!';
  setTimeout(() => {
    emailLabel.value.innerText = 'Copy Email';
  }, 1000);
};
</script>

<style scoped></style>
