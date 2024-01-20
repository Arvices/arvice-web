import axios from "axios";

let baseURL = "http://localhost:3000"

function reqSubmitSignup(data){
    return axios.post(`${baseURL}/user/addemailverification`,data,{
        headers : {
        }
    })
} 



export {
    reqSubmitSignup
}