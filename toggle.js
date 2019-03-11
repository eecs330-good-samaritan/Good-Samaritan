
function toggle()
{
  if(document.getElementById('togBtn').checked)
  {
    document.getElementById("go_button").href = "list-view.html";
  }

  else
  {
    document.getElementById("go_button").href = "map-view.html";
  }
}

var input = document.getElementById("searchBar");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("go").click();
  }
});