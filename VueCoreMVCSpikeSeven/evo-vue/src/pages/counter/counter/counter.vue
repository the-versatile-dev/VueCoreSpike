<template>
    <div>
        <div id="counter">
            <h2>Vue Counter Page, multi components using state (I hope).</h2>
        </div>

        <div style="margin-bottom: 20px">
        My total is this : {{ mycounter }}
    </div>
        <div class="text-center" style="margin-top: 50px">
            <button class="btn btn-primary" @click="$store.dispatch('statecount/increaseCounter')">
                Number up!
            </button>

            <button class="btn btn-primary" @click="$store.dispatch('statecount/decreaseCounter')">
                Number down!
            </button>
            <button class="btn btn-primary" @click="$store.dispatch('statecount/randomAddNumber')">
                Number Random Add!
            </button>
            <button class="btn btn-primary" @click="$store.dispatch('statecount/randomSubtractNumber')">
                Number Random Subtract!
            </button>
        </div>
    </div>
</template>
<script>

    import { mapState } from 'vuex'


    export default {
        name: "counter-component",
        computed: mapState({
            mycounter: state => state.statecount
        })
        //methods: mapActions('countstateModule', ['addProductToCart']),
    }
</script>
<style scoped>
    button {
        margin: 25px;
    }
</style>