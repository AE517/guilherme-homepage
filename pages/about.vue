<template>
  <div>
    <div class="wrapper mt-4 grid p-3 lg:mt-0 lg:grid-cols-2">
      <section class="whoami">
        <div class="flex flex-col justify-center gap-y-10">
          <section id="about-me" class="flex flex-col justify-center gap-y-5">
            <h1
              class="border-b-2 border-sundress text-center font-oxanium text-5xl font-semibold uppercase md:w-[300px] lg:text-left lg:capitalize"
            >
              Who am I?
            </h1>
            <p class="text-justify text-lg">
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
              class="border-b-2 border-sundress text-center font-oxanium text-5xl font-semibold uppercase md:w-[300px] lg:text-left lg:capitalize"
            >
              Bio
            </h1>
            <section id="bio-timeline" class="flex flex-col gap-y-5 text-justify text-lg lg:text-xl">
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
            <section id="education" class="mt-5 flex flex-col justify-center gap-y-5">
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
                    <a class="font-xl font-semibold uppercase text-sundress" :href="cert.url">{{ cert.place }}</a>
                    <br />
                  </li>
                </ul>
              </section>
              <!-- Education Section END -->
            </section>
          </section>
        </div>
      </section>
      <section class="social"></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '/assets/educ.json';

const educ = data.education;
const certs = data.certifications;

definePageMeta({
  layout: 'content',
});
</script>

<style scoped></style>
