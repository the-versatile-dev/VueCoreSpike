<template>
    <v-app>
        <div>
            <div v-if="users.length === 0">
                Loading...
            </div>

            <table v-if="users.length > 0" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>Name </td>
                        <td>Email12</td>
                        <td>Phone</td>
                        <td>Website</td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-bind:key="user.id" v-for="user in users">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.phone}}</td>
                        <td>{{user.website}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1"></v-data-table>
    </v-app>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                headers: [
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },                    
                    { text: 'Email', value: 'email' },
                    { text: 'Phone', value: 'phone' },
                    { text: 'Website', value: 'website' },                    
                ],
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