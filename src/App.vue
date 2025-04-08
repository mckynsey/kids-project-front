<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script setup>

import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'





</script>

<style scoped>
@font-face {
  font-family: 'Lemonada';
  src: url('@/assets/fonts/Lemonada/static/Lemonada-Bold.ttf');
}

@font-face {
  font-family: 'Lemonadaregular';
  src: url('@/assets/fonts/Lemonada/static/Lemonada-Regular.ttf');
}

@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/Poppins/Poppins-ExtraBold.ttf');
}
</style>
