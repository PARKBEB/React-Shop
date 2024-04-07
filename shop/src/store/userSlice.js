import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age: 20},
    reducers : {
        changeName(state) {
            // array/object의 경우 직접 수정해도 state 변경됨
            state.name = 'park'
        },
        oldAge(state, action) {
            state.age += action.payload 
        }
    }    
})

export let { changeName, oldAge } = user.actions

export default user