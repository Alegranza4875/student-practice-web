// 1. Show today's date in the header
document.getElementById("date").innerHTML = "Today is: " + new Date().toDateString();

// 2. Greeting that changes with the time of day
var hour = new Date().getHours();
if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good morning, student!";
} else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon, student!";
} else {
    document.getElementById("greeting").innerHTML = "Good evening, student!";
}

// 3. Button that pops up a message
function showMessage() {
    alert("Welcome to Pretoria Technical College!");
}

// 4. Button that shows and hides the opening hours
function toggleInfo() {
    var hours = document.getElementById("hours");
    if (hours.style.display === "none") {
        hours.style.display = "block";
    } else {
        hours.style.display = "none";
    }
}

// 5. Check the form before it is sent
function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        alert("Please fill in all the fields.");
        return false;
    }

    document.getElementById("result").innerHTML =
        "Thank you " + name + ", you have registered for " + course + "!";
    return false; // stops the page from reloading
}