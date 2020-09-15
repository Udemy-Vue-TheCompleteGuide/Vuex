import _ from 'lodash'

const state = {
    counter: 0
}

const getters = {
    // getter receive state:[local module state], getters:[the other getters] and rootState:[the root state]
    counter(state) {
        return state.counter;
    }
}

const mutations = {
    // mutations are called with commit
    // mutations receive state:[local module state] and payload:[additional data from user]
    increment_counter(state) {
        state.counter += 1;
    },
    decrement_counter(state) {
        state.counter -= 1;
    },
    add_counter(state, payload) {
        const val = Number(payload);
        if (_.isNumber(val)) {
            state.counter += val;
        } else {
            console.log('Mutation add_counter error. Payload must be a number.');
            console.log(payload);
        }
    }
}

const actions = {
    // actions are called with dispatch
    // actions receive context:[basically a copy of the store] and payload:[additional data from user]
    // Context have the same as store [state, getters, actions, commit, etc]
    // Usually we destructure the context to simplify the code.
    increment_counter({commit}) {
        commit('increment_counter');
    },
    decrement_counter({commit}) {
        commit('decrement_counter');
    },
    add_counter({commit}, payload) {
        commit('add_counter', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
