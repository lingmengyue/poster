import Vue from 'Vue';
import Router from 'vue-router'

//模块路由
import User from '../../components/user/index.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {path: '/user/index',component:User,name: 'home'}
    ]
})