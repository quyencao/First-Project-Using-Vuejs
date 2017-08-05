import ShowBlogs from './components/showBlog.vue'
import AddBlog from './components/addBlog.vue'
import SingleBlog from './components/singleBlog.vue'
import UpdateBlog from './components/updateBlog.vue'

export default [
    {
        path: '/',
        component: ShowBlogs
    },
    {
        path: '/add',
        component: AddBlog
    },
    {
        path: '/blog/:id',
        component: SingleBlog,
        name: 'singleblog'
    },
    {
        path: '/update/blog/:id',
        component: UpdateBlog
    }
];