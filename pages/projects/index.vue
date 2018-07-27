<template>
  <v-container>
    <v-layout justify-center>
      <h1 class="header text-xs-center mt-5 mb-5">Projects</h1>
    </v-layout>
    <div v-for="(project, i) in projects" :key="i">
      <v-layout row wrap>
        <v-flex sm6>
          <vue-responsive-image
            :image-url="project.secure_url"
            :image-ratio="2/1"
            :width-on-screen="100"
          ></vue-responsive-image>
        </v-flex>
        <v-flex class="text-xs-center pa-5 projects" sm6>
          <h1 class="sub-header">{{project.context.custom.title}}</h1>
          <p class="body-text">{{project.context.custom.short}}</p>
          <v-btn class="primary" large raised :to="{name: 'projects-project', params: {project: project.context.custom.path}}">Read More</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import VueResponsiveImage from '~/components/ResponsiveImage.vue'
export default {
  data () {
    return {
      projects: []
    }
  },
  components: {
    VueResponsiveImage
  },
  async asyncData ({ app }) {
    const res = await app.$axios.$get('api/projects/projects')
    return {projects: res}
  }
}
</script>

<style scoped>
  @media (max-width: 600px) {
    .mt-5 {
      margin-top: 48px !important;
    }
  }
</style>
