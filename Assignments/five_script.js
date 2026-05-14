document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // GET VALUES
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // ERROR ELEMENTS
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let msgError = document.getElementById("msgError");

    // CLEAR PREVIOUS ERRORS
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
    let checkEmail = true;

    while (checkEmail) {

        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } 
        else if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        checkEmail = false;
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

});document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // GET VALUES
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // ERROR ELEMENTS
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let msgError = document.getElementById("msgError");

    // CLEAR PREVIOUS ERRORS
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
    let checkEmail = true;

    while (checkEmail) {

        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } 
        else if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        checkEmail = false;
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
