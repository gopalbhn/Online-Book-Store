import { atom } from "recoil";

export const bookState = atom({
    key:'bookState',
    default:[{
        book:null
    }]
})