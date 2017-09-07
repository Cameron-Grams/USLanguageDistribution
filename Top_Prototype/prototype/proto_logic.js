mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZXJvbjQzIiwiYSI6ImNqNzF1czNnajA2dmgzM24xNGVoNmltbnQifQ.5uzTFIefwgSiHHfAjk4azg';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/cameron43/cj77s63px6ktq2rtezsllwonq',
    center: [ -103.103, 49.957 ],
    zoom: 2.8 
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

// map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);

// map.fitBounds( [ [ -115.202, 47.795 ], [ -47.63671875, 52.696361 ]])
// 2.8-115.202,47.795 will include Hawaii 