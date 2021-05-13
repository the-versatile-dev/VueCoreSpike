<template>
    <div>
        <h2>Posts</h2>
        <PostsNav />

        <div class="app">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

import PostsNav from '@/components/PostsNav';

export default {
  components: {
    PostsNav
  }
}
</script>

<style scoped>
    .app {
        border: red;
    }
</style>
