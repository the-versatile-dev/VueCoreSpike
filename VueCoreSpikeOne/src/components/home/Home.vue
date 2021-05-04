<template>
    <div>
        <h3 class="h-40 text-black">The current counter is : {{ count }}</h3>
    </div>
</template>

<script>
    // @ is an alias to /src

    import { mapGetters } from "vuex";

    export default {
        name: "Home",
        computed: mapGetters(['getCounter'])
    };
</script>

<style>
    .home {
        height: 400px;
        max-height: 500px;
    }

    h3 {
        font-size: 2.5rem;
    }
</style>