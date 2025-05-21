document.getElementById("userButton").addEventListener("click", () => {
    alert("Button clicked");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const Address = document.getElementById("Address").value;

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        Address: Address
    };

    fetch("http://localhost:3000/uploadNosql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Registration failed.");
            }
        })
        .then(message => {
            alert(message);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while registering.");
        });
});