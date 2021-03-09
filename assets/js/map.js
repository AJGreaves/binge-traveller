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
let bosnia = L.marker([43.9159, 17.6791]).addTo(mymap);
let australia = L.marker([-25.2744, 133.7751]).addTo(mymap);
let louisiana = L.marker([30.9843, -91.9623]).addTo(mymap);
let quebec = L.marker([46.8139, -71.2080]).addTo(mymap);
let cyprus = L.marker([35.1264, 33.4299]).addTo(mymap);
let czechRepublic = L.marker([49.8175, 15.4730]).addTo(mymap);
let latvia = L.marker([56.8796, 24.6032]).addTo(mymap);
let bulgaria = L.marker([42.7339, 25.4858]).addTo(mymap);
let croatia = L.marker([45.1000, 15.2000]).addTo(mymap);
let newfoundland = L.marker([53.1355, -57.6604]).addTo(mymap);
let malta = L.marker([35.9375, 14.3754]).addTo(mymap);
let norway = L.marker([60.4720, 8.4689]).addTo(mymap);
let lithuania = L.marker([55.1694, 23.8813]).addTo(mymap);

// popup contents

california.bindPopup("<strong>California</strong><br>Alcatraz,<br>San Francisco,<br>UC Berkeley").openPopup();
texas.bindPopup("<strong>Texas</strong>Austin,<br>Amarillo,<br>Dallas,<br>San Antonio");
netherlands.bindPopup("<strong>Netherlands</strong><br>Amsterdam,<br>Eindhoven,<br>Rotterdam");
greece.bindPopup("<strong>Greece</strong>Athens,<br>Delphi,<br>Mykonos");
spain.bindPopup("<strong>Spain</strong><br>Barcelona,<br>Bilbao,<br>Seville");
italy.bindPopup(
    `<strong>Italy</strong><br>
    Bay of Naples,<br>
    Milan,<br>
    Mount Versuvius,<br>
    Naples,<br>
    Pisa,<br>
    Pompeii,<br>
    Rome`
    );
germany.bindPopup("<strong>Germany</strong><br>Berlin,<br>Munich");
iceland.bindPopup("<strong>Iceland</strong><br>Blue Lagoon,<br>Gullfos Falls,<br>Reykjavik");
brazil.bindPopup("<strong>Brazil</strong><br>Brasilia,<br>Ipanema Beach,<br>Rio de Janeiro");
slovakia.bindPopup("<strong>Slovakia</strong><br>Bratislava");
romania.bindPopup("<strong>Romania</strong><br>Bucharest");
hungary.bindPopup("<strong>Hungary</strong><br>Budapest");
denmark.bindPopup("<strong>Denmark</strong><br>Copenhagen");
sicily.bindPopup("<strong>Sicily</strong><br>Catania,<br>Mount Etna,<br>Taormina");
illinois.bindPopup("<strong>Illinois</strong><br>Chicago");
moldova.bindPopup("<strong>Moldova</strong><br>Chisinau")
ontario.bindPopup("<strong>Ontario</strong><br>Toronto,<br>Niagara Falls");
southAfrica.bindPopup(
    `<strong>South Africa</strong><br>
    Cradle of Humankind,<br>
    Hartbeespoort,<br>
    Johannesburg,<br>
    Limpopo,<br>
    Lion Park,<br>
    Pretoria,<br>
    Soweto,<br>
    Capetown`
    );
ireland.bindPopup("<strong>Ireland</strong><br>Dublin");
switzerland.bindPopup("<strong>Switzerland</strong><br>Geneva");
finland.bindPopup("<strong>Finland</strong><br>Helsinki");
ukraine.bindPopup("<strong>Ukraine</strong><br>Kiev,<br>Chernobyl");
poland.bindPopup("<strong>Poland</strong><br>Kraków,<br>Warsaw");
slovenia.bindPopup("<strong>Slovenia</strong><br>Lake Bled,<br>Ljubljana");
portugal.bindPopup("<strong>Portugal</strong><br>Lisbon");
england.bindPopup("<strong>England</strong><br>London");
luxembourg.bindPopup("<strong>Luxembourg</strong><br>Luxembourg City");
sweden.bindPopup("<strong>Sweden</strong><br>Malmo,<br>Stockholm");
morocco.bindPopup("<strong>Morocco</strong><br>Marrakesh");
france.bindPopup("<strong>France</strong><br>Marseille,<br>Paris");
bosnia.bindPopup("<strong>Bosnia</strong><br>Medjugorje,<br>Mostar");
australia.bindPopup("<strong>Australia</strong><br>Melbourne,<br>Sydney");
louisiana.bindPopup("<strong>Louisiana</strong><br>New Orleans");
quebec.bindPopup("<strong>Quebec</strong><br>Montreal");
cyprus.bindPopup("<strong>Cyprus</strong><br>Paphos");
latvia.bindPopup("<strong>Latvia</strong><br>Riga");
bulgaria.bindPopup("<strong>Bulgaria</strong><br>Sofia");
croatia.bindPopup("<strong>Croatia</strong><br>Split,<br>Zagreb");
newfoundland.bindPopup("<strong>Newfoundland</strong><br>St John's");
malta.bindPopup("<strong>Malta</strong><br>Valletta");
norway.bindPopup("<strong>Norway</strong><br>Oslo");
lithuania.bindPopup("<strong>Lithuania</strong><br>Vilnius");