<template>
    <div id="post-list">
        <h2>Posts</h2>

        <div class="mb-4">
            <router-link :to="{ name: 'new-post' }" class="btn btn-success">New Post</router-link>
        </div>

        <table class="table table-sm table-striped">
            <tr>
                <th>Title</th>
                <th>Date</th>
                <th></th>
            </tr>
            <tr v-for="post in posts" v-bind:key="post.id">
                <td>{{ post.title }}</td>
                <td>{{ post.postDate }}</td>
                <td>
                    <router-link :to="{ name: 'edit-post', params: { id: post.id } }">Edit</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {

    data() {
        return {
            posts: [ ]
        }
    },
    created() {
        this.refreshPosts();
    },
    methods: {
       async refreshPosts() {
            await axios.get('/posts/posts')
                .then(result => {
                console.log(result);
                this.posts = result.data;
            })
        }
    }
}
</script>
