<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/addBlog.vue'
import ShowBlogs from './components/showBlog.vue'
import ListBlogs from './components/listBlog.vue'
import Header from './components/header.vue'

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
    'app-header': Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
