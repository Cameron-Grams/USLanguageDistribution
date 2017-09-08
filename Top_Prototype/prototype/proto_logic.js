mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZXJvbjQzIiwiYSI6ImNqNzF1czNnajA2dmgzM24xNGVoNmltbnQifQ.5uzTFIefwgSiHHfAjk4azg';

var displayObj = {
  totalPopulation: {
    style: 'mapbox://styles/cameron43/cj78gbiof778h2srs1qkjh4cn',
    layers: [ '0 - 600,000', '600,000 - 900,000', '900,000 - 1,500,000', '1,500,000 - 3,000,000', '3,000,000 - 6,000,000', '6,000,000 - 9,000,000', '9,000,000 - 12,000,000', '12,000,000 - 21,000,000', '21,000,000 - 30,000,000', '30,000,000 - 40,000,000' ],  
    colors: [ '#d8d7f7', '#c4c2f9', '#a9a6f4', '#8985f2', '#6d68ed', '#524ce8', '#342edb', '#1c16ba', '#0b078c', '#030066' ], 
    displayType: 'statePopulation',
    descriptor: ' people in the state '
    },
  spanish: {
    style: 'mapbox://styles/cameron43/cj77s63px6ktq2rtezsllwonq',
    layers: [ '0 - 10000', '10000 - 50000', '50000- 100000', '100000 - 500000', '500000 - 1000000', '1000000 - 3000000', '3000000 - 6000000', '6000000 - 8000000', '8000000 - 10000000' ], 
    colors: [ '#e0cccc', '#c9afaf', '#dbb6b6', '#cc9494', '#a86a6a', '#a85252', '#b23a3a', '#af2323', '#a51212', '#930202' ],  
    displayType: 'spanish',
    descriptor: ' people speak spanish ' 
    }

};

let language = $( '#languageSelector').val();

function loadNewMap( language ){



};


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/cameron43/cj77s63px6ktq2rtezsllwonq',
    center: [ -101.404, 48.829 ],
    zoom: 2.0
});

map.on( 'load', function(){
//    var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
//    var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
    var layers = [ '0 - 10000', '10000 - 50000', '50000- 100000', '100000 - 500000', '500000 - 1000000', '1000000 - 3000000', '3000000 - 6000000', '6000000 - 8000000', '8000000 - 10000000' ]; 
    
    var colors = [ '#e0cccc', '#c9afaf', '#dbb6b6', '#cc9494', '#a86a6a', '#a85252', '#b23a3a', '#af2323', '#a51212', '#930202' ];  

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      }


});

map.on('mousemove', function(e) {
    var states = map.queryRenderedFeatures(e.point, {
      layers: [ 'spanish' ]
    });
  
    if (states.length > 0) {
      document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.spanish + '</strong> people speak spanish in ' + states[0].properties.name + '</em></p>';
    } else {
      document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
    }
  });

map.getCanvas().style.cursor = 'default';

function main(){
  console.log( 'in main' );
  loadNewMap( language );
};


$( main );