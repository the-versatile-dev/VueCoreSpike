import Vue from 'vue'

new Vue({
    el: '#app',
    components: {

    },
    data() {
        return {
            vueMessage: 'Message from Vue, I believe?'
        }
    },
    methods: {
        toggleModal() {
            this.$refs.modal.open();
        }
    }
})