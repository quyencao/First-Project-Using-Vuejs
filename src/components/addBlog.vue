<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninja</label>
                <input type="checkbox" value="ninja" v-model="blog.categories">
                <label>Wizard</label>
                <input type="checkbox" value="wizard" v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
            </div>
            <label>Author</label>
            <select v-model="blog.author">
                <option disabled value="">Please select one</option>
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <button @click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h1>Thank for adding your post</h1>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Blog Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
    // Imports
    export default {
        data () {
            return {
                blog: {
                    title: '',
                    content: '',
                    categories: [],
                    author: ''
                },
                authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
                submitted: false
            }
        },
        methods: {
            post: function() {
                this.$http.post('https://vuejs-youtube.firebaseio.com/posts.json', this.blog).then(function (data) {
                    this.submitted = true;
                });
            }
        }
    }
</script>

<style>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input {
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label {
        display: inline-block;
    }
</style>