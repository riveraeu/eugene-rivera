<template>
  <div class="">
    <v-toolbar dark color="primary" fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down ml-0">
        <v-btn flat to="/">
          <v-toolbar-title class="logo">RWS</v-toolbar-title>
        </v-btn>
      </v-toolbar-items>
      <v-spacer/></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-0">
        <v-btn flat v-for="(link, index) in navigation" :key="index" :to="link.to" color="">
          <v-icon left>{{link.icon}}</v-icon>{{link.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer height="50vh" temporary v-model="drawer" fixed class="primary" dark>
      <v-list-tile color="" to="/">
       <v-list-tile-content>
         <v-list-tile-title class="logo">RWS</v-list-tile-title>
       </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <div class="" v-for="(link, index) in navigation" :key="index">
        <v-list-tile color="" avatar :to="link.to">
          <v-list-tile-avatar>
            <v-icon class="">{{link.icon}}</v-icon>
         </v-list-tile-avatar>
         <v-list-tile-content>
           <v-list-tile-title class="white--text">{{link.title}}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>
       <v-divider></v-divider>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navigation: [
        {title: 'Projects', to: '/projects', icon: 'web'},
        {title: 'Contact', to: '/contact', icon: 'email'}
      ]
    }
  }
  /* Shoppoing cart stuff
  computed: {
    cartTotal () {
      return this.$store.state.rentals.cartTotal
    },
    showCart () {
      return this.$store.state.rentals.showCart
    }
  }
  */
}
</script>
