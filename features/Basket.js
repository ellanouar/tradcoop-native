import {createSlice} from "@reduxjs/toolkit";
import ProductCard from "../components/ProductCard";

export const basketSlice= createSlice({
    name:"basket",
    initialState:{
        items:[]
    },
    reducers:{
        addToBasket:(state,action)=>{
            state.items=[...state.items,action.payload]
        },
        removeFromBasket:(state,action)=>{
            const index= state.items.findIndex((item)=>item.id===action.payload.id);
            let newBasket=[...state.items];
            if(index>=0){
                newBasket.splice(index,1);
            } else{
                console.warn(
                    `Cant remove product (id:${action.payload.id}) as its not in basket!`
                );
            }
            state.items= newBasket
        }
    }
});

export const {addToBasket,removeFromBasket}= basketSlice.actions

export const selectBasketItems= state=>state.basket.items

export const selectBasketItemsWithId= (state,id)=> state.basket.items.filter(item=> item.id=== id )

export const selectBasketTotal= ProductCard.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)

export default basketSlice.reducer