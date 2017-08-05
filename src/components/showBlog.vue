<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search blog">
        <div v-for="blog in filterBlogs" class="single-blog">
            <router-link :to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
    import SearchMixin from './../mixins/searchMixin'

    export default {
        data () {
            return {
                blogs: [],
                search: ''
            }
        },
        created() {
            this.$http.get('https://vuejs-youtube.firebaseio.com/posts.json')
                .then(function (data) {
                    return data.json();
                })
                .then(function (data) {
                    var blogsArray = [];
                    for(let key in data) {
                        data[key].id = key;
                        blogsArray.push(data[key]);
                    }
                    console.log(blogsArray);
                    this.blogs = blogsArray;
                });
        },
        computed: {

        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            snippet(value) {
                return value.slice(0, 100) + '...';
            }
        },
        directives: {
            'rainbow': {
                bind(el, binding, vnode) {
                    el.style.color = "#" + Math.random().toString().slice(2,8)
                }
            }
        },
        mixins: [SearchMixin]
    }
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>