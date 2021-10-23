import axios from 'axios'
class HelloWorldService {
    
    // executeHelloWorldService(){

    //     return axios.get('http://localhost:8080/hello-world')
        
    // }
    // executeHelloWorldBeanService(){

    //     return axios.get('http://localhost:8080/hello-world-bean')
        
    // }

     helloWorldPathvarible(name){
        let username ='mustapha';
        let password = 'dummy123';
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
       console.log(basicAuthHeader)
       //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
     
     // return axios.get(`${API_URL}/basicauth`,
    //        { headers: { authorization: this.createBasicAuthToken(username, password) } })
       
          return axios.get(`http://localhost:8080/hello-world/path-variable/${name}/`
        , 
             {
                 headers : {
                    authorization: basicAuthHeader,
                    
                    
                }
             }
        );    
        
    }
    handleError(error){
        return <div>Error occured</div>;
    }

}

export default new HelloWorldService()