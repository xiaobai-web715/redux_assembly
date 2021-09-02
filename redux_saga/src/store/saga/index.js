//这里用async来取代这个*他老是报错(所以还是用的*)
//测试saga的3个辅助函数(takeEvery , takeLatest , throttle)都是用来监听action的,只要action传递过来就会触发对应的saga函数的调用(action里面携带着type对应找到相同的pattern)
import {select, takeEvery , takeLatest , throttle , call} from 'redux-saga/effects'
//视频中利用的axios进行的请求
import axios from 'axios'
function* defSage (){
    //接下来的一步就是要在我们的saga里面获取我们的数据
    yield takeEvery('takeEvery' , function*(){
        //获取state数据
        const user = yield select(state => state.user)
        // console.log('takeEvery' , user)
        //接下来用call来进行我们的请求(接收两个参数,第一个参数是一个函数,第二个是参数)
        const data = yield call(axios.post , '第一个参数放置请求路径(就是你的后台服务器的http://10.120.229.71:3001像这样,在加上你的路由视频当中是/login)' , {
            ...user
        })
        //不过这里没有老师所讲的那个后台服务器的项目,没办法进行演示we
        console.log(data)
    })
    //我们要在saga里面去监听action
    yield takeLatest('takeLatest' , function*(){
        console.log('takeLatest')
    })
    yield throttle(1000 , 'Throttle' , function*(){
        console.log('Throttle')
    })
}

export default defSage