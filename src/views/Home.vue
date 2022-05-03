<script>
import { mapActions, mapGetters} from "vuex"

export default {
    name: 'Home',
    methods: {
        ...mapActions(["FETCH_POKEMONS"]),
        },
    computed: { 
        ...mapGetters(["GET_POKEMONS","GET_PREVIOUS","GET_NEXT","GET_OFFSET"]),
        },
    created(){
        this.FETCH_POKEMONS();
    }

}

</script>
<template>
    <div class="my-4 mx-4 text-white space-y-4 flex flex-col items-center overflow-scroll overflow-y-auto overflow-x-hidden">
        <div 
            class="w-full"
            :key="pokemon.id" 
            v-for="pokemon in GET_POKEMONS">
            <img src="" alt="">
            <div class="w-full h-32 bg-slate-200 rounded-md flex-shrink-0 border-slate-400 border-r-4 border-b-4 bg-opacity-60 border-opacity-60 text-black"> 
                {{pokemon.id}} {{pokemon.nombre}} {{pokemon.vida}} {{pokemon.fuerza}} {{pokemon.defensa}} {{pokemon.velocidad}} {{pokemon.altura}} {{pokemon.peso}} {{pokemon.img}} 
            </div>

        </div>
    </div>
</template>
