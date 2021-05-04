<template>
    <div style="margin-top:50px;">
        <div style="margin-bottom:20px;" >
            My total is this : {{ count }}
        </div>
        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn value="left">
                <button class="btn btn-primary" @click="increment()">Number up!</button>
            </v-btn>
            <v-btn value="right">
                <button class="btn btn-primary" @click="decrement()">Number down!</button>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            },
            decrement() {
                this.count--
            }
        }
    }
</script>
