<template>
    <div>
        <div id="counter">
            <h2>Vue Counter Page, multi components using state (I hope).</h2>
        </div>

        <!--<div style="margin-bottom: 20px">
        My total is this : {{ $store.state.count }}
    </div>-->
        <div class="text-center" style="margin-top: 50px">
            <button class="btn btn-primary" @click="$store.dispatch('increaseCounter')">
                Number up!
            </button>

            <button class="btn btn-primary" @click="$store.dispatch('decreaseCounter')">
                Number down!
            </button>
            <button class="btn btn-primary" @click="$store.dispatch('randomAddNumber')">
                Number Random Add!
            </button>
            <button class="btn btn-primary" @click="$store.dispatch('randomSubtractNumber')">
                Number Random Subtract!
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "counter-component"
    }
</script>
<style scoped>
    button {
        margin: 25px;
    }
</style>