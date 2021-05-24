import Vue from 'vue'
import Vuex from 'vuex'
import createMultiTabState from 'vuex-multi-tab-state';
import statecount from './modules/statecount';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        statecount
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: [
        createMultiTabState({})
    ]
});
