const form = document.getElementById("studentForm");
const cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rollno = document.getElementById("rollno").value;

    // create card
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Roll No:</strong> ${rollno}</p>
    `;

    // append card (does NOT remove previous ones)
    cardContainer.appendChild(card);

    // clear inputs
    form.reset();
});