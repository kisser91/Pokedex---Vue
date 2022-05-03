const mutations = {
    LOAD_POKEMONS: (state, pokemons) => state.pokemons = pokemons,
    SET_POKEMONS_TOTAL:(state, number) => state.pokemons_total = number,
    SET_FIRST: (state) => state.offset = 0,
    SET_LAST: (state) => state.offset = Math.floor(state.pokemons_total / state.quantity) * state.quantity,
    SET_PREVIOUS: (state) => state.offset -= state.quantity,
    SET_NEXT: (state) => state.offset += state.quantity,
    SET_URL: (state,url) => state.url = url,
}

export default mutations;

