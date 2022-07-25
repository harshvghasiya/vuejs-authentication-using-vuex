import {LoginApi} from "@/service/LoginApi";

export default{
    namespaced:true,
    state:{
        details:{
            name:null,
            email:null,
            password:null
        },
        success:null,
        error:null,
         disable:false,
        buttontxt:'Register',
    },
    mutations:{
        REGISTER_USER: async function(state){
            state.disable=true;
            state.buttontxt="Loading..";
            try{
            let response= await LoginApi.register(state.details);
            if(response.status==200){
                state.error=null;
                state.success=response.data.msg;
                state.details.name=null;
                state.details.email=null;
                state.details.password=null;
            }else{
           

                state.success=response.message;
            }
            }catch(error){

                state.error=error.response.data.message;
            }
              state.disable=false;
            state.buttontxt="Register";
        }
    },
    actions:{
            registerUser:function({commit}){
                return commit('REGISTER_USER');
            }
    }
}