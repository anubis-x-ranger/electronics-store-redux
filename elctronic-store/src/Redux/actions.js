import { useState } from "react"

const [data,setData]=useState([]);
// action types
export const ADD_ORDER="ADD_ORDER"


// Action Creators
export const add_order=()=>{
    return{
        type:"ADD_ORDER",
        payload:data
    }
}