import {createStore} from 'vuex'
import { login, userList } from '@/api/user'

export default createStore({
	state: {
		username: '',
		token: ''
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		setUserName(state,username){
			state.username=username
		}
	},
	getters:{
		getUserName(state){
			return 'my name is '+state.username
		} 
	},
	actions: {
		login({ commit }, userInfo) {
			const { username, password } = userInfo
			return new Promise((resolve, reject) => {
				login({ username: username.trim(), password: password }).then(response => {
					console.log('-->login response', response)
					const { data } = response
					commit('SET_TOKEN', data.result.token)
					sessionStorage.setItem("TOKEN",data.result.token);
					resolve()
				}).catch(error => {
					console.log('-->login error', error)
					reject(error)
				})
			})
		},
		logout({ commit }){
			new Promise(resolve => {
				sessionStorage.setItem("TOKEN","");
				commit('SET_TOKEN','')
				resolve()
			})
		},
		userList({ commit }){
			return new Promise((resolve, reject) => {
				userList({ }).then(response => {
					console.log('-->response', response)
					const { data } = response
					commit('SET_TOKEN', data.token)
					sessionStorage.setItem("TOKEN",data.token);
					// setToken(data.token)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		getUserInfo({ state,commit }){
			console.log('-->state', state)
			new Promise(resolve => {
				setTimeout(() => {
					//随机生成一个随机数1-10
					var num=Math.floor((Math.random()*10)+1)
					//提交修改username属性
					commit("setUserName",'lss00'+num);
					//返回处理结果
					resolve();
				}, 1000);
			});
		}
	},
	modules: {}
})
