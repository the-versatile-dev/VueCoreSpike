<template>
    <div>
        <div v-if="users.length === 0">
            Loading...
        </div>
        <v-sheet :color="`grey`" class="pa-3">
            <v-skeleton-loader class="mx-auto" type="card-avatar">
                <div class="container">
                    <div class="row" v-if="users.length > 0">
                        <div class="col-md-3" v-for="user in users" v-bind:key="user.id">
                            <user-card :user="user"></user-card>
                        </div>
                    </div>
                </div>

            </v-skeleton-loader>
        </v-sheet>
        
    </div>
</template>
<script>import axios from 'axios';

    export default {
        data: function () {
            return {
                users: [],
            };
        },
        methods: {
            async fetchUsers() {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = data;
            }
        },
        async mounted() {
            await this.fetchUsers();
        }
    }</script>