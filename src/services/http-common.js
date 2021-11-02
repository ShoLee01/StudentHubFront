import axios from "axios";

export default axios.create({
    baseURL: 'https://aqueous-lowlands-60101.herokuapp.com/api/',
    headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})