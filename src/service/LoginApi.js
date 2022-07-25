import axios from "axios";

export class LoginApi {
    static serverUrl= `http://localhost/Larave-JWT-Authentication/public/api`;

    static register(detail) {
        let dataUrl= `${this.serverUrl}/api-user-registration`;
        // console.log(dataUrl);
        return axios.post(dataUrl,detail);
    }
    static login(detail) {
        let dataUrl= `${this.serverUrl}/api-user-login`;
        
        return axios.post(dataUrl,detail);
    }
   

    static user(){
        let token=localStorage.getItem("token");
        let dataUrl=`${this.serverUrl}/user`;
        return axios.get(dataUrl,{
            headers: {
                Authorization: `Bearer ${token}`,
                token: token
              }
        })
    }
}