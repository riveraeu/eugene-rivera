<template>
  <div>
    <div class="mt-5">
      <vue-responsive-image
        :image-url="'http://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532732308/eugene-rivera/mathyas-kurmann-102977-unsplash.jpg'"
        :image-ratio="3/2"
        :width-on-screen="100"
        :image-class="'mail-background'"
      ></vue-responsive-image>
    </div>
    <v-container>
      <v-layout  row justify-center>
        <v-flex sm8>
          <p class="body-text text-xs-center mb-5">RWS provides you with a custom built site to help promote your business across the web.
          Success is the goal and by sticking with the customer after the website is launched, we are able to help market and maintaine
          the site.
          To learn more about pricing and schedule please fill out the form below, and Eugene will be in contact promptly.</p>
        </v-flex>
      </v-layout>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout class="mb-5" row wrap justify-center>
          <v-flex sm3>
            <v-text-field prepend-icon="face" color="primary" label="Name" v-model="name" :rules="nameRules" required></v-text-field>
          </v-flex>
          <v-flex sm3>
            <v-text-field prepend-icon="phone" color="primary" label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
          </v-flex>
          <v-flex sm3>
            <v-text-field prepend-icon="email" color="primary" label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center row>
          <v-flex class="input" sm6>
            <v-textarea outline color="grey" name="message" v-model="message" label="What can we do for you?"></v-textarea >
          </v-flex>
        </v-layout>
      </v-form>
      <v-layout justify-center row wrap>
         <v-btn raised large :disabled="!valid" color="primary" @click="sendMail()">Send</v-btn>
         <v-snackbar :timeout=3000 v-model="snackbar">{{responseMessage}}</v-snackbar>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VueResponsiveImage from '~/components/ResponsiveImage.vue'
export default {
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone number is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      options: [],
      snackbar: false,
      responseMessage: ''
    }
  },
  components: {
    VueResponsiveImage
  },
  methods: {
    async sendMail () {
      if (this.$refs.form.validate()) {
        const response = await this.$axios.$post('api/mail', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          message: this.message
        })
        this.responseMessage = response
        this.snackbar = true
      }
    }
  }
}
</script>

<style>
  .mail-background {
    height: 60vh;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    .mail-background {
      height: 50vh;
    }
    .image-text {
      margin-top: 48px !important;
    }
  }
</style>
