import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext.jsx";

export function useMenu(){
    return useContext(MenuContext)
}
