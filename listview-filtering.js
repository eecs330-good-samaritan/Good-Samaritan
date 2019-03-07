
var clicked=true;
//function used for filtering

function filterlists(currentid){
	var current_id = currentid;
	//possibly chanege the name of the id to have clicked in it and then if there is clicked in the id return the normal listing
	var elements = document.getElementsByClassName('org-details');
	if(clicked==false){
   
    for (var i = 0; i < elements.length; i++) {
    var elementss = document.getElementById(elements[i].id);
		console.log(elements[i].id)
		elementss.style.display = "";
    
	}
  clicked=true
}
	else if (clicked==true){
		for (var i = 0; i < elements.length; i++) {
    		var item = elements[i].id;
   			if (item.includes(current_id)){
   				elements[i].style.display = "span";
   			}
   			else {
   				elements[i].style.display = "none";
  			}    
		}
		clicked=false

	}

}
