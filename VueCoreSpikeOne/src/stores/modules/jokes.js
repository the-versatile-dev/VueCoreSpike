//import axios from 'axios';

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

const state = {
    currentJoke: 'har de har',
    allJokes: []
};

const getters = {
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes
};

const actions = { };

const mutations = { };

export default {
    state,
    getters,
    actions,
    mutations
}
