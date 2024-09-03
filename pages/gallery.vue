<template>
  <div>
    <div class="wrapper flex flex-col items-center justify-center gap-y-20 p-2">
      <section id="greet" class="flex flex-col gap-y-5">
        <h1 class="animate-fade-left text-center font-oxanium text-8xl animate-delay-500 lg:text-9xl">&AElig;517</h1>
        <div class="flex animate-fade-right flex-col justify-evenly gap-5 animate-delay-[1000ms] lg:flex-row">
          <div id="greet-images" class="flex flex-col gap-5 sm:flex-row">
            <figure>
              <img class="rounded-md transition-all" loading="lazy" src="/art/1.webp" alt="Facade of Ambitious Ego" />
              <figcaption class="mt-1 text-center text-lg font-semibold">
                Facade of Ambitious Ego -
                <a
                  class="font-normal text-sundress"
                  target="_blank"
                  href="https://www.deviantart.com/ae517/art/Facade-of-Ambitious-Ego-914464332"
                  >Tales of a Never Ending Story</a
                >
              </figcaption>
            </figure>
            <figure>
              <img class="rounded-md transition-all" loading="lazy" src="/art/4.webp" alt="The Eternity Traveller" />
              <figcaption class="mt-1 text-center text-lg font-semibold">
                The Eternity Traveller -
                <a
                  class="font-normal text-sundress"
                  target="_blank"
                  href="https://www.deviantart.com/ae517/art/The-Eternity-Traveller-920362530"
                  >Tales of a Never Ending Story</a
                >
              </figcaption>
            </figure>
          </div>
          <div class="flex flex-col gap-y-5 *:animate-fade-up *:text-wrap *:text-justify *:text-lg *:lg:text-xl">
            <p class="animate-delay-[1500ms]">
              The name <strong class="text-sundress">&AElig;517</strong> first appeared in 2018 with the growing passion
              for old and indie pixel art games, inspired by my favorite worlds, simple ideas in paper that turned into
              great concepts, so I decided to give it a try regardless of my colorblindness, and so I stand in this
              adventurous and pixelated path...
            </p>
            <p class="animate-delay-[2000ms]">
              My style inclines to a <strong class="text-sundress"> Terraria-esque </strong> inspired aspect combined
              with a <strong class="text-sundress">Dark Fantasy and Spiritual mood</strong>, however never not trying
              something new.
            </p>
            <p class="animate-delay-[2500ms]">
              Currently I'm working on a Terraria Mod called <span class="text-sundress">Plenty o' Darts</span>, a
              simple weapons mod that aims to give the players more opportunities to use the Throwing class and explore
              the use of the already present Darts in game.
            </p>
            <div class="flex gap-5">
              <Icon name="simple-icons:aseprite" size="50" color="#EBCA89" />
              <a href="https://www.instagram.com/ae517.art" target="_blank"
                ><Icon name="mdi:instagram" size="50" color="#EBCA89"
              /></a>
              <a href="https://www.deviantart.com/ae517" target="_blank"
                ><Icon name="mdi:deviantart" size="50" color="#EBCA89"
              /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" class="flex animate-fade-left flex-col gap-5 animate-delay-[1500ms]">
        <h1 class="text-center font-oxanium text-6xl lg:text-7xl">Some of my pieces</h1>
        <section id="gallery-images">
          <div class="flex size-full flex-row flex-wrap justify-evenly gap-5 *:max-w-[320px] *:text-lg">
            <figure>
              <img class="rounded-md" src="/art/6.webp" alt="Never-Lost Pride - Alf" />
              <figcaption class="mt-1 text-center font-semibold">Never-Lost Pride - Alf</figcaption>
            </figure>
            <figure>
              <img class="rounded-md" src="/art/5.webp" alt="Invi" />
              <figcaption class="mt-1 text-center font-semibold">Invi</figcaption>
            </figure>
            <figure>
              <img class="rounded-md" src="/art/3.webp" alt="Jotunn" />
              <figcaption class="mt-1 text-center font-semibold">Memoir of Countless Origins - Jötunn</figcaption>
            </figure>
            <figure>
              <img class="rounded-md" src="/art/8.webp" alt="Invi" />
              <figcaption class="mt-1 text-center font-semibold">Berand</figcaption>
            </figure>
            <figure>
              <img class="rounded-md" src="/art/9.webp" alt="Invi" />
              <figcaption class="mt-1 text-center font-semibold">Dumiurgis</figcaption>
            </figure>
          </div>
        </section>
        <section id="gallery-animations">
          <div class="flex flex-col justify-center gap-5 lg:flex-row">
            <figure>
              <img class="rounded-md" src="/art/7.webp" alt="Project SIGNUS" />
              <figcaption class="mt-1 text-center font-semibold">Project SIGNUS</figcaption>
            </figure>
            <figure>
              <img class="rounded-md" src="/art/11.webp" alt="Project SIGNUS" />
              <figcaption class="mt-1 text-center font-semibold">
                <strong>Project SIGNUS</strong> - Hidden Files
              </figcaption>
            </figure>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'content',
});
</script>

<style scoped></style>
