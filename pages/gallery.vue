<template>
  <div>
    <div class="wrapper">
      <div class="grid size-full container">
        <div v-for="image in galleryImages">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'content',
});

const AE_URL : string = "https://backend.deviantart.com/rss.xml?q=gallery:ae517"
const { data: images } = await useFetch(AE_URL)
const responseList : object[] = await imageDataParser(images.value)

const galleryImages = responseList.slice(1).map(item => {
  const desc = item.description;
  const imgEntry = desc.match(/https:\/\/[a-zA-Z0-9]*[^"]*/g)
  return imgEntry[0].split(" ")[0]
})
</script>

<style scoped></style>
