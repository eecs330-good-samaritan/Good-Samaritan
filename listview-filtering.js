

//function used for filtering

function filterlists(currentid){
	var current_id = currentid;
	var elements = document.getElementsByClassName('org-details');
	for (var i = 0; i < elements.length; i++) {
    	var item = elements[i].id;
   		if (item.includes(current_id)){
   			elements[i].style.display = "span";
   		}
   		else {
   			elements[i].style.display = "none";
  		}    
	}
}
