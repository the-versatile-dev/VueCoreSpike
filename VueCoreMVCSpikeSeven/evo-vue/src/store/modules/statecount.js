//import api from '../../api/randomnumber';

const state = () => ({
    count: 25
});

const getters = {
    getCount: (state) => {
        return state.count;
    } 
};

const actions = {
    increaseCounter({ commit }) {
        console.log('increment');
        commit("increment");
        console.log(this.state.count);
    },
    decreaseCounter({ commit }) {
        console.log('decrement');
        commit("decrement");
        console.log(this.state.count);
    },
    randomAddNumber({ commit }) {
        console.log('randomAdd');
        //let num = api.randomNumber();
        console.log("random number is " + 5);
        commit("randomAdd", 5);
    },
    randomSubtractNumber({ commit }) {
        console.log('randomSubtract');
        //let num = api.randomNumber();
        console.log("random number is " +10);
        commit("randomSubtract", 10);
    }
}

const mutations = {
    increment(state) {
        state.count++;
        console.log('increment state count = ' + this.state.count);
    },
    decrement(state) {
        state.count--;
        console.log('decrement state count = ' + this.state.count);
    },
    randomAdd(state, randomNumber) {
        console.log(randomNumber);
        state.count += randomNumber;
        console.log('state = ' + state.count);
    },
    randomSubtract(state, randomNumber) {
        console.log(randomNumber);
        state.count -= randomNumber;
        console.log('state = ' + state.count);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}