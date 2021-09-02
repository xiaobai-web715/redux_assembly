export const defReducer = (state={} , action) =>{
    // 传过来的action先走到我们的reducer
    console.log('defReducer' , action)
    //而saga就是在我们这个return的state到达store中间的时候进行的操作,所以saga是中间件啊
    //然后这里的return会把state给return到我们的store里面
    // return state
    return Object.assign({} , state , action);//这里使用浅拷贝促使状态更新(这样saga里面也可以拿到action的值)
}