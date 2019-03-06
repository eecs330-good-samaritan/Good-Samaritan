
var slot9 = "white";

document.getElementById("t9").onclick = function()
{
  if (slot9 == "white")
  {
    slot9 = "green";
  }
  else if (slot9 == "green")
  {
    slot9 = "white";
  }
  document.getElementById("t9").style.background = slot9;
}
