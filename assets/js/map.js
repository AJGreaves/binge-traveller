// Set which part of the world the map loads on, and the zoom level
let mymap = L.map('map').setView([52.856, 5.545], 2);

// Builds map with access token
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29kZWluc3RpdHV0ZSIsImEiOiJja20xdnZ3d2cwM2RnMnBvejhvb2RiNHFpIn0.4b-36pNR0ECgagXmeoYwVg', {
    attribution: false,
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);