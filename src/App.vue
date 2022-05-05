<script>
export default {
  name: "app",
};
</script>

<template>
  <router-view />
  <div class="w-full h-screen bg-[#68a15d] z-0 overflow-hidden">
    <img
      src="./assets/app-background.jpg"
      alt=""
      class="fixed w-full object-cover rendering-pixelated md:-bottom-[20px] lg:-bottom-[30px]"
    />
  </div>
</template>
