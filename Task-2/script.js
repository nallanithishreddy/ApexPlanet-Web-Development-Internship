const form = document.getElementById("applicationForm");
const applicationList = document.getElementById("applicationList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;

    if (company === "" || role === "" || email === "" || status === "") {

        alert("Please fill all fields");
        return;
    }

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${company}</h3>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Status:</strong> ${status}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Delete button functionality
    card.querySelector(".delete-btn").addEventListener("click", function() {
        card.remove();
    });

    applicationList.appendChild(card);

    form.reset();

});