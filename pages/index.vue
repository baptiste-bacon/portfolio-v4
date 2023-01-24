<template>
  <section class="home">
    <h1 class="home__title">PORTFOLIO</h1>
    <div class="home__background">
      <section class="about">
        <h2 class="about__title">Présentation</h2>
        <p class="about__description">
          {{ home.data.about_description }}
        </p>
        <div class="about__skills">
          <h5 class="about__skills-title">Compétences</h5>
          <p class="about__skills-paragraph about__paragraph">
            {{ home.data.about_skills }}
          </p>
        </div>
        <div class="about__column">
          <div class="about__contact">
            <h5 class="about__contact-title">Contact</h5>
            <div
              class="about__contact-item"
              v-for="contact in home.data.about_contact"
            >
              <p class="about__contact-paragraph about__paragraph">
                <span>{{ contact.contact_name }}</span>
                <NuxtLink to="{{ contact.contact_link }}">
                  <span>{{ contact.contact_informations }}</span>
                </NuxtLink>
                <span></span>
              </p>
            </div>
          </div>
          <div class="about__techno">
            <h5 class="about__techno-title">Technologies</h5>
            <p class="about__techno-paragraph about__paragraph">
              {{ home.data.about_techno }}
            </p>
          </div>
        </div>

        <div class="about__tools">
          <h5 class="about__tools-title">Logiciels/Outils</h5>
          <p class="about__tools-paragraph about__paragraph">
            {{ home.data.about_tools }}
          </p>
        </div>
        <div class="about__lang">
          <h5 class="about__lang-title">Logiciels/Outils</h5>
          <p class="about__lang-paragraph about__paragraph">
            <span>Francais Langue maternelle</span>
            <span>Anglais Compétence professionnelle</span>
          </p>
        </div>
      </section>
      <slice-zone :slices="home.data.body" :components="components" />
    </div>
  </section>
</template>
<script setup>
import { defineSliceZoneComponents } from "@prismicio/vue";
import { NuxtLink } from "~~/.nuxt/components";
import ProjectsList from "~~/components/ProjectsList.vue";

const { client } = usePrismic();
const { data: home } = await useAsyncData("homepage", () =>
  client.getSingle("homepage")
);

const components = defineSliceZoneComponents({
  projects_list: ProjectsList,
});
</script>
