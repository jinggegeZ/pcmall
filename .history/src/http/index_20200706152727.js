// 封装请求
import axios from 'axios'
// 创建一个实例
const service = axios.create({
    baseURL:'/api',
    timeout:10000
})
// 相应拦截
service.interceptors.response.use(res => {
    return res.data
})

// 默认导出
export default service