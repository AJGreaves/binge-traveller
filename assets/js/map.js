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

// Set markers

let california = L.marker([36.778259, -119.417931]).addTo(mymap);
let texas = L.marker([31.968599, -99.901810]).addTo(mymap);
let netherlands = L.marker([52.132633, 5.291266]).addTo(mymap);
let greece = L.marker([39.074207, 21.824312]).addTo(mymap);
let spain = L.marker([40.463669, -3.749220]).addTo(mymap);
let italy = L.marker([41.8719, 12.5674]).addTo(mymap);
let germany = L.marker([51.1657, 10.4515]).addTo(mymap);
let iceland = L.marker([64.9631, 19.0208]).addTo(mymap);
let brazil = L.marker([-14.2350, -51.9253]).addTo(mymap);
let slovakia = L.marker([48.6690, 19.6990]).addTo(mymap);
let romania = L.marker([45.9432, 24.9668]).addTo(mymap);
let hungary = L.marker([47.1625, 19.5033]).addTo(mymap);
let denmark = L.marker([56.2639, 9.5018]).addTo(mymap);
let sicily = L.marker([37.6000, 14.0154]).addTo(mymap);
let illinois = L.marker([40.6331, -89.3985]).addTo(mymap);
let moldova = L.marker([47.0105, 28.8638]).addTo(mymap);
let ontario = L.marker([51.2538, -85.3232]).addTo(mymap);
let southAfrica = L.marker([-30.5595, 22.9375]).addTo(mymap);
let ireland = L.marker([53.1424, 7.6921]).addTo(mymap);
let switzerland = L.marker([46.8182, 8.2275]).addTo(mymap);
let finland = L.marker([61.9241, 25.7482]).addTo(mymap);
let ukraine = L.marker([48.3794, 31.1656]).addTo(mymap);
let poland = L.marker([51.9194, 19.1451]).addTo(mymap);
let slovenia = L.marker([46.1512, 14.9955]).addTo(mymap);
let portugal = L.marker([39.3999, -8.2245]).addTo(mymap);
let england = L.marker([52.3555, 1.1743]).addTo(mymap);
let luxembourg = L.marker([49.8153, 6.1296]).addTo(mymap);
let sweden = L.marker([60.1282, 18.6435]).addTo(mymap);
let morocco = L.marker([31.7917, -7.0926]).addTo(mymap);
let france = L.marker([46.2276, 2.2137]).addTo(mymap);

// popup contents

california.bindPopup("<strong>California</strong><br>Alcatraz,<br>San Francisco").openPopup();
texas.bindPopup("<strong>Texas</strong>Austin,<br>Amarillo,<br>Dallas");
netherlands.bindPopup("<strong>Netherlands</strong><br>Amsterdam,<br>Eindhoven");
greece.bindPopup("<strong>Greece</strong>Athens,<br>Delphi");
spain.bindPopup("<strong>Spain</strong><br>Barcelona,<br>Bilbao");
italy.bindPopup("<strong>Italy</strong><br>Bay of Naples,<br>Milan");
germany.bindPopup("<strong>Germany</strong><br>Berlin");
iceland.bindPopup("<strong>Iceland</strong><br>Blue Lagoon,<br>Gullfos Falls,<br>Reykjavik");
brazil.bindPopup("<strong>Brazil</strong><br>Brasilia,<br>Ipanema Beach");
slovakia.bindPopup("<strong>Slovakia</strong><br>Bratislava");
romania.bindPopup("<strong>Romania</strong><br>Bucharest");
hungary.bindPopup("<strong>Hungary</strong><br>Budapest");
denmark.bindPopup("<strong>Denmark</strong><br>Copenhagen");
sicily.bindPopup("<strong>Sicily</strong><br>Catania");
illinois.bindPopup("<strong>Illinois</strong><br>Chicago");
moldova.bindPopup("<strong>Moldova</strong><br>Chisinau")
ontario.bindPopup("<strong>Ontario</strong><br>Toronto");
southAfrica.bindPopup("<strong>South Africa</strong><br>Cradle of Humankind,<br>Hartbeespoort,<br>Johannesburg,<br>Limpopo,<br>Lion Park");
ireland.bindPopup("<strong>Ireland</strong><br>Dublin");
switzerland.bindPopup("<strong>Switzerland</strong><br>Geneva");
finland.bindPopup("<strong>Finland</strong><br>Helsinki");
ukraine.bindPopup("<strong>Ukraine</strong><br>Kiev");
poland.bindPopup("<strong>Poland</strong><br>Kraków");
slovenia.bindPopup("<strong>Slovenia</strong><br>Lake Bled,<br>Ljubljana");
portugal.bindPopup("<strong>Portugal</strong><br>Lisbon");
england.bindPopup("<strong>England</strong><br>London");
luxembourg.bindPopup("<strong>Luxembourg</strong><br>Luxembourg City");
sweden.bindPopup("<strong>Sweden</strong><br>Malmo");
morocco.bindPopup("<strong>Morocco</strong><br>Marrakesh");
france.bindPopup("<strong>France</strong><br>Marseille");