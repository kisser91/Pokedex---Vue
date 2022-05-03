import axios from "axios";

const actions = {
  FIRST_PAGE: (state) => {
    state.commit("SET_FIRST");
    console.log("offset => ", state.state.offset);
  },
  LAST_PAGE: (state) => {
    state.commit("SET_LAST");
    console.log("offset => ", state.state.offset);
  },
  PREVIOUS_PAGE: (state) => {
    state.commit("SET_PREVIOUS");
    console.log("offset => ", state.state.offset);
  },
  NEXT_PAGE: (state) => {
    state.commit("SET_NEXT");
    console.log("offset => ", state.state.offset);
  },
  FETCH_POKEMONS: async (state) => {
    console.log("GET_POKEMONS - DISPATCHED");
    console.time();

    /////////// FIRST FETCH ///////////////////
    const url = `${state.state.url}?offset=${state.state.offset}&limit=${state.state.quantity}`;
    console.log("url => ", url);

    const pokemons = await axios(url)
      .then((res) => {
        state.commit("SET_PREVIOUS", res.data.previous);
        state.commit("SET_NEXT", res.data.next);
        state.commit("SET_POKEMONS_TOTAL", res.data.count);
        return res.data.results;
      })
      .catch((err) => console.log(err));

    /////////// DETAILS FETCH ///////////////////

    const details = await Promise.all(
      pokemons.map(async (el, i) => {
        let body = await axios.get(el.url);
        let pokemon = body.data;

        return {
          id: i + 1,
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

    return details;
  },
};

export default actions;
