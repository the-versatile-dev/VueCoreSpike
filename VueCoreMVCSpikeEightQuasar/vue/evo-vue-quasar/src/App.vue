<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 700px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>
            Quasar Framework
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
              <p v-for="n in 15" :key="n">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
              </p>
          </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    //import BasicInput  from '@/pages/input/basic-input.vue'

    import { mapState } from 'vuex';

    export default {
        name: 'LayoutDefault',
        computed: {
            ...mapState({
                mycount: state => state.count
            })
        },

        components: {
            //HelloWorld, 
            //BasicInput
        },

        data() {
            return {
                leftDrawerOpen: false
            }
        }
    }
</script>

<style>
</style>
