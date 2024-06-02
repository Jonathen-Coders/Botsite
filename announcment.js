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

document.getElementById("dismiss-btn").addEventListener("click", function() {
    document.querySelector(".announcement").style.display = "none";
});