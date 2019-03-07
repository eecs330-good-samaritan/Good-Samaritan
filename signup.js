function shiftToggle(id)
{
  var bg = document.getElementById(id).style.background;
  console.log(bg)
  if (bg == "white")
  {
    bg = "green";
  }
  else if (bg == "green")
  {
    bg = "white";
  }
  document.getElementById(id).style.background = bg;
}

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
