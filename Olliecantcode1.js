// 1. Select the button
const btn = document.querySelector('.button');

// 2. Run this code when the button is clicked
btn.onclick = function(event) {
  event.preventDefault(); // Stop page refresh
  
  // --- PART 1: Ask for Username ---
  let username = prompt("Please enter your username:");
  
  // Only continue if they actually typed a username
  if (username) {
    
    // --- PART 2: Ask for Amount ---
    let choice = prompt("Hello " + username + "!\n\nPlease type one of the following amounts:\n1000\n10000\n100000\n1000000");

    // Check if the amount is valid
    if (choice === "1000" || choice === "10000" || choice === "100000" || choice === "1000000") {
        alert("Success! \nUser: " + username + "\nAmount: " + choice);
        console.log("User:", username, "Amount:", choice);
    } else {
        alert("Invalid amount selected.");
    }
  }
};
