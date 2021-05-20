import api from '../../api/randomnumber';

const state = {
    count: 10
};

const getters = {

};

const actions = {
    increaseCounter({ commit }) {
        commit("increment");
    },
    decreaseCounter({ commit }) {
        commit("decrement");
    },
    randomAddNumber() {
        //axios
        //    .get(
        //        "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
        //    )
        //    .then((response) => {
        //        this.commit("randomAdd", response.data);
        //    });

        this.commit("randomAdd", api.randomNumber());
    },
    randomSubtractNumber() {
        //axios
        //    .get(
        //        "https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new"
        //    )
        //    .then((response) => {
        //        this.commit("randomSubtract", response.data);
        //    });

        this.commit("randomSubtract", api.randomNumber());
    }
};

const mutations = {
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
    }
};

export default {
    namespaced: true,

    state,
    getters,
    actions, 
    mutations
};