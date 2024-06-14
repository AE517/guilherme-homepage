<template>
  <div>
    <nav class="nav flex size-full flex-col gap-y-6 items-center">
      <NuxtLink to="/">
        <div id="logo" class="flex size-[165px] items-center justify-center">
          <img src="/G.svg" alt="guilherme-araujo-logo" class="size-full" />
        </div>
      </NuxtLink>
      <div class="container flex flex-row w-[85%] p-2 justify-between bg-midnight rounded-lg">
        <NuxtLink v-for="link in routeElements" :to="link.path" :aria-label="link.label">
          <Icon :name="link.icon" size="60" :color="$route.path === link.path ? '#EBCA89' : ''"/>
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
  // { path: '/gallery', label: 'AE517 Gallery', icon: "pixelarticons:image-gallery" },
  // { path: '/about', label: 'About Me page', icon: "pixelarticons:avatar" },
  { path: '/projects', label: 'Projects page', icon: "ri:code-box-fill" },
];

</script>

<style scoped></style>
