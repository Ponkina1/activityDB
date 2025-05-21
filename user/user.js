import { FirestoreService } from '../nosql/firestore_service.js';

const firestore = new FirestoreService("employee");

//alert("sirvio yei");

document.getElementById("userButton").addEventListener("click", async () => {
    event.preventDefault();
    alert("Button clicked");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        address: address
    };

    await firestore.PostDocument(firstName, data);
});

document.getElementById("loadBtn").addEventListener("click", async () => {
    event.preventDefault();
    const cargaDiv = document.getElementById("carga");
    cargaDiv.innerHTML = ""; // Limpia el contenido anterior

    const documents = await firestore.getAllDocuments();

    if (documents.length === 0) {
        cargaDiv.innerHTML = "<p class='text-muted'>No data found.</p>";
        return;
    }

    documents.forEach((doc) => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${doc.firstName} ${doc.lastName}</h5>
                <p class="card-text"><strong>Username:</strong> @${doc.username}</p>
                <p class="card-text"><strong>Email:</strong> ${doc.email || "N/A"}</p>
                <p class="card-text"><strong>Address:</strong> ${doc.address}</p>
            </div>
        `;
        cargaDiv.appendChild(card);
    });
});