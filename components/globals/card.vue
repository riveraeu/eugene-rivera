<template>
  <v-flex sm4>
    <v-card  class="ma-3">
      <v-card-media :src="icon" height="15vh" contain>
      </v-card-media>
      <v-card-title primary-title>
        <v-spacer></v-spacer>
        <div class="sub-header display-1">{{title}}</div>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <div class="body-text text-xs-center">{{text}}</div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['icon', 'title', 'text']
}
</script>

<style scoped>
.card {
  height: 50vh !important;
}
@media (max-width: 600px) {
  .card {
    height: 60vh !important;;
  }
}
</style>
