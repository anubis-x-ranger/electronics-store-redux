import { useState,useEffect } from "react"
import { NewOrder } from "../components/NewOrder"
import axios from "axios";
// action types
export const ADD_ORDER="ADD_ORDER"
useEffect(()=>{
    const {data}=await axios("http://localhost:8080/orders");

},[]);

// Action Creators
export const add_order=()=>{
    return{
        type:"ADD_ORDER",
        payload:{data}
    }
}