import Vue from "vue";
import Vuex from "vuex";
import states from "@/assets/states.json";
Vue.use(Vuex);

const state = {
    states,
};

export default new Vuex.Store({
    state,
    mutations: {},
    actions: {},
    modules: {},
});
