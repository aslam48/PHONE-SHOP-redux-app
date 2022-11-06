import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";




// const url =" https://course-api.com/react-useReducer-cart-project";

const initialState ={
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};




// export const getCartItem = createAsyncThunk('cart/getCartItem', ()=>{
//   return fetch(url)
//   .then((resp) => resp.json())
//   .catch((err)=> console.log(err))
// })
 
const cartSlice = createSlice({
    name:"cart",
    initialState,
 
    reducers:{
      clearCart:(state)=> {
        state.cartItems = []
      },

      removeItem: (state, action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item)=> item.id !== itemId)
      },

      increase: (state, {payload})=> {
        const cartItem = state.cartItems.find((item)=> item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
      },

      decrease: (state, {payload})=> {
        const cartItem = state.cartItems.find((item)=> item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
      },

      caculateTotals: (state)=> {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item)=> {
          amount += item.amount
          total += item.amount * item.price
        });
        state.amount = amount;
        state.total = total
      }
    },

  //  extraReducers:{
  //   [getCartItem.pending] : (state) => {
  //     state.isLoading = true
  //   },
  //   [getCartItem.fulfilled] : (state,action) => {
  //     state.isLoading = true
  //     state.cartItem = action.payload
  //   },
  //   [getCartItem.rejected] : (state) => {
  //     state.isLoading = false
  //   }
  //  }
})

export const{clearCart, removeItem,decrease,increase, caculateTotals} = cartSlice.actions

// console.log(cartSlice)
export default cartSlice.reducer