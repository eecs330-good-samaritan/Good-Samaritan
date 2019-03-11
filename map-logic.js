L.mapbox.accessToken = 'pk.eyJ1IjoiYWZhcmthc2giLCJhIjoiY2psdWNpY3dmMGk2cDNxcDk1NWtqaTd1cCJ9.bxn3UAJ-A_ihN6LZRdE0Lg';
  var geojson = [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -87.6801948,
              42.0504851
              ]
            },
            "properties": {
              "name": "Campus Kitchens",
              "address": "1820 Chicago Ave",
              "city": "Evanston",
              "country": "United States",
              "postalCode": "60201",
              "state": "Illinois",
              "signup": "campus-kitchens.html",
              "id": "2CMnTuWThFAfEv"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -87.6819158,
              42.0506305
              ]
            },
            "properties": {
              "name": "Book Buddies",
              "address": "633 Clark St",
              "city": "Evanston",
              "country": "United States",
              "postalCode": "60201",
              "state": "Illinois",
              "signup": "book-buddies.html",
              "id": "1CFAf"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -87.6827512,             
              42.0470668
              ]
            },
            "properties": {
              "name": "North Shore Village",
              "address": "1603 Orrington",
              "city": "Evanston",
              "country": "United States",
              "postalCode": "60201",
              "state": "Illinois",
              "signup": "north-shore-village.html",
              "id": "4EMnTuWThFMoAfEv"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -87.6624459,
              41.9740293             
              
              ]
            },
            "properties": {
              "name": "TPAN",
              "address": "5050 N Broadway",
              "city": "Chicago",
              "country": "United States",
              "postalCode": "60201",
              "state": "Illinois",
              "signup": "tpan.html",
              "id": "5HTuEv"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
              -87.6611846,            
              41.966404
              ]
            },
            "properties": {
              "name": "Cornerstone Community Outreach",
              "address": "4628 N. Clifton Ave",
              "city": "Chicago",
              "country": "United States",
              "postalCode": "60201",
              "state": "Illinois",
              "signup": "cco.html",
              "id": "3CMnTuWThFMoAfEv"
            }
          }
          
        ]
      }
  ];
  var map = L.mapbox.map('map')
  .setView([42.0547956,-87.6779948], 15)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/afarkash/cjswpmxko0o8s1fp1gvw4or00'));


  map.scrollWheelZoom.enable();

  var listings = document.getElementById('listings');
  var locations = L.mapbox.featureLayer().addTo(map);

  locations.setGeoJSON(geojson);

  function setActive(el) {
    var siblings = listings.getElementsByTagName('div');
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].className = siblings[i].className
      .replace(/active/, '').replace(/\s\s*$/, '');
    }

    el.className += ' active';
  }

  locations.eachLayer(function(locale) {

    // Shorten locale.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = locale.feature.properties;

    // Each marker on the map.
    var popup = prop.name;

    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = prop.id;

    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';

    link.innerHTML = prop.name;
    var txt = "More Info";
    if (prop.name) {
      link.innerHTML += '<br /><small class="quiet">' + prop.address + '</small>';
      popup += '<br /><small class="quiet">' + prop.address + '</small>' + '<br />' + txt.link(prop.signup);
    }

    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city + '<br /> <button>' + txt.link(prop.signup) + '</button>';

    link.onclick = function() {
      setActive(listing);

      // When a menu item is clicked, animate the map to center
      // its associated locale and open its popup.
      map.setView(locale.getLatLng(), 16);
      locale.openPopup();
      return false;
    };

    // Marker interaction
    locale.on('click', function(e) {
      // 1. center the map on the selected marker.
      map.panTo(locale.getLatLng());

      // 2. Set active the markers associated listing.
      setActive(listing);
    });

    popup += '</div>';
    locale.bindPopup(popup);

    locale.setIcon(L.icon({
      iconUrl: 'Images/marker.svg',
      iconSize: [56, 56],
      iconAnchor: [28, 28],
      popupAnchor: [0, -34]
    }));
});

var clicked = true;
function filterlists(currentid){

	var current_id = currentid;
	//possibly chanege the name of the id to have clicked in it and then if there is clicked in the id return the normal listing
	var elements = document.getElementsByClassName('item');
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
