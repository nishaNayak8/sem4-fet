const correctPin = "1234";
let attempts = 3;

// PIN VALIDATION
document.getElementById("pinBtn").addEventListener("click", function () {

    let enteredPin = document.getElementById("pinInput").value;
    let pinError = document.getElementById("pinError");
    let attemptsText = document.getElementById("attemptsText");

    pinError.textContent = "";

    // USING WHILE LOOP
    let checking = true;

    while (checking) {

        if (enteredPin === correctPin) {

            document.getElementById("pinSection").classList.add("hidden");
            document.getElementById("formSection").classList.remove("hidden");

        } else {

            attempts--;

            pinError.textContent = "Incorrect PIN";
            attemptsText.textContent = "Attempts Left: " + attempts;

            if (attempts === 0) {
                pinError.textContent = "Access Blocked";
                document.getElementById("pinBtn").disabled = true;
            }
        }

        checking = false;
    }
});


// FORM VALIDATION
document.getElementById("myForm").addEventListener("submit", function (event) {

    event.preventDefault();

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
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // EMAIL VALIDATION USING WHILE LOOP
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let emailCheck = true;

    while (emailCheck) {

        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        }
        else if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        emailCheck = false;
    }

    // MESSAGE VALIDATION USING DO WHILE LOOP
    do {

        if (message.length < 5) {
            msgError.textContent = "Message must be at least 5 characters";
            isValid = false;
        }

    } while (false);

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
