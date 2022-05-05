<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: Object,
  },
};
</script>

<template>
  <div
    class="w-full max-h-[150px] flex-1 my-2 bg-slate-200 rounded-md border-slate-400 border-r-4 border-b-4 bg-opacity-60 border-opacity-60 flex font-bold rounded-bl-3xl shadow-sm shadow-green-900 relative"
  >
    <img :src="pokemon.img" alt="" class="h-full" />
    <div
      class="inline-flex flex-1 pl-2 bg-red-500 h-12 items-center bg-opacity-60 rounded-bl-3xl justify-between"
    >
      <h1 class="ml-2 truncate w-24 sm:w-full">
        {{ pokemon.nombre }}
      </h1>

      <h1 class="mr-2 shrink-0">
        {{ pokemon.id }}
      </h1>
    </div>
    <router-link
      :to="{ name: 'Detail', params: { id: pokemon.id } }"
      class="absolute bottom-0 right-0 p-2 m-1 rounded-md bg-red-500"
    >
      Detail
    </router-link>
  </div>
</template>
