import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let items = createSlice({
    name : 'items',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
      NumAdd (state, action) {
        let 번호 = state.findIndex((a)=>{ return a.id === action.payload });
        state[번호].count++;
      },
      ItemAdd (state, action) {
        const Index = state.findIndex(item => item.id === action.payload.id);
        if (Index !== -1) {
            state[Index].count++;
        } else {
            state.push(action.payload);
        }  
      }, 
      ItemDelete (state, action) {
        const index = state.findIndex(item => item.id === action.payload);
        state.splice(index, 1);
      }
  }     
})

export let { NumAdd, ItemAdd, ItemDelete } = items.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    items: items.reducer
  }
}) 