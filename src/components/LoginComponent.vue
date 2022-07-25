<template>
<section class="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
        
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
           <div class="alert alert-danger" v-if="loginUser.error != null" role="alert">
                {{loginUser.error}}
            </div>
            <div class="alert alert-success" v-if="loginUser.success != null" role="alert">
                {{loginUser.success}}
            </div>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Login into account</h2>

              <form @submit.prevent="loginForm">

                
                <div class="form-outline mb-4">
                  <input type="email" v-model="loginUser.details.email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" v-model="loginUser.details.password"  id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

               

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" :disabled="loginUser.disable">{{loginUser.buttontxt}}</button>
                </div>

                
              </form>
                <p class="text-center text-muted mt-5 mb-0">Haven't an account? <router-link href="#!"
                    class="fw-bold text-body" to="/register"><u>Register here</u></router-link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
// import { LoginApi } from '@/service/LoginApi'
import { mapGetters } from 'vuex';
export default{
    name:"LoginComponent",
    data(){
        return{
            details:{
                password:null,  
                email:null
            },
            success:null,
            error:null,
            disable:false,
            buttontxt:'Submit',
        }
    },
    methods:{
        loginForm:  function(){
            this.$store.dispatch("loginModule/loginUsers")
        } 
    },
    computed:mapGetters({
      loginUser:'getLoginUser'
    })
}
</script>
<style>
.gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}
</style>