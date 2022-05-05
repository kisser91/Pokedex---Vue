const mutations = {
  LOAD_POKEMONS: (state, pokemons) => (state.pokemons = pokemons),
  SET_URL: (state, url) => (state.url = url),
  SET_POKEMONS_TOTAL: (state, number) => (state.pokemons_total = number),
  SET_FIRST: (state) => (state.offset = 0),
  SET_LAST_OFFSET: (state) =>
    (state.last =
      Math.floor(state.pokemons_total / state.quantity) * state.quantity),
  SET_PREVIOUS_PAGE: (state) => (state.offset -= state.quantity),
  SET_NEXT_PAGE: (state) => (state.offset += state.quantity),
  SET_LAST_PAGE: (state) => (state.offset = state.last),
  SET_PREVIOUS: (state, previous) => (state.previous = previous),
  SET_NEXT: (state, next) => (state.next = next),
  SET_LOADING: (state) => (state.isLoading = !state.isLoading),
};

export default mutations;
