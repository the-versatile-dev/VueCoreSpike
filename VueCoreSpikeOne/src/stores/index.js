import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import jokes from "./modules/jokes";


Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    
    modules: {
        counter, 
        jokes
    }
    
});