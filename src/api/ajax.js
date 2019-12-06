import axios from 'axios';

//默认请求根路径
console.log(process.env);
const BASE_URL = 'https://cnodejs.org';
axios.defaults.baseURL = BASE_URL;
//请求拦截
    axios.interceptors.request.use(config=>{
        return config
    })
//响应拦截
    axios.interceptors.response.use(response=>{
        if(response.status ===200 || response.status ===304){
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },error=>{
        return Promise.reject(error)
    })
 class ajax {
     post(url,data,params,headers){
         return new Promise((resolve,reject) =>{
             axios({
                 method:'post',
                 url:url,
                 data:data||{},
                 params:params||{},
                 headers: headers||{
                     'Content-Type': 'application/json;charset=UTF-8' //application/x-www-form-urlencoded'
                 }
             }).then(response=>{
                 resolve(response)
             }).catch(error=>{
                 reject(error)
             })
         } )
     }

     get(url,params){
         return new Promise((resolve,reject) =>{
             axios({
                 method:'get',
                 url:url,
                 params:params||{}
             }).then(response=>{
                 resolve(response)
             }).catch(error=>{
                 reject(error)
             })
         } )
     }

 }

 export default new ajax
