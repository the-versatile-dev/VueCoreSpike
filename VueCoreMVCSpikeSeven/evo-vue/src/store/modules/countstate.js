import api from '../../api/randomnumber';

const countStateModule = {
    //namespace: true,
    state: () => ({
        count: 0
    }),
    getters: {
        getCount() {
            //console.log(this);
            //console.log(state.count);
            return 100;
        } 
    },
    actions: {
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
        randomAddNumber() {
            console.log('randomAdd');
            this.commit("randomAdd", api.randomNumber());
        },
        randomSubtractNumber() {
            console.log('randomSubtract');
            this.commit("randomSubtract", api.randomNumber());
        }
    },
    mutations: {
        increment() {
            this.state.count++;
            console.log('increment state count = ' + this.state.count);
        },
        decrement() {
            this.state.count--;
            console.log('decrement state count = ' + this.state.count);
        },
        randomAdd(randomNumber) {
            console.log(randomNumber);
            this.state.count += randomNumber;
            console.log('state = ' + this.state.count);
        },
        randomSubtract(randomNumber) {
            console.log(randomNumber);
            this.state.count -= randomNumber;
            console.log('state = ' + this.state.count);
        }
    }
};

export default countStateModule;