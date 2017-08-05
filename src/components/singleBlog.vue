<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <p>Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <div>
            <router-link :to="'/update/blog/' + id" tag="button">Update</router-link>
            <button v-on:click="deleteBlog">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               id: this.$route.params.id,
               blog: {}
            }
        },
        created() {
            this.$http.get('https://vuejs-youtube.firebaseio.com/posts/' + this.id + '.json')
                .then(function (data) {
                    return data.json();
                })
                .then(function (data) {
                    this.blog = data;
                });
        },
        methods: {
            deleteBlog: function() {
                this.$http.delete('https://vuejs-youtube.firebaseio.com/posts/' + this.id + '.json')
                    .then(function () {
                        this.$router.push({ path: '/' });
                    });
            }
        }
    }
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
    }
</style>