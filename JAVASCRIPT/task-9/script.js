// Function to register a new user
function registerUser() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (!name || !email || !contact || !address) {
        alert("Please fill all fields!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ name, email, contact, address });

    localStorage.setItem("users", JSON.stringify(users));

    alert("User Registered Successfully!");
    document.getElementById("registrationForm").reset();
}

// Function to display users in the table
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userTable = document.getElementById("userTable");

    userTable.innerHTML = "";

    users.forEach(user => {
        let row = `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.address}</td>
        </tr>`;
        userTable.innerHTML += row;
    });
}

// Load users on View Page
if (document.getElementById("userTable")) {
    displayUsers();
}
