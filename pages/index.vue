<template>
  <div>
    <div
      class="wrapper xl:grid-rows-[repeat(5, 250px)] grid h-full auto-rows-auto grid-cols-2 justify-items-center gap-x-8 gap-y-6 border-2 border-black p-2 sm:grid-rows-[repeat(5,150px)] md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:gap-x-4 xl:grid-cols-7"
    >
      <div id="logo" class="col-span-2 md:col-span-1">
        <img src="/G.svg" alt="guilherme-araujo-logo" class="m-auto size-[155px]" />
      </div>
      <div
        id="greet"
        class="align-center col-span-2 flex w-full flex-col justify-center gap-y-2 p-2 text-maui-mist md:p-1 lg:col-start-2 xl:col-span-5"
      >
        <h1 class="text-center font-oxanium text-5xl md:text-left">GREETINGS</h1>
        <h2 class="text-center font-poppins text-3xl md:text-left">I&apos;m Guilherme Araujo</h2>
        <p class="text-center font-poppins text-xl md:text-left">
          A <span class="text-sundress">Web</span> Developer and <span class="text-sundress">Pixel Artist</span> based
          in Brazil
        </p>
      </div>
      <div
        id="linkedin"
        :class="baseSquareSize"
        class="align-center flex items-center justify-center rounded-md bg-[#0076B2] xl:col-start-2 xl:row-start-3"
      >
        <a href="https://linkedin.com/in/guilherme-hj-araujo" target="_blank">
          <Icon name="devicon:linkedin" size="90" />
        </a>
      </div>
      <div
        id="github"
        :class="baseSquareSize"
        class="align-center flex items-center justify-center rounded-md bg-[#f7f9f9] xl:col-start-2 xl:row-start-4"
      >
        <a href="https://github.com/guilherme-hja" target="_blank">
          <Icon name="devicon:github" size="90" />
        </a>
      </div>
      <div
        id="tech-stack"
        class="col-span-2 flex size-full flex-col gap-y-4 rounded-md bg-midnight p-4 sm:row-span-full sm:max-lg:justify-evenly sm:max-md:row-span-1 md:col-span-1 md:row-span-5 md:row-start-2 md:row-start-2 xl:row-span-full xl:row-start-2"
      >
        <p class="hidden text-center font-oxanium text-4xl lg:block">Stack</p>
        <div class="logos flex flex-wrap items-center justify-between gap-x-8 gap-y-6 md:flex-col md:gap-y-10">
          <Icon v-for="logo in stackLogos" :name="`devicon:${logo}`" size="60" />
        </div>
      </div>
      <div
        id="on-going"
        class="col-span-2 rounded-md bg-midnight p-4 text-justify md:row-span-2 md:row-start-2 lg:col-span-3 lg:row-span-full lg:row-start-2"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis autem, ea maxime dolorum, quisquam
        suscipit illo quae doloribus aspernatur ratione unde quam quis laboriosam. Aliquam quo aliquid, nulla reiciendis
        odio dignissimos vero pariatur numquam. Eligendi soluta cumque nisi corporis! Nobis inventore fuga dolorem velit
        ducimus. Labore eligendi incidunt eveniet!
      </div>
      <div id="resume" :class="socialsBaseStyle">
        <Icon name="ri:file-download-fill" size="70" color="#EBCA89" />
        About me
      </div>
      <div id="portfolio" :class="socialsBaseStyle">
        <Icon name="solar:code-2-bold" color="#EBCA89" size="70" />
        My works
      </div>
      <div
        id="deviant"
        :class="socialsBaseStyle.replace('bg-midnight', 'bg-maui-mist')"
        class="xl:col-start-2 xl:row-start-2"
      >
        <Icon name="mdi:deviantart" size="75" color="#45AD47" />
      </div>
      <div
        id="latest"
        class="col-span-2 rounded-md bg-midnight p-4 text-justify md:row-span-2 lg:row-span-full lg:row-start-2 xl:col-span-3"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis autem, ea maxime dolorum, quisquam
        suscipit illo quae doloribus aspernatur ratione unde quam quis laboriosam. Aliquam quo aliquid, nulla reiciendis
        odio dignissimos vero pariatur numquam. Eligendi soluta cumque nisi corporis! Nobis inventore fuga dolorem velit
        ducimus. Labore eligendi incidunt eveniet!
      </div>
      <div
        id="mail"
        :class="socialsBaseStyle"
        class="col-span-1 row-span-1 md:max-lg:row-start-4 xl:col-start-2 xl:row-start-5"
      >
        <a href="mailto:guilherme.hjaraujo@proton.me">
          <Icon name="simple-icons:protonmail" size="75" color="#EBCA89" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stackLogos: Array<String> = ['vuejs', 'nuxtjs', 'typescript', 'nodejs', 'sass', 'linux'];
const baseSquareSize: String = 'size-[155px] sm:max-lg:size-[160px]';
const socialsBaseStyle: String = `flex ${baseSquareSize} flex-col items-center justify-center rounded-md bg-midnight text-maui-mist`;
</script>

<style scoped></style>
