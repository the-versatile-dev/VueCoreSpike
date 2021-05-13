<template>
    <div id="showCounter">
        <h2>Show Counter Vue Component</h2>
        <h3 class="h-40 text-black">The current counter is : {{ $store.state.count }}</h3>
    </div>   
</template>
<script>
    export default {
        name: "showcounter-component"
    }
</script>