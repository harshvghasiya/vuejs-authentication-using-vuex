import { createStore } from 'vuex'
import loginModule from './modules/login.module';
import registerModule from './modules/register.module'

export default createStore({
  state: {
    registerState:registerModule.state,
    loginState:loginModule.state
  },
  getters: {
    getRegisterUser:function(state){
      console.log(state.registerState.success)
      return state.registerState;
    },
    getLoginUser:function(state){
      return state.loginState;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    registerModule,
    loginModule
  }
})
