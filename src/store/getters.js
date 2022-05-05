const getters = {
  GET_POKEMONS: (state) => state.pokemons,
  GET_PREVIOUS: (state) => state.previous,
  GET_NEXT: (state) => state.next,
  GET_OFFSET: (state) => state.offset,
  GET_LAST: (state) => state.last,
  GET_QUANTITY: (state) => state.quantity,
  GET_IS_LOADING: (state) => state.isLoading,
};

export default getters;
