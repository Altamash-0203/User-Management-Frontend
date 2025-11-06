import axios from "axios";

let API=axios.create({
    baseURL:" https://user-management-backend-1-gnx6.onrender.com"
})


API.interceptors.request.use((req)=>{
    let token=localStorage.getItem("token")
    if(token) req.headers.Authorization=`Bearer ${token}`
    return req
})

export default API
