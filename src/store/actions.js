import axios from "axios";

const actions = {
  FIRST_PAGE: (state) => {
    state.commit("SET_FIRST");
    console.log("offset => ", state.state.offset);
  },
  LAST_PAGE: (state) => {
    state.commit("SET_LAST_PAGE");
    console.log("offset => ", state.state.offset);
  },
  PREVIOUS_PAGE: (state) => {
    state.commit("SET_PREVIOUS_PAGE");
    console.log("offset => ", state.state.offset);
    console.log("can't commit, offset is ", state.state.offset);
  },
  NEXT_PAGE: (state) => {
    state.commit("SET_NEXT_PAGE");
    console.log("offset => ", state.state.offset);
  },
  FETCH_POKEMONS: async (state) => {
    console.log("GET_POKEMONS - DISPATCHED");
    state.commit("SET_LOADING");
    console.time();

    /////////// FIRST FETCH ///////////////////
    const url = `${state.state.url}?offset=${state.state.offset}&limit=${state.state.quantity}`;
    console.log("url => ", url);

    const pokemons = await axios(url)
      .then((res) => {
        state.commit("SET_POKEMONS_TOTAL", res.data.count);
        state.commit("SET_PREVIOUS", res.data.previous);
        state.commit("SET_NEXT", res.data.next);
        state.commit("SET_PREVIOUS_PAGE");
        state.commit("SET_NEXT_PAGE");
        state.commit("SET_LAST_OFFSET");

        return res.data.results;
      })
      .catch((err) => console.log(err));

    /////////// DETAILS FETCH ///////////////////

    const details = await Promise.all(
      pokemons.map(async (el, i) => {
        let body = await axios.get(el.url);
        let pokemon = body.data;

        return {
          id: pokemon.id,
          nombre: pokemon.name,
          vida: pokemon.stats[0].base_stat,
          fuerza: pokemon.stats[1].base_stat,
          defensa: pokemon.stats[2].base_stat,
          velocidad: pokemon.stats[5].base_stat,
          altura: pokemon.height,
          peso: pokemon.weight,
          img: pokemon.sprites.front_default,
        };
      })
    )
      .then((res) => {
        state.commit("LOAD_POKEMONS", res);
        console.log("detailed", res);
        console.timeEnd();
      })
      .catch((err) => console.log(err));
    state.commit("SET_LOADING");
    return details;
  },
};

export default actions;
