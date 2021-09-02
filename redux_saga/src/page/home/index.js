import React from 'react'
import {useDispatch} from 'react-redux'

const HomeIndex = () => {
    const dispatch = useDispatch()
    const handleTakeEvery =() => {
        dispatch({
            type :'takeEvery',
            user : {
                username : 'zs',
                password : '123'
            }
        })
    }
    const handleTakeLatest =() => {
        dispatch({
            type :'takeLatest',
            user : {
                username : 'ls',
                password : '123'
            }
        })
    }
    const handleThrottle =() => {
        dispatch({
            type :'Throttle',
            user : {
                username : 'ww',
                password : '123'
            }
        })
    }
    return (
        <div>
            <button onClick={handleTakeEvery}>点击发送takeEvery</button>
            <button onClick={handleTakeLatest}>点击发送takeLatest</button>
            <button onClick={handleThrottle}>点击发送Throttle</button>
        </div>
    )
}

export default HomeIndex
