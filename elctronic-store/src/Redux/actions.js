import { useState,useEffect } from "react"
import { NewOrder } from "../components/NewOrder"

// action types
export const ADD_ORDER="ADD_ORDER"


// Action Creators
export const add_order=()=>{
    return{
        type:"ADD_ORDER",
        payload:{


        }
    }
}