<template>
  <section class="projects-list">
    <h2 class="projects-list__title">Derniers projets</h2>
    <div class="projects-list__project" v-for="(project, key) in slice.items">
      <h3 class="projects-list__project-number">{{ "0" + (key + 1) }}</h3>
      <NuxtLink
        class="projects-list__project-link"
        :to="'/projects/' + project.project_link.uid"
      >
        <prismic-rich-text
          class="projects-list__project-title"
          :field="project.project_title"
        />
        <p class="projects-list__project-date">{{ project.project_date }}</p>
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice"]));
</script>
