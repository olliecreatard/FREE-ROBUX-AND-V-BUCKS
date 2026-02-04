function runCode() {
  // 1. Instantly hide buttons
  var buttons = document.getElementById("buttonBox");
  buttons.style.display = "none";
  
  var text = document.getElementById("subTitle");
  text.style.display = "none";

  // 2. Instantly show the waiting message
  var message = document.getElementById("waitMessage");
  message.style.display = "block";

  // 3. Wait 3 seconds...
  setTimeout(function() {
    
    // Hide the message
    message.style.display = "none";

    // SNAP: Show the result box
    var box = document.getElementById("resultBox");
    box.style.display = "block";

    // SNAP: Change background to red immediately
    document.body.style.backgroundColor = "red";

    // Change title text
    document.getElementById("mainTitle").innerText = "Oh no...";

  }, 3000);
}
