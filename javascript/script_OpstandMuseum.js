let mapPlacementElementName = 'mapOpstandMuseum';
let xCoords = 52.23281;
let yCoords = 20.981011;
let popupMessage = "Het Opstand van Warsaw Muzeum ";

// adding map to ' Detail_OpstandMuzeum '
// 'mapPlacementName' is het desired html element where the map will be placed
// 'xCoords' & 'yCoords' shows the place on the map
let addMap = L.map(mapPlacementElementName).setView([xCoords,yCoords ], 12);
    
 //adding 'tileLayer' to the added map Area 'addMap'
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVja3l3YXN0YWtlbiIsImEiOiJja2poOTdkaGwwemVuMzFudmt2dnEyOXpsIn0.tF4UFKwHvMHYKouhdOVaOA'
}).addTo(addMap);

//Adding the arrow pointing to the location 
let marker = L.marker([xCoords, yCoords]).addTo(addMap);

//Adding a Popup above the arrow with the 
marker.bindPopup(popupMessage);