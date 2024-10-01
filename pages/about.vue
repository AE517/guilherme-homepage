<template>
  <div>
    <div class="wrapper mt-4 grid grid-cols-1 gap-y-10 p-3 lg:mt-0 lg:grid-cols-3 lg:gap-x-10">
      <section id="social" class="align-center flex flex-col gap-y-5 p-2">
        <section id="profile" class="flex animate-fade-up flex-col gap-y-5 animate-delay-500">
          <div id="profile-picture">
            <figure id="picture-image" class="flex justify-center">
              <NuxtImg
                class="aspect-square rounded-md transition-all sm:max-lg:size-3/5 lg:size-2/3"
                src="/assets/images/profile.webp"
                alt="Guilherme-profile-picture"
              />
            </figure>
          </div>
          <div>
            <h1 class="text-center font-oxanium text-5xl">GUILHERME ARAUJO</h1>
          </div>
        </section>
        <section id="socials" class="flex animate-fade-up overflow-x-scroll animate-delay-[1000ms] sm:justify-center">
          <div>
            <Socials size="50" />
          </div>
        </section>
        <section id="interests" class="animate-fade-up animate-delay-[1500ms]">
          <h1 class="my-4 text-center font-oxanium text-5xl">Personal Interests</h1>
          <div class="flex items-start gap-10 overflow-x-scroll xl:flex-wrap xl:justify-center">
            <div id="icons" v-for="interest in interests" class="flex flex-col items-center">
              <Icon :name="interest.icon" size="50" color="#EBCA89" />
              <p class="text-center capitalize">{{ interest.name }}</p>
            </div>
          </div>
        </section>
      </section>

      <section class="whoami col-span-1 md:col-span-2">
        <div class="flex flex-col justify-center gap-y-10">
          <section id="about-me" class="flex animate-fade-left flex-col justify-center gap-y-5 animate-delay-500">
            <h1
              class="border-b-2 border-sundress text-center font-oxanium text-5xl font-semibold uppercase md:w-[300px] lg:text-left lg:capitalize"
            >
              Who am I?
            </h1>
            <p class="text-justify text-lg lg:text-xl">
              I&apos;m a <strong class="text-sundress"> Web Developer</strong> and
              <strong class="text-sundress">Pixel Artist</strong> based in Brazil. With a passion for arts, games and
              programming, my goal is to deliver only the most creative solutions to almost any challenge. <br />
              Although my stack mainly focus on <strong class="text-sundress">Vue.JS</strong> and
              <strong class="text-sundress">Typescript</strong>, I'm willing to expand and adapt my knowledge for the
              sake of the goals in mind.
            </p>
          </section>
          <section id="bio" class="mt-4 flex flex-col justify-center gap-y-5">
            <h1
              class="animate-fade-left border-b-2 border-sundress text-center font-oxanium text-5xl font-semibold uppercase animate-delay-1000 md:w-[300px] lg:text-left lg:capitalize"
            >
              Bio
            </h1>
            <section
              id="bio-timeline"
              class="flex animate-fade-left flex-col gap-y-5 text-justify text-lg animate-delay-1000 lg:text-xl"
            >
              <!-- Bio timeline -->
              <article><strong>2001</strong> &horbar; Born in Promissão, São Paulo - Brazil;</article>
              <article>
                <strong>2018</strong> &horbar; Completed the Information Technology Course at the Tech School ETEC Dr.
                Emilio Hernandez Aguilar | Franco da Rocha - São Paulo;
              </article>
              <article>
                <strong>2022</strong> &horbar; Started studying System Analysis at FAM (Graduation expected at 07/2025)
                | São Paulo;
              </article>
              <article>
                <strong>2022</strong> &horbar; Worked at Infrared Manutenção and Infralub (Former Test Oil do Brasil) as
                an IT Technician Intern | Mairiporã - São Paulo;
              </article>
              <article><strong>2023 to present</strong> &horbar; Works as Freelance.</article>
            </section>
            <!-- Bio timeline END -->
            <section
              id="education"
              class="flex animate-fade-left flex-col justify-center gap-y-5 animate-delay-[1500ms]"
            >
              <!-- Education Section -->
              <h1
                class="border-b-2 border-sundress text-center font-oxanium text-5xl font-semibold uppercase md:w-[300px] lg:text-left lg:capitalize"
              >
                Education
              </h1>
              <section class="flex flex-col gap-y-5 text-left text-lg">
                <ul id="school-uni" class="align-center flex flex-col justify-center gap-y-10 lg:gap-y-5">
                  <li v-for="item in educ">
                    <h1 class="text-center text-2xl font-semibold md:text-left">{{ item.name }}</h1>
                    | {{ item.comp_year }} at {{ item.place }}
                  </li>
                </ul>
                <ul id="certs" class="align-center flex flex-col justify-center gap-y-10 lg:gap-y-5">
                  <li v-for="cert in certs">
                    <h1 class="text-center text-2xl font-semibold md:text-left">{{ cert.name }}</h1>
                    | {{ cert.comp_year }} at
                    <a class="font-xl font-semibold uppercase text-sundress" :href="cert.url" target="_blank"
                      >{{ cert.place }}
                      <Icon name="material-symbols:arrow-insert" size="20" color="#EBCA89" class="rotate-90" />
                    </a>
                    <br />
                  </li>
                </ul>
              </section>
              <!-- Education Section END -->
            </section>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '/assets/educ.json';

const educ = data.education;
const certs = data.certifications;

const interests: Array<{ icon: string; name: string }> = [
  { icon: 'mdi:books', name: 'reading' },
  { icon: 'ion:game-controller', name: 'gaming' },
  { icon: 'material-symbols:draw', name: 'drawing' },
  { icon: 'pixelarticons:pixelarticons', name: 'pixel art' },
  { icon: 'eos-icons:configuration-file', name: 'game moding' },
  { icon: 'mdi:rice', name: 'linux ricing' },
  { icon: 'material-symbols:cooking', name: 'cooking' },
  { icon: 'material-symbols:function', name: 'functional programming' },
];

definePageMeta({
  layout: 'content',
});
</script>

<style scoped></style>
