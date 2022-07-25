import {LoginApi} from "@/service/LoginApi";
import router from '@/router';
export default{
    namespaced:true,
    state:{
        details:{
            password:null,  
            email:null
        },
        success:null,
        error:null,
        disable:false,
        buttontxt:'Submit',
    },
    mutations:{
        LOGIN_USER: async function(state){
            state.disable=true;
            state.buttontxt="Loading..";
            try{
            let response= await LoginApi.login(state.details)
                if(response.data.access_token != null){
                    localStorage.setItem("token",response.data.access_token);
                    console.log(localStorage.getItem('token'))
                    state.error=null;
                    state.success="Login SuccessFull";
                    router.push('/profile');
                }else{
                    state.error=response.data.msg;
                }
            }catch(errormsg){
                console.log(errormsg)
                state.error=errormsg.response.data.message
            }
            state.disable=false;
            state.buttontxt="Submit";
        }
    },
    actions:{
        loginUsers:function({commit}){
            return commit('LOGIN_USER');
        }
    }
}