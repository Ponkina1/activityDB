function loadUserData() {
    fetch("http://localhost:3000/getNosql")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch user data.");
            }
            return response.json();
        })
        .then(data => {

            document.getElementById("dataContainer").style.display = "flex";

            document.getElementById("firstName").value = data.firstName || "";
            document.getElementById("lastName").value = data.lastName || "";
            document.getElementById("username").value = data.username || "";
            document.getElementById("email").value = data.email || "";
            document.getElementById("address").value = data.address || data.address || "";
        })
        .catch(error => {
            console.error("Error loading user data:", error);
            alert("Failed to load user data.");
        });
}
