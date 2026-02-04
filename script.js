function runCode() {
  // 1. Hide the buttons
  var buttons = document.getElementById("buttonBox");
  buttons.style.display = "none";
  
  var text = document.getElementById("subTitle");
  text.style.display = "none";

  // 2. Show the "Redeeming" message
  var message = document.getElementById("waitMessage");
  message.style.display = "block";

  // 3. Wait 3 seconds then show the prank
  setTimeout(function() {
    
    // Hide the message
    message.style.display = "none";

    // Show the box
    var box = document.getElementById("resultBox");
    box.style.display = "block";

    // Change background to red
    document.body.style.backgroundColor = "red";

    // Change title text
    document.getElementById("mainTitle").innerText = "Oh no...";

  }, 3000);
}
