<template>
    <div id="counter">
        <h1>mike vue comp</h1>
    </div>
    <div style="margin-top: 50px">
        <div style="margin-bottom: 20px">
            My total is this : {{ $store.state.count }}
        </div>

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
</template>
<script>
    export default {
        name: "counter-component"
    }
</script>