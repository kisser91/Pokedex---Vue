<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {Footer,Header}
}

</script>

<template>
    <div class="fixed h-screen w-screen z-40">
      <div class="flex flex-col justify-between h-full w-full sm:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
        <Header/>
          <router-view></router-view>
        <Footer/>
      </div>
    </div>
    <div class="w-full h-screen bg-[#68a15d] z-0 overflow-hidden ">
        <img src="./assets/app-background.jpg" alt="" class="fixed w-full object-cover  rendering-pixelated md:-bottom-[20px] lg:-bottom-[30px] "
        > 
    </div>
</template>

