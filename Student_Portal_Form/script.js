const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = [
        nameInput,
        emailInput,
        passwordInput,
        confirmPasswordInput
    ];

    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.borderColor = "red";
            valid = false;
        } else {
            input.style.borderColor = "green";
        }
    });

    if (!valid) {
        alert("Please fill all fields.");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        return;
    }

    setTimeout(() => {

    alert("Form Submitted Successfully");

    const detailsDiv = document.createElement("div");

    detailsDiv.classList.add("details-card");

    detailsDiv.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Password:</strong> ${passwordInput.value}</p>
    `;

    document.getElementById("studentDetails").appendChild(detailsDiv);

}, 2000);
});