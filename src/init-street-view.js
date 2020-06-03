var panorama;
function initialize() {
  //.4816806,3.3780323
  //var place_loc = {lat: 6.5294059, lng: 3.3929774};
  var place_loc = {lat: 6.4816806, lng: 3.3780323};

  // Set up the map
  var map = new google.maps.Map(document.getElementById('street-view'), {
    center: place_loc,
    zoom: 18,
    streetViewControl: false
  });

  /* Set up markers on the map
  var artMarker = new google.maps.Marker({
    position: {lat: 6.5294059, lng: 3.3929992},
    map: map,
    icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00',
    title: 'Local Art'
});
  var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: place_loc,
    radius: 10
  });*/

panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      position: place_loc,
      pov: {heading: 100, pitch: 10},
      zoom: 1
    });
}