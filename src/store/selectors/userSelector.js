import { selector } from 'recoil';
import { userState } from '../atom/useratom.js';

export const userEmail = selector({
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
