let contacts = []

export const useContacts = () => contacts.slice()

// Fetches contacts from local API
export const getContacts = () => {
    return fetch('http://localhost:8088/contacts')
        .then(response => response.json())
        .then(parsedContacts => {
            contacts = parsedContacts
        })

}

// Adds contacts to local API
export const saveContact = contact => {
    return fetch('http://localhost:8088/contacts', {
        method: "POST", // POST method is used to request that the origin server accept the entity encolsed
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    })
    .then(getContacts) 
}