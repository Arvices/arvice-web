import axios from "axios";

let baseURL = "http://localhost:3000";

function reqSubmitSignup(data) {
  return axios.post(`${baseURL}/user/addemailverification`, data, {
    headers: {},
  });
}
function reqSubmitOTP(data) {
  return axios.post(`${baseURL}/user/verifyemail`, data);
}

export { reqSubmitSignup, reqSubmitOTP };
