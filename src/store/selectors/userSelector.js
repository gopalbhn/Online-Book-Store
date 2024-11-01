import { selector } from 'recoil';
import { userState } from '../atom/useratom.js';
import PurchaseHistory from '../../pages/history.jsx';

 const userEmail = selector({
    key: "userEmail",
    get: ({ get }) => {
        const state = get(userState);
        const user = state.user; 
        if (user) {
            return user.username; 
        }
        return null;
    }
});
const userRole = selector({
    key:'userRole',
    get:({get}) =>{
        const state = get(userState);
        const user = state.user;
        if(user){
            return user.role;
        }
        return null;
    }
})
const purchase = selector({
    key:'purchase',
    get:({get}) => {
        const state = get(userState);
        const user = state.user;
        console.log('purchase selector',user)
        if(user){
            return user.purchasedBooks;
        }
        return null
    }
})
export {userRole,userEmail,purchase}
