var clicked = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var x;

function shiftToggle(id)
{

  x = id;

  if (!clicked[x])
  {
    document.getElementById(id).style.backgroundColor  = "green";
    clicked[x] = true;
  }
  else
  {
    document.getElementById(id).style.backgroundColor  = "white";
    clicked[x] = false;
  }
}


// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
