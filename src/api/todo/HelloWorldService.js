import axios from 'axios'
class HelloWorldService {
    executeHelloWorldService(){

        return axios.get('http://localhost:8080/hello-world')
        
    }
    executeHelloWorldBeanService(){

        return axios.get('http://localhost:8080/hello-world-bean')
        
    }
     helloWorldPathvarible(name){

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        
    }
    handleError(error){
        return <div>Error occured</div>;
    }

}

export default new HelloWorldService()