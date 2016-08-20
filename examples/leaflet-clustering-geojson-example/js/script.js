// Create map object, set center location, and zoom level
var map = L.map('map').setView([38.8964, -77.0329], 14);
// Get the icon
var icon = new L.Icon({iconUrl:'images/marker-icon.png'});

// Add layer for basemap
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution:"OpenStreetMap"
}).addTo(map);

// Add layer for markercluster
var markers = L.markerClusterGroup();

// Use jQuery to load date from GeoJSON file
$.getJSON('data/sample.geojson', function(data) {
  var geoJsonLayer = L.geoJson(data, {
    onEachFeature: function(feature, layer){
      layer.setIcon(icon);
    }
  });
  // Add geoJsonLayer to markercluster group
  markers.addLayer(geoJsonLayer);
  // Add the markercluster gropu to the map
  map.addLayer(markers);
});
