const creatorId = "YourName"; // Replace with your creator name
let selectedUserId = null;

// Fetch and display users
function fetchUsers()
{
    fetch(`https://digicode.cleverapps.io/utilisateurs/${creatorId}`)
    .then(response =>
    {
        if (!response.ok)
            throw new Error("Failed to fetch users");

        return response.json();
    }).then(users => displayUsers(users))
    .catch(err => console.error("Error fetching users:", err));
}

// Display users in the table
function displayUsers(users)
{
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Clear the table

    if (users.length === 0)
    {
        tableBody.innerHTML =
        `
            <tr>
                <td colspan="7" style="text-align: center;">No users found</td>
            </tr>
        `;

        return;
    }

    users.forEach(user =>
    {
        const row = document.createElement("tr");
        row.innerHTML =
        `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.dateNaissance}</td>
            <td>${user.lieuNaissance}</td>
            <td>${user.numeroRue} ${user.libelleRue}, ${user.codePostal} ${user.ville}</td>
            <td class="action-buttons">
                <button class="btn btn-delete" onclick="promptDelete(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Open delete confirmation modal
function promptDelete(userId)
{
    selectedUserId = userId;
    openModale("deleteUserModal");
}

// Confirm deletion
function confirmDelete()
{
    fetch(`https://digicode.cleverapps.io/utilisateurs/${creatorId}/${selectedUserId}`, { method: "DELETE" })
    .then(response =>
    {
        if (!response.ok)
            throw new Error("Failed to delete user");

        closeModale("deleteUserModal");
        fetchUsers(); // Refresh the table
    }).catch(err => console.error("Error deleting user:", err));
}

// Create a new user
function createUser()
{
    const form = document.getElementById("createUserForm");
    const formData = new FormData(form);
    const user = Object.fromEntries(formData);
    user.idCreateur = creatorId; // Add creator ID

    fetch("https://digicode.cleverapps.io/utilisateurs/",
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    }).then(response =>
    {
        if (!response.ok)
            return response.text().then(err => { throw new Error(err); });

         return response.json();
    }).then(() =>
    {
        closeModale("createUserModal");
        fetchUsers(); // Refresh the table
        form.reset(); // Clear the form
    }).catch(err => alert("Error creating user: " + err.message));
}

// Initial fetch
window.onload = fetchUsers;
