alert("Click on the course line to change text and font size!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // Step 1: change text
    let newText = prompt("Enter new text for the course line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        // Step 2: change font size after text update
        let size = prompt("Enter font size (e.g., 20px, 2rem, 30px):");

        if (size !== null && size.trim() !== "") {
            courseLine.style.fontSize = size;
        } else {
            alert("No valid font size provided!");
        }

    } else {
        alert("No valid text provided!");
    }
});
