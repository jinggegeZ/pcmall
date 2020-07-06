// 封装所有的请求
import service  from  './index'

export default {
    // 首页所有数据
    recommend(){
        return service.get('/recommend')
    },
    // 搜索页
    search(value){
        return service.post(`/search`,{value})
    },
    // 分类查询(get)
    classification(id){
        return service.get(`/classification?mallSubId=${id}`)
    },
    // 4.查询获取购物车数据(get)
    Card(){
        return service.post('/getCard')
    },
    //5. 购物车加减商品(post)
    editCart({count,id,mallPrice}){
        return service.post('/editCart',{
            count:count,
            id:id,
            mallPrice:mallPrice
        })
    },
    // 6. 购物车商品删除(post)
    deleteShop(arr){
        return service.post('/deleteShop',arr)
    },
    // 7. 购物车支付页面(post)
    order({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{
            address:address,
            tel:tel,
            orderId:orderId,
            totalPrice:totalPrice,
            idDirect:idDirect,
            count:count
        })
    },
    // 8.单个商品详情(get)
    one(id){
        return service.get(`/goods/one?id=${id}`)
    },
    // 9.收藏单个商品(post)
    collection(goods){
        return service.post('collection',goods)
    },
    // 10. 取消收藏(post)
    cancelCollection(id){
        return service.post('/cancelCollection',{id})
    },
    // 11.查询商品是否已收藏(post)
    isCollection(id){
        return service.post('/isCollection',{id})
    },
    // 12. 加入购物车(post)
    addShop(id){
        return service.post('/addShop',{id})
    },

    // 13. 退出登录(post)
    loginOut({}){
        return service.post('/loginOut',{})
    },
    // 14. 获取用户信息(post)
    queryUser(){
        return service.post('/queryUser')
    },
    // 15. 修改保存用户信息(post)
    saveUser(gender,year,month,day,id,nickname){
        return service.post('/saveUser',{
            gender:gender,
            year:year,
            month:month,
            day:day,
            id:id,
            nickname:nickname
        })
    },
    // 16. 查询用户订单数量(get)
    orderNum(){
        return service.get('/myOrder/orderNum')
    },
    // 17. 商品评论(post)
    comment({id,rate,content,anonymous,_id,order_id,image}){
       return service.post('/goodsOne/comment',{
            id:id,
            rate:rate,
            content:content,
            anonymous:anonymous,
            _id: _id,
            order_id:order_id,
            image:[]
       }) 
    },
    // 18. 获取登录注册默认验证码(get)
    verify(){
        return service.get('/verify')
    },
    // 19. 查询用户收货地址(get)
    getAddress(){
        return service.get('/getAddress')
    },
    // 20. 查询默认收货地址(get)
    getDefaultAddress(){
        return service.get('/getDefaultAddress')
    },
    // 21. 设置默认收货地址(post)
    setDefaultAddress(id){
        return service.post('/setDefaultAddress',{id})
    },
    // 22. 增加收货地址(post)
    address({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
        return service.post('/address',{name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id})
    },
    // 23. 删除地址(post)
    deleteAddress({id}){
        return service.post('/deleteAddress',{id})
    },
    // 24. 查询我的收藏(get)
    getcollection(){
        return service.post('/collection/list')
    },
    // 25. 注册(post)
    register(nickname,password,verify){
        return service.post('/register',{nickname,password,verify})
    },
    // 26. 登录(post)
    login(nickname,password,verify){
        return service.post('/login',{nickname,password,verify})
    },
    // 27. 订单查询(get)
    getMyOrder(){
        return service.get('/myOrder')
    },
    // 28. 查询已评价(get)
    alreadyEvaluated(){
        return service.get('/alreadyEvaluated')
    },
    // 29. 查询未评价(get)
    tobeEvaluated(){
        return service.get('/tobeEvaluated')
    },
    // 30. 查询单条评论(post)
    evaluateOne(id,_id){
        return service.post('/evaluateOne',{id,_id})
    }
}