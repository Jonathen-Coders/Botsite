// announcement.js

// Define the end date
var endDate = new Date(endDateString); // endDateString will be set from announcement.md

// Get the current date
var currentDate = new Date();

// Compare the current date with the end date
if (currentDate > endDate) {
    // If the current date is past the end date, hide the announcement
    document.querySelector(".announcement").style.display = "none";
}

// Wait until the HTML document has been fully loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the element with the ID 'dismiss-btn'
    document.getElementById("dismiss-btn").addEventListener("click", function() {
        // When 'dismiss-btn' is clicked, hide the element with the class 'announcement'
        document.querySelector(".announcement").style.display = "none";
    });
});