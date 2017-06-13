import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Policies from '@/components/Policies'
import Trivia from '@/components/Trivia'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/policies',
            name: 'Policies',
            component: Policies
        },
        {
            path: '/trivia',
            name: 'Trivia',
            component: Trivia
        }
    ]
})
