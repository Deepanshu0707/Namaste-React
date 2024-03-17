import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items : [],
    },
    reducers:{
        addItem : (state,action)=>{
            const cartItem = action.payload;
            const itemIdxValue = state.items.findIndex((idx)=>idx.card.info.name === cartItem.card.info.name);
            // findIndex return either index value where it find the condition true or it return -1 //
            if(itemIdxValue === -1){
                state.items.push({...cartItem, quantity : 1});
            } else{
                state.items[itemIdxValue].quantity++;
            }
        },
        removeItem: (state, action)=>{
        const cartItem = action.payload;
        const itemIndexValue = state.items.findIndex((idx)=>idx.card.info.name === cartItem.card.info.name);
            if(itemIndexValue !== -1){
                if(state.items[itemIndexValue].quantity > 1){
                    state.items[itemIndexValue].quantity--;
                }
                else if(state.items[itemIndexValue].quantity === 1){
                    const filterCart = state.items.filter((item)=>item.card.info.name !== cartItem.card.info.name );
                    state.items = filterCart;
                } 
            }   
           
        },
            clearCart : (state)=>{
                state.items.length = 0;
            }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions; 
export default cartSlice.reducer;