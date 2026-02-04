function startPrank() {
  // 1. Hide the buttons immediately so they can't click again
  document.getElementById("buttons-container").style.display = "none";
  document.getElementById("sub-title").style.display = "none";

  // 2. Show the "Loading" text
  let loader = document.getElementById("loading-msg");
  loader.style.display = "block";

  // 3. WAIT 3 SECONDS (3000 milliseconds)
  setTimeout(function() {
    
    // Hide the loader
    loader.style.display = "none";

    // Show the definition card
    document.getElementById("definition-card").style.display = "block";

    // Change the background color to red for impact
    document.body.style.backgroundColor = "#ffcccc"; // Light red

    // Change the title
    document.getElementById("main-title").innerText = "Oh no...";

  }, 3000); 
}
