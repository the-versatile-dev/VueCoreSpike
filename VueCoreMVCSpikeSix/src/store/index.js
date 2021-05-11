import { createStore } from "vuex";
import axios from "axios";
import createMultiTabState from 'vuex-multi-tab-state';

export default createStore({
    state: {
        count: 10
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        randomAdd(state, randomNumber) {
            console.log(randomNumber);
            state.count += randomNumber;
        },
        randomSubtract(state, randomNumber) {
            console.log(randomNumber);
            state.count -= randomNumber;
        },
    },
    actions: {
        increaseCounter({ commit }) {
            commit("increment");
        },
        decreaseCounter({ commit }) {
            commit("decrement");
        },
        randomAddNumber() {
            axios
                .get(
                    "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
                )
                .then((response) => {
                    this.commit("randomAdd", response.data);
                });
        },
        randomSubtractNumber() {
            axios
                .get(
                    "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
                )
                .then((response) => {
                    this.commit("randomSubtract", response.data);
                });
        },
    },
    getters: {},
    modules: {},
    plugins: [
        createMultiTabState({})
    ]
});