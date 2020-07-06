// 封装所有的请求
import service  from  './index'

export default {
    // 首页所有数据
    home(){
        return service.get('/recommend')
    },
    
}