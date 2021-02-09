import {getContacts, useContacts} from "../contacts/ContactDataProvider.js"
import { Favorite } from "./Favorite.js"

// Prints the entire list of contacts to the DOM
export function FavoriteList(){
    getContacts()
    .then(() => {
        const allTheContacts = useContacts()

        // This is an element we added!
        const contentTarget = document.querySelector(".favorites-list-container")
        
        let favoriteListHTMLString = ""
        for(const singleContact of allTheContacts){
            if(singleContact.favorite === true){
                favoriteListHTMLString += Favorite(singleContact);
            }
            contentTarget.innerHTML =  `<h2>Favorites</h2>${favoriteListHTMLString}`
        }

    })
}