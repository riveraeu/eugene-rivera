<template>
  <div class="">
    <v-layout class="mt-5" row>
      <v-flex xs6>
        <vue-responsive-image
          :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532649367/eugene-rivera/helloquence-61189-unsplash-min.jpg'"
          :image-ratio="3/2"
          :width-on-screen="50"
        ></vue-responsive-image>
      </v-flex>
      <v-flex xs6>
        <vue-responsive-image
          :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532649338/eugene-rivera/ilya-pavlov-87438-unsplash-min.jpg'"
          :image-ratio="3/2"
          :width-on-screen="50"
        ></vue-responsive-image>
      </v-flex>
    </v-layout>
    <v-layout align-center column justify-center>
      <h1 class="image-text text-xs-center primary--text mt-5">Rivera Web Solutions</h1>
    </v-layout>
    <v-container>
      <v-layout align-center column>
        <v-flex class="mb-5">
          <p class="body-text headline text-xs-center">Modern web solutions for your bussines.
          Founded by Eugene Rivera, Rivera Web Solutions specializes in custom built and designed websites.
          Read about the web building process, view examples of previous projects and get in contact with Eugene today!</p>
        </v-flex>
        <v-flex xs1>
          <v-btn large raised dark color="primary" to="/contact">Let's Talk</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="grey-background mt-5 pb-5">
      <v-container fluid>
        <v-layout justify-center>
          <h1 class="header mt-5 mb-5 text-xs-center">Web Design Process</h1>
        </v-layout>
        <v-layout justify-center row wrap>
          <card icon="/process/vectors-market-strategy.svg" title="Planning" text="
          The process starts off by meeting with the customer and talking about what they are looking for in a website.
          We work together to stategies the best plan for your site.
          This is when we disscus different features the customer is look for and how best to achive them.
          Eugene also conducts market research and studies succesful sites in the same indusrty. "/>
          <card icon="/process/DinosoftLabs-edit.svg" title="Design" text="Next up is the site design stage.
          Starting with basic “wire frame” drawings, then progessing to a digital mockup on your site.
          This is a very important part of the process, as you get to see what your site will look like, and figure our what is working
          and what can be improved design wise. The mockups showcase how the site will look on mobile phones and larger sceens."/>
          <card icon="/process/Freepik-coding.svg" title="Development" text="Now the time has come to start programming your site.
          Eugene use some of the latest and most advanved web technologies to build a fast, secure and engaging site.
          Eugene works to futher improve the design in this stage, so that the customer and their users are satisfied."/>
          <card icon="/process/vectors-market-rocket-ship.svg" title="Launch" text="
          After thoughrly testing your website for errors, bugs, preformance and usability, it is time to launch.
          Deploying the project to production server, you will now be able to share the with all your customers and supporters.
          Now you have a beautiful custom site, what about getting people to visit?"/>
          <card icon="/process/Prosymbols-statistics.svg" title="Marketing & Maitenace" text="
          Eugene sticks with you after your project is launched to help you get the most out of it.
          He helps to make sure your site is being properly marketed and showing up in google searches.
          Eugene is also on hand should any technical problems arise or you want to make changes or updates to your site."/>
        </v-layout>
        <v-layout class="pt-5" justify-center>
          <v-btn large raised dark color="primary" to="/contact">Get Started</v-btn>
        </v-layout>
      </v-container>
    </div>
    <div class="dark-background pt-5 pb-5">
      <v-container>
        <v-layout justify-center>
          <h1 class="header white--text mb-5">Projects</h1>
        </v-layout>
        <v-layout row wrap v-for="(project, index) in projects" :key="index">
          <v-flex sm6>
            <vue-responsive-image
              :image-url="project.secure_url"
              :image-ratio="2/1"
              :width-on-screen="100"
            ></vue-responsive-image>
          </v-flex>
          <v-flex class="text-xs-center pa-5 projects" sm6>
            <h1 class="sub-header white--text">{{project.context.custom.title}}</h1>
            <p class="body-text white--text">{{project.context.custom.short}}</p>
            <v-btn class="primary--text" large raised :to="{name: 'projects-project', params: {project: project.context.custom.path}}">Read More</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
      <v-container class="">
        <v-layout justify-center row>
          <h1 class="header mb-5 text-xs-center">About</h1>
        </v-layout>
        <v-layout justify-center row wrap>
          <v-flex sm4>
            <p class="body-text mr-5 text-xs-center about">Founded by Eugene Rivera, Rivera Web Solutions is a small web design and development business.
            Based in the Bay Area Eugene is able to server a wide varierty of local clients, along with any remote projects.
            After reciving his Computer Science degree from Sonoma State University, Eugene went on to further his education in
            web techonologies.By studying current trends, and teaching himself, Eugene had learned a lot about the business.
            From designing to coding to marketing, Eugene can handle it all.
            Being a small new company, allows RWS to uses the latest web technologies to make your sites fast, secure and interactive. </p>
          </v-flex>
          <v-flex sm4>
            <vue-responsive-image
              :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1532727693/eugene-rivera/about-pic.jpg'"
              :image-ratio="3/4"
              :width-on-screen="50"
              :width-on-screen-smartphone="100"
            ></vue-responsive-image>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import card from '~/components/globals/card.vue'
import VueResponsiveImage from '~/components/ResponsiveImage.vue'

export default {
  data () {
    return {
      projects: []
    }
  },
  components: {
    card,
    VueResponsiveImage
  },
  async asyncData ({ app }) {
    const res = await app.$axios.$get('api/projects/projects')
    return {projects: res}
  }
}
</script>

<style scoped>
  .grey-background {
    background-color: #EEEEEE;
  }
  .dark-background {
    background-color: #2C3E50;
  }
  @media (max-width: 600px) {
    .about {
      margin-right: unset !important;
    }
  }
</style>
