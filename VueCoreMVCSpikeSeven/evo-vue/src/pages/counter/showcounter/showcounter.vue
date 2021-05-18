<template>
    <div id="showCounter">
        <h2>Show Counter Vue Component</h2>
        <h3 class="h-40 text-black">The current counter is : {{ $store.state.count }} number???</h3>    
        <div>
            <button type="button" class="btn btn-outline-success">Primary</button>
        </div>
    </div>   
</template>
<script>
    export default {
        name: "showcounter-component"
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