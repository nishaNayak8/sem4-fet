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
