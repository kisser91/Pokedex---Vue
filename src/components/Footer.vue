<script>
import { mapActions,mapGetters } from "vuex"

export default {
    name: 'footer',
    methods: {
        ...mapActions(["FIRST_PAGE","LAST_PAGE","PREVIOUS_PAGE","NEXT_PAGE","FETCH_POKEMONS"]),
    },
    computed: {
        ...mapGetters(["GET_PREVIOUS","GET_NEXT"]),
        // isNext: () => {
        //     if (GET_NEXT()) return true
        //     return false
        // }
    }
}
</script>

<template>
    <div class=" rounded-md mb-2 bg-gradient-to-b from-red-500 to-red-400  h-16  w-full flex-shrink-0 ">
        <div class="flex justify-between items-center h-full mx-[25%] sm:mx-[30%] lg:mx-[40%]">
            <button 
                id="firstPage"
                @click="FIRST_PAGE(); FETCH_POKEMONS()"            
                class="h-10 w-10 border-2 rounded-md bg-red-600 border-red-200" 
                type="button" 
                value="<"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-1  text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <button 
                id="previousPage"
                @click="PREVIOUS_PAGE(); FETCH_POKEMONS()"
                class="h-10 w-10 border-2 rounded-md bg-red-600 border-red-200" 
                type="button" 
                value="<"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-1  text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </button>        
            <button 
                class="h-10 w-10 border-2 rounded-md bg-red-600 border-red-200" 
                type="button" 
                id="nextPage"
                @click="NEXT_PAGE(); FETCH_POKEMONS()"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-1  text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </button>
            <button
                id="lastPage"
                @click="LAST_PAGE(); FETCH_POKEMONS()"  
                class="h-10 w-10 border-2 rounded-md bg-red-600 border-red-200" 
                type="button" 
                value=">>">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-1  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>  
            </button>    
        </div>
    
    </div>
</template>