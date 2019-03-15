

// var clicked=true;
active_filters = []
//function used for filtering
function filterlists(element) {
	currentid = element.id;
    if (element.checked) {
        active_filters.push(currentid)
    } else {
        for (var i=active_filters.length-1; i>=0; i--) {
            if (active_filters[i] === currentid) {
                active_filters.splice(i, 1);
                break;
            }
        }
    }
    applyFilters();
}

function applyFilters() {
    var elements = document.getElementsByClassName('org-details');
    // loop through each element:
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        matches = 0;
        // loop through each filter to check if there's a match:
        for (j = 0; j < active_filters.length; j++) {
            var filter = active_filters[j];
            if (element.id.includes(filter)) {
                ++matches;
            }
        }
        // if you want it to be an "AND" filter instead of an "OR" filter,
        // then check if matches === active_filters.length
        if (matches === active_filters.length) {
            element.style.display = "inline-block";
        } else {
            element.style.display = "none";
        }
    }
}
applyFilters();

// var clicked=true;
// //function used for filtering

// function filterlists(currentid){
// 	var current_id = currentid;
// 	//possibly chanege the name of the id to have clicked in it and then if there is clicked in the id return the normal listing
// 	var elements = document.getElementsByClassName('org-details');
// 	if(clicked==false){
   
//     for (var i = 0; i < elements.length; i++) {
//     var elementss = document.getElementById(elements[i].id);
// 		console.log(elements[i].id)
// 		elementss.style.display = "";
    
// 	}
//   clicked=true
// }
// 	else if (clicked==true){
// 		for (var i = 0; i < elements.length; i++) {
//     		var item = elements[i].id;
//    			if (item.includes(current_id)){
//    				elements[i].style.display = "span";
//    			}
//    			else {
//    				elements[i].style.display = "none";
//   			}    
// 		}
// 		clicked=false

// 	}

// }
