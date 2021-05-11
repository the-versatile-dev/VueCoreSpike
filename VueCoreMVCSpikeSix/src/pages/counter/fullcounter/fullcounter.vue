<template>
    <div class="home">                
        <Counter />
        <hr />
        <ShowCounter />
    </div>
</template>
<script>
    // @ is an alias to /src
    import Counter from '@/pages/counter/counter/counter.vue'
    import ShowCounter from '@/pages/counter/showcounter/showcounter.vue'

    export default {
        name: 'fullcounter-component',
        components: {
            Counter,
            ShowCounter
        }
    }

</script>