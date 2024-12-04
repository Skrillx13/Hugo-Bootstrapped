console.log("This is from main.js!");
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");
    const testElement = document.getElementById("test-element");
    if (testElement) {
        testElement.textContent = "JavaScript from main.js is working!";
    }
});
