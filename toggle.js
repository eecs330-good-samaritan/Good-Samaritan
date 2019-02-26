
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
