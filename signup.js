function shiftToggle(id)
{
  var bg = document.getElementById(id).style.backgroundColor;
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
