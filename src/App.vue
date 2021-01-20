<template>
  <div id="app">
    <HeaderApp />
    <main id="main"> 
      <router-view/>
    </main>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue'

export default {
  components: {
    HeaderApp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

*{
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
}

body{
  background-color: #fbfbfb;
}

main{
  margin: 0 auto;
  max-width: 430px;
  padding: 50px 20px 50px;
}
</style>
