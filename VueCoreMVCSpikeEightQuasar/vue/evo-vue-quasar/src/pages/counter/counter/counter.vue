<template>
    <div class="q-pa-md">
        <q-layout view="lHh lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">
            <q-header elevated>
                <q-toolbar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>

                    <q-toolbar-title>
                        Vue Counter Page, multi components using state (I hope) with Quasar.
                    </q-toolbar-title>

                    <q-btn flat round dense icon="whatshot" />
                </q-toolbar>
            </q-header>
          
            <q-page-container>
                <q-page padding>
                    <div class="q-pa-md q-gutter-y-md column items-start text-center">
                        <div style="margin-bottom: 20px">
                            My total is this : {{ mycounter }}
                        </div>
                        <q-btn-group push>
                            <q-btn color="yellow" glossy text-color="black" push label="Number up!" icon="verified_user" @click="$store.dispatch('increaseCounter')" />
                            <q-btn color="amber" glossy text-color="black" push label=" Number down!" @click="$store.dispatch('decreaseCounter')" />
                            <q-btn color="orange" glossy text-color="black" push label="Number Random Add!" @click="$store.dispatch('randomAddNumber')" />
                            <q-btn color="orange" glossy text-color="black" push label="Number Random Subtract!" @click="$store.dispatch('randomSubtractNumber')" />
                        </q-btn-group>
                    </div>
                </q-page>
            </q-page-container>
        </q-layout>
    </div>

</template>
<script>

    import { mapState } from 'vuex'


    export default {
        name: "counter-component",
        computed: mapState({
            mycounter: state => state.count
        })
        //methods: mapActions('countstateModule', ['addProductToCart']),
    }
</script>
<style scoped>
    button {
        margin: 25px;
    }
</style>