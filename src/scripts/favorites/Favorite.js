// Function that renders HTML component representing a single contact
export const Favorite = contactObject => `
    <div class="col-sm-4">
        <div class="card contact-card">
            <p class="card-title">${contactObject.name}</p>
            <p class="card-text">Cell Number: ${contactObject.cellNumber}</p><p class="card-text">Email: ${contactObject.email}</p>
        </div>
    </div>`
