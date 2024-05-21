<template>
  <div>
    <div
      id="logos-wrap"
      class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul ref="logos" id="stack-logos" class="flex animate-scroll-loop items-center justify-center md:justify-start">
        <li id="box" class="mx-10" v-for="logo in stackLogos">
          <Icon
            :name="`devicon:${logo}`"
            size="50"
            class="size-auto rounded-xl p-2 transition-colors duration-500 hover:bg-dsotm"
          />
        </li>
      </ul>
      <ul
        ref="logos"
        aria-hidden="true"
        id="stack-logos"
        class="flex animate-scroll-loop items-center justify-start justify-center"
      >
        <li id="box" class="mx-10" v-for="logo in stackLogos">
          <Icon
            :name="`devicon:${logo}`"
            size="50"
            class="size-auto rounded-xl p-2 transition-colors duration-500 hover:bg-dsotm"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const stackLogos: Array<String> = ['vuejs', 'nuxtjs', 'typescript', 'nodejs', 'sass', 'linux'];
</script>

<style scoped></style>
