<template>

  <Header />
  <Footer />
  <RouterView />
</template>




<script setup>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>



<style scoped>
@font-face {
  font-family: 'Lemonada';
  src: url('@/assets/fonts/Lemonada/static/Lemonada-Bold.ttf')
}

@font-face {
  font-family: 'Lemonadaregular';
  src: url('@/assets/fonts/Lemonada/static/Lemonada-Regular.ttf')
}


</style>
