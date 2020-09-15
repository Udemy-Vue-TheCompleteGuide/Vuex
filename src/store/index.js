import Vue from 'vue'
import Vuex from 'vuex'
import root from "@/store/modules/root";
import counter from "@/store/modules/counter";

Vue.use(Vuex)

export default new Vuex.Store({
    state: root.state,
    getters: root.getters,
    mutations: root.mutations,
    actions: root.actions,
    modules: {
        counter
    }
});
