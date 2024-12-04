var clipboard = new ClipboardJS('.copy-btn');
clipboard.on('success', function(e) {
  alert('Code copied!');
  e.clearSelection();
});

console.log("This is from main.js!");
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");
    const testElement = document.getElementById("test-element");
    if (testElement) {
        testElement.textContent = "JavaScript from main.js is working!";
    }
});