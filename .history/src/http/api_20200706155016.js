// 封装所有的请求
import service  from  './index'

export default {
    // (1)首页所有数据
    home(){
        return service.get('/goods/home')
    },
    // (2)热门商品
    hootgoods(){
        return service.get('/goods/recommend')
    },
    //所有商品
    allgoods(){
        return service.get('/goods/allGoods')
    }
    
}