import { createContext, useContext } from "react";

export const StoreContext = createContext({
    imgURL: null,
    FollwersCount: 0,
    setfollower:()=>{},
    setimg:()=>{},
});


export const UseStore = StoreContext.Provider;

export default function StoreContent(){
    return useContext(StoreContext);
}
