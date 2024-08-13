<template>
  <div>
    <nav
      class="nav flex size-full flex-col items-center justify-between gap-y-6 lg:fixed lg:size-[70px] lg:h-screen lg:w-min"
    >
      <NuxtLink to="/">
        <div id="logo" class="flex size-[165px] items-center justify-center lg:size-[60px]">
          <img src="/G.svg" alt="guilherme-araujo-logo" class="size-full" />
        </div>
      </NuxtLink>
      <div
        class="container flex w-[85%] flex-row justify-between bg-transparent p-2 sm:justify-evenly lg:w-full lg:flex-col lg:gap-y-6"
      >
        <NuxtLink v-for="link in routeElements" :to="link.path" :aria-label="link.label">
          <Icon :name="link.icon" size="60" :color="$route.path === link.path ? '#EBCA89' : ''" />
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const routeElements: Array<{
  path: String;
  label: String;
  icon: String;
}> = [
  { path: '#', label: 'AE517 Gallery', icon: 'pixelarticons:image-gallery' },
  { path: '/about', label: 'About Me page', icon: 'pixelarticons:avatar' },
  { path: '/projects', label: 'Projects page', icon: 'ri:code-box-fill' },
];
</script>

<style scoped></style>
