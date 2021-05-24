<template>
    <div id="showCounter">
        <h2>Show Counter Vue Component</h2>
        <h3 class="h-40 text-black">
            The current counter is : {{ mycount }} 
        </h3>
        <div>
            <button type="button" class="btn btn-primary">Primary</button>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: "showcounter-component",
        computed: {
            ...mapState({
                mycount: state => state.statecount.count
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