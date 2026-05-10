// SECURITY PIN LOGIC
const correctPin = "1234";
let attempts = 3;

const pinBtn = document.getElementById("pinBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const attemptsText = document.getElementById("attemptsText");

const pinSection = document.getElementById("pinSection");
const formSection = document.getElementById("formSection");

pinBtn.addEventListener("click", function () {

    const enteredPin = pinInput.value.trim();

    if (enteredPin === correctPin) {

        pinSection.classList.add("hidden");
        formSection.classList.remove("hidden");

    } else {

        attempts--;

        if (attempts > 0) {
            pinError.textContent = "Incorrect PIN!";
            attemptsText.textContent = `Attempts Left: ${attempts}`;
        } else {

            pinError.textContent = "System Locked!";
            attemptsText.textContent = "No Attempts Left";

            pinInput.disabled = true;
            pinBtn.disabled = true;

            pinBtn.style.background = "gray";
            pinBtn.style.cursor = "not-allowed";
        }
    }
});


// FORM VALIDATION
document.getElementById("myForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let msgError = document.getElementById("msgError");

    nameError.textContent = "";
    emailError.textContent = "";
    msgError.textContent = "";

    let isValid = true;

    // NAME VALIDATION
    let namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "Only letters allowed";
        isValid = false;
    }

    // EMAIL VALIDATION
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    // MESSAGE VALIDATION
    if (message.length < 5) {
        msgError.textContent = "Message must be at least 5 characters";
        isValid = false;
    }

    // DISPLAY OUTPUT
    if (isValid) {

        let result = `
            <strong>Name:</strong> ${name} <br>
            <strong>Email:</strong> ${email} <br>
            <strong>Message:</strong> ${message}
        `;

        document.getElementById("output").innerHTML = result;
    }
});
