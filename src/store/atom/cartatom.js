import { atom } from "recoil";


export const CartState = atom({
    key:'CartState',
    default: JSON.parse(localStorage.getItem('cart')) || [] ,
})