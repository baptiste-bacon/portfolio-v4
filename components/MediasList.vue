<template>
  <section class="medias-list">
    <prismic-rich-text
      class="medias-list__title"
      :field="slice.primary.project_title"
    />
    <div class="medias-list__media" v-for="media in slice.items">
      <img :src="media.media.url" alt="" class="medias-list__media-image" />
    </div>
  </section>
</template>
<script setup>
import { getSliceComponentProps } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice"]));
</script>
