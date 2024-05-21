<template>
  <div class="h-full">
    <div
      class="wrapper grid size-full grid-cols-1 gap-5 p-3 font-poppins sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grid-rows-[repeat(3,255px)]"
    >
      <div id="greet" class="flex flex-col justify-center rounded-2xl bg-midnight p-5 lg:col-span-2">
        <div id="container" class="ml-4 w-3/4">
          <h1 class="mb-5 font-oxanium text-2xl lg:text-4xl">
            Hi, I&apos;m Guilherme Araujo &HorizontalLine;&HorizontalLine;
          </h1>
          <p class="text-lg lg:text-xl">
            A <span class="text-sundress">Web Developer</span> and <span class="text-sundress">Pixel Artist</span> based
            in Brazil
          </p>
        </div>
      </div>
      <div id="logo-self" class="size-full rounded-2xl bg-midnight lg:col-start-1 lg:row-start-2">
        <div id="logo" class="z-10 flex size-full items-center justify-center rounded-2xl bg-midnight">
          <img src="/G.svg" alt="guilherme-araujo-logo" class="size-full" />
        </div>
      </div>
      <div id="tech-stack" class="size-full rounded-2xl bg-midnight lg:col-span-2 lg:row-start-2">
        <div id="container" class="box-border flex size-full flex-col justify-evenly gap-y-5 p-5">
          <h2 class="text-center text-4xl lg:text-left lg:text-3xl">Stack I use</h2>
          <TechStack />
        </div>
      </div>
      <div id="links" class="size-full rounded-2xl">
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
          >
            <Icon :name="`mdi:${item.name}`" size="50" color="#EBCA89" />
          </a>
        </div>
      </div>
      <div id="email" class="size-full rounded-2xl bg-midnight p-5">
        <div class="container flex size-full flex-wrap items-center justify-center gap-y-5 md:gap-y-2">
          <h2 class="text-center text-xl">Got any ideas? Let&apos;s connect!</h2>
          <button class="flex h-[5rem] items-center justify-between gap-x-10 rounded-xl bg-dsotm px-5 py-3 md:h-auto">
            <span class="text-xl text-sundress">Copy email</span>
            <Icon name="simple-icons:protonmail" size="50" color="#EBCA89" />
          </button>
        </div>
      </div>
      <div id="about" class="size-full rounded-2xl bg-midnight p-5">
        <a href="#" class="flex size-full flex-col justify-between py-4">
          <p class="text-lg opacity-60 lg:text-2xl">Web Development</p>
          <div class="flex items-center justify-center gap-x-5">
            <p class="text-lg lg:text-2xl">
              A passion for <span class="text-sundress"> Web </span> and <span class="text-sundress"> Games </span> that
              you enjoy...
            </p>
            <div class="rounded-full border-2 border-sundress p-2">
              <Icon name="material-symbols:arrow-insert" size="25" color="#EBCA89" class="rotate-90" />
            </div>
          </div>
        </a>
      </div>
      <div id="image" v-for="image in images" class="size-full rounded-2xl">
        <img :src="image" loading="lazy" class="size-full rounded-2xl" />
      </div>
      <div id="about-pixel-art" class="size-full rounded-2xl bg-midnight p-5">
        <a href="#" class="flex size-full flex-col justify-between py-4">
          <p class="text-lg opacity-60 lg:text-2xl">Pixel Art | &AElig;517</p>
          <div class="flex items-center justify-center gap-x-5">
            <p class="text-lg lg:text-2xl">
              A simple <span class="text-sundress">bit</span> of creativity to any imagination...
            </p>
            <div class="rounded-full border-2 border-sundress p-2">
              <Icon name="material-symbols:arrow-insert" size="25" color="#EBCA89" class="rotate-90" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import djinn from '~/assets/images/art/Djinn.webp';
import eeyuh from '~/assets/images/art/Eeyuh.webp';
import jotunn from '~/assets/images/art/Jotunn.webp';
import traveller from '~/assets/images/art/Traveller.webp';

const socials: Array<{ name: string; link: string }> = [
  { name: 'github', link: 'https://github.com/guilherme-hja' },
  { name: 'linkedin', link: 'https://linkedin.com/in/guilherme-hj-araujo' },
  { name: 'deviantart', link: 'https://deviantart.com/ae517' },
  { name: 'instagram', link: 'https://instagram.com/ae517.art' },
  { name: 'pinterest', link: 'https://pinterest.com/ae_517' },
];

const images: Array<string> = [djinn, eeyuh, jotunn, traveller];
</script>

<style scoped></style>
