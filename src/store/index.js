import Vuex from "vuex";

import getters from "./getters";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

export default new Vuex.Store({
  state, // global state
  getters, // acess to the store
  actions,
  mutations,
});
