import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
	{ path: "/", redirect: "/login" },
	{
		path: "/home",
		name: "home",
		component: () => import('@/view/Home.vue')
	},
	{
		path: "/login",
		name: "login",
		component: () => import('@/view/Login.vue')
	}
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

router.beforeEach((to, from, next) => {
	console.log('-->router to:' + to.name)
	const token = sessionStorage.getItem('TOKEN')
	const LOGIN_PAGE = 'login'
	const HOME_PAGE = 'home'
	console.log('-->token:' + token)
	if (!token && to.name !== LOGIN_PAGE) {// 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE
    })
  } else if (!token && to.name === LOGIN_PAGE) {// 未登陆且要跳转的页面是登录页
    next()
  } else if (token && to.name === LOGIN_PAGE) {// 已登录且要跳转的页面是登录页
		next({
      name: HOME_PAGE
    })
	} else {
		next()
	}
	
})
