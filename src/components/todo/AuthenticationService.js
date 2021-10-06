class AuthenticationService {
    registerSuccessfullLogin(username,password){
        console.log("auth");
        sessionStorage.setItem('authenticatedUser',username);
    }
}

export default new AuthenticationService()