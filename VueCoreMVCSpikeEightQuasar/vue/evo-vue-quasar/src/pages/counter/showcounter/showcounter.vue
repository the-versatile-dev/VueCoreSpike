<template>
    <div class="q-pa-md">
        <q-layout view="lHh lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">
            <q-header elevated>
                <q-toolbar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>

                    <q-toolbar-title>
                        Show Counter Vue Component with Quasar.
                    </q-toolbar-title>

                    <q-btn flat round dense icon="whatshot" />
                </q-toolbar>
            </q-header>
            <q-page-container>
                <q-page padding>
                    <div class="q-pa-md q-gutter-y-md column items-start text-center">
                        <div style="margin-bottom: 20px">
                            <h3>My total is this : {{ mycount }}</h3>
                            
                        </div>
                    </div>
                    
                </q-page>
            </q-page-container>
        </q-layout>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: "showcounter-component",
        computed: {
            ...mapState({
                mycount: state => state.count
            })
        }
    }

</script>
<style>
    .h2 {
        color: red;
    }

    #showCounter {
        margin: 50px;
    }
</style>