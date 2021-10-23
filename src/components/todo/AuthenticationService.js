import axios from 'axios'

class AuthenticationService {

    createBasicAuthToken(username,password){
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    executeBasicAuthenticationService(username , password) {
        
        return axios.get('http://localhost:8080/basicauth',{
            headers: {authorization: this.createBasicAuthToken(username,password)}
        })
    }

    
    registerSuccessfullLogin(username,password){
        console.log("auth");
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }
    isUserLoggedIn(){
        let user =sessionStorage.getItem('authenticatedUser')
        if(user===null) return false;
        return true;
    }

    getLoggedInUsername(){
         let user =sessionStorage.getItem('authenticatedUser')
        if(user===null) return '';
        return user;
    }
    setupAxiosInterceptors(basicAuthHeader){
        

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                config.headers.authorization = basicAuthHeader
                }
                return config
            }
            
        )
    }
}

export default new AuthenticationService()