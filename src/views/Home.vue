<script>
import { mapActions, mapGetters } from "vuex";
import PokemonCard from "../components/PokemonCard.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    PokemonCard,
    Footer,
    Header,
  },
  methods: {
    ...mapActions(["FETCH_POKEMONS"]),
  },
  computed: {
    ...mapGetters([
      "GET_POKEMONS",
      "GET_PREVIOUS",
      "GET_NEXT",
      "GET_OFFSET",
      "GET_IS_LOADING",
    ]),
  },
  created() {
    this.FETCH_POKEMONS();
  },
};
</script>
<template>
  <div class="fixed h-screen w-screen z-40">
    <div
      class="flex flex-col justify-between h-full w-full sm:max-w-[640px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto"
    >
      <Header />
      <div
        class="my-4 mx-4 h-full text-white flex flex-col items-center overflow-scroll overflow-y-auto overflow-x-hidden"
      >
        <img
          v-if="GET_IS_LOADING"
          src="../assets/pokeball.png"
          alt="pokeball"
          class="w-40 h-40 animate-ping rendering-pixelated my-auto"
        />
        <div
          v-else
          class="flex flex-col h-full w-full"
          :key="pokemon.id"
          v-for="pokemon in GET_POKEMONS"
        >
          <PokemonCard :pokemon="pokemon" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
