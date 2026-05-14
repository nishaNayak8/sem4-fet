alert("Click on the course line to change text and font size!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // Change text only if user enters something
    let newText = prompt("Enter new text for the course line:");

    if (newText !== null && newText !== "") {
        courseLine.textContent = newText;
    }

    // Change font size only if user enters something
    let size = prompt("Enter font size:");

    if (size !== null && size !== "") {
        courseLine.style.fontSize = size;
    }

});
