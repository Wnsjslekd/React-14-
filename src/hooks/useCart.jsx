import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

export function useCart(){
    return useContext(CartContext)
}