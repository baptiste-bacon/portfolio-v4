<template>
  <div class="project">
    <div class="project__head">
      <prismic-rich-text
        class="project__head-title"
        :field="project.data.title"
      />
      <div class="project__head-number">{{ project.data.date }}</div>
    </div>
    <div class="project__informations">
      <div class="project__informations-details">
        <div class="project__role">
          <h4 class="project__role-title project__title">Rôle/s</h4>
          <p class="project__role-paragraph project__paragraph">
            {{ project.data.role }}
          </p>
        </div>
        <div class="project__techno">
          <h4 class="project__techno-title project__title">Technologies</h4>
          <p class="project__techno-paragraph project__paragraph">
            {{ project.data.techno }}
          </p>
        </div>
      </div>
      <div class="project__description">
        <h4 class="project__description-title project__title">Description</h4>
        <p class="project__description-paragraph project__paragraph">
          {{ project.data.description }}
        </p>
      </div>
    </div>
    <div class="project__medias">
      <div class="project__media" v-for="media in project.data.medias">
        <img :src="media.media.url" alt="" />
      </div>
    </div>
    <slice-zone :slices="project.data.body" :components="components" />
  </div>
</template>
<script setup>
import { defineSliceZoneComponents } from "@prismicio/vue";
import MediasList from "~~/components/MediasList.vue";

const route = useRoute();
const { client } = usePrismic();

const { data: project } = await useAsyncData("projectpage", () =>
  client.getByUID("projectpage", route.params.id)
);

const components = defineSliceZoneComponents({
  medias_list: MediasList,
});
</script>
