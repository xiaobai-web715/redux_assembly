import {createStore , applyMiddleware} from 'redux'
//导入reducer
import { defReducer } from './reducer'
//导入saga ,最终要去run一下,执行一下saga
import defSaga  from './saga/index'
//导入createSagaMiddleware
import createSagaMiddleware from 'redux-saga'
//我们需要调用这个函数,来构建sagaMiddleware,最终把这个sagaMiddlaware传递进去
const sagaMiddleware = createSagaMiddleware()

//构建store
//createStore(reducer , initState , 中间件)需要这3个参数
//这样就通过applyMiddleware把我们的saga和store关联起来了
export default createStore(defReducer , {} , applyMiddleware(sagaMiddleware))
//如何实现的是saga运行,就是利用的middleware来run一下
sagaMiddleware.run(defSaga)