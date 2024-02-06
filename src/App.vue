<template>
  <div class="font-Roboto">
  <Header title="Apple Products" />
  <FirstContainer />
  <SecondContainer />
  <ThirdContainer />
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstContainer from './components/FirstContainer.vue'
import SecondContainer from './components/SecondContainer.vue'
import ThirdContainer from './components/ThirdContainer.vue'
import Footer from './components/Footer.vue'

export default{
  name: 'App',
  components: {
    Header,
    FirstContainer,
    SecondContainer,
    ThirdContainer,
    Footer,
  },
}

</script>

<style lang="scss" scoped>

</style>
