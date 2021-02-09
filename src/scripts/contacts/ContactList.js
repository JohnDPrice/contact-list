import {getContacts, useContacts} from "./ContactDataProvider.js"
import { Contact } from "./Contact.js"

// Prints the entire list of contacts to the DOM
export function ContactList(){
    getContacts()
    .then(() => {
        const allTheContacts = useContacts()

        // This is an element we added!
        const contentTarget = document.querySelector(".contacts-list-container")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop 
        contentTarget.innerHTML = `<h2>Contacts</h2>` + allTheContacts.map(singleContact => Contact(singleContact)).join("")
    })
}