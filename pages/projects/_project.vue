<template >
  <v-container>
    <v-layout justify-center>
      <h1 class="header text-xs-center mt-5">{{items[0].context.custom.title}}</h1>
    </v-layout>
    <div class="mb-5 mt-5" v-for="(item, i) in items" :key="i">
      <v-layout row wrap>
        <v-flex v-if="i % 2 !== 0" class="text-xs-center pa-5 projects" sm6>
          <p class="body-text">{{item.context.custom.long}}</p>
        </v-flex>
        <v-flex v-if="i % 2 !== 0" sm6>
          <img :src="item.secure_url" alt="image">
        </v-flex>
        <v-flex v-if="i % 2 === 0" sm6>
          <img :src="item.secure_url" alt="image">
        </v-flex>
        <v-flex v-if="i % 2 === 0" class="text-xs-center pa-5 projects" sm6>
          <p class="body-text">{{item.context.custom.long}}</p>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  async asyncData ({ app, params }) {
    const res = await app.$axios.$get('api/projects/' + params.project)
    return {items: res}
  }
}
</script>

<style scoped>
  @media (max-width: 600px) {
    .header {
      margin-top: 48px !important;
    }
  }
</style>
