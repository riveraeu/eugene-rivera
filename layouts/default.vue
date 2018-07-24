<template>
  <v-app>
    <navbar/>
    <v-content>
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import navbar from '~/components/globals/navbar.vue'
import Footer from '~/components/globals/footer.vue'

export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style>
/* elements */
img {
  width: 100%;
}

/* fonts */
.image-text {
  font-size: 82px;
  color: white;
  font-family: 'Lobster', cursive;
}
.logo {
  font-size: 48px;
  color: #E71D36;
  font-family: 'Pacifico', cursive;
}
.body-text {
  font-size: 18px;
  color: #84909C;
}
.header{
  font-size: 64px;
  color: #2C3E50;
  font-weight: bold;
}
.sub-header{
  font-size: 48px;
  color: #2C3E50;
  font-weight: 500;
}
/* Spacing */


/* fonts and colors */

/* responsive */
@media (max-width: 600px) {
  .v-btn--large {
    height: 36px;
    font-size: 14px;
    padding: 0 16px;
  }
  .v-parallax__image-container {
    bottom: unset;
  }
  .v-parallax {
    height: 275px !important;
  }
  .headline {
    font-size: 18px !important;
  }
  .logo {
    font-size: 28px;
  }
  .image-text {
    font-size: 48px;
  }
  .body-text {
    font-size: 14px;
  }
  .header{
    font-size: 36px;
  }
  .sub-header{
    font-size: 24px;
    color: #2C3E50;
    font-weight: 500;
  }
  .display-3 {
    font-size: 38px !important;
  }
  .display-2 {
    font-size: 34px !important;
  }
  .display-1 {
    font-size: 24px !important;
  }
  .mt-5 {
    margin-top: 24px !important;
  }
  .mb-5 {
    margin-bottom: 24px !important;
  }
  .ml-5 {
    margin-left: 24px !important;
  }
  .mr-5 {
    margin-right: 24px !important;
  }
  .ma-5 {
    margin: 24px !important;
  }
  .pt-5 {
    padding-top: 24px !important;
  }
  .pb-5 {
    padding-bottom: 24px !important;
  }
  .pl-5 {
    padding-left: 24px !important;
  }
  .pr-5 {
    padding-right: 24px !important;
  }
  .pa-5 {
    padding: 24px !important;
  }
}

</style>
