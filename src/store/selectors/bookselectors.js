import { selector } from "recoil";
import { bookState } from "../atom/bookatom";

 const bookName = selector({
    key:'bookName',
    get:({get})=>{
        const state = bookState;
        const book = state.book;
        if(book){
            return book.name
        }
        return null
    }
})

const investmentBooks = selector({
    key:'investmentBooks',
    get:({get})=>{
        const state = get(bookState);
        console.log("state",state)

        const investmentbooks = state.filter(book => book.category === 'Investment')
        return investmentbooks;
    }
})

const nepalibooks = selector({
    key:'nepalibooks',
    get:({get}) =>{
        const state = get(bookState);
        
        const nepalibooks = state.filter(book => book.category === 'Nepali')
        return nepalibooks;
    }
})
export {bookName,investmentBooks,nepalibooks}