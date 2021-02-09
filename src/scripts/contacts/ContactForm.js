import {saveContact} from "./ContactDataProvider.js"
import {ContactList} from "./ContactList.js"

const contentTarget = document.querySelector(".contacts-form-container")

// Renders HTML contacts form and save contact button component
export const ContactForm = () => {
    contentTarget.innerHTML = `
        <form>
            <div class="contact-form">
                <input type="text" class="form-control-sm" placeholder="Name" id="contact-name" />
                <input type="text" class="form-control-sm" placeholder="Cell Number" id="cell-number"/>
                <input type="text" class="form-control-sm" placeholder="Email" id="email"/>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="favoriteContact">
                    <label class="form-check-label" for="flexCheckDefault">
                    Save to favorites
                    </label>
                </div>
                <button class="btn btn-primary" id="saveContact">Save Contact</button>
            </div>
        </form>`
}

const eventHub = document.querySelector(".contacts-form-container")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveContact") {
        console.log("You clicked the save contact button")

        // Make a new object representation of a note
        const newContact = {
            name: document.querySelector("#contact-name").value,
            cellNumber: document.querySelector("#cell-number").value,
            email: document.querySelector("#email").value,
            favorite: document.querySelector("#favoriteContact").checked
        }
        console.log("this is new note", newContact)

        // // Change API state and application state
        saveContact(newContact)
        .then(ContactList) // Refresh your list of notes once you've saved your new one
    }
})