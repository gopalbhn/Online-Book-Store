import { selector } from 'recoil';
import { userState } from '../atom/useratom.js';

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

export {userRole,userEmail}
