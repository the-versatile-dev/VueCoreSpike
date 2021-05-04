<template>
    <div style="margin-top:50px;">
        <div style="margin-bottom:20px;" >
            My total is this : {{ $store.state.count }}
        </div>
        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn value="left">
                <button class="btn btn-primary" @click="$store.commit('increment')">Number up!</button>
            </v-btn>
            <v-btn value="right">
                <button class="btn btn-primary" @click="$store.commit('decrement')">Number down!</button>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>