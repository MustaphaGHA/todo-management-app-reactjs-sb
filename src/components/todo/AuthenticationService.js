import axios from 'axios'

class AuthenticationService {
    registerSuccessfullLogin(username,password){
        console.log("auth");
        sessionStorage.setItem('authenticatedUser',username);
        this.setupAxiosInterceptors()
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
    setupAxiosInterceptors(){
        let username ='mustapha';
        let password = 'dummy123';
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

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