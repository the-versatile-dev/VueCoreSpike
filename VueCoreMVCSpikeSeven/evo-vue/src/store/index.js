import Vue from 'vue'
import Vuex from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state';
import countstateModule from './modules/countstate';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        countstate: countstateModule
    },
    plugins: [
        createMultiTabState({})
    ]
});

export default store;
