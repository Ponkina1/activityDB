document.getElementById("LogInButton").addEventListener("click", () => {
    const username = document.getElementById("LogIn").value;
    const password = document.getElementById("LogPassword").value;

    if (!username || !password) {
        alert("Please enter a username and password.");
        return;
    }

    fetch(`http://localhost:3000/user/${username}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 404) {
                throw new Error("User not found.");
            } else {
                throw new Error("Error fetching user.");
            }
        })
        .then(user => {
            if (user.password === password) {
                window.location.href = "user.html";
            } else {
                alert("Wrong password");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert(error.message);
        });
});
