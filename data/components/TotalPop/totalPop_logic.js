mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZXJvbjQzIiwiYSI6ImNqNzF1czNnajA2dmgzM24xNGVoNmltbnQifQ.5uzTFIefwgSiHHfAjk4azg';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/cameron43/cj78gbiof778h2srs1qkjh4cn',
    center: [ -103.103, 49.957 ],
    zoom: 2.8 
});

map.on( 'load', function(){
//    var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
//    var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];
    var layers = [ '0 - 600,000', '600,000 - 900,000', '900,000 - 1,500,000', '1,500,000 - 3,000,000', '3,000,000 - 6,000,000', '6,000,000 - 9,000,000', '9,000,000 - 12,000,000', '12,000,000 - 21,000,000', '21,000,000 - 30,000,000', '30,000,000 - 40,000,000' ];  
    var colors = [ '#d8d7f7', '#c4c2f9', '#a9a6f4', '#8985f2', '#6d68ed', '#524ce8', '#342edb', '#1c16ba', '#0b078c', '#030066' ]; 
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
      layers: [ 'populations' ]
    });
  
    if (states.length > 0) {
      document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' + states[0].properties.statePopulation + '</strong> people in' + states[0].properties.name + '</em></p>';
    } else {
      document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
    }
  });

map.getCanvas().style.cursor = 'default';

// map.fitBounds([[-133.2421875, 16.972741], [-47.63671875, 52.696361]]);

// map.fitBounds( [ [ -115.202, 47.795 ], [ -47.63671875, 52.696361 ]])
// 2.8-115.202,47.795 will include Hawaii 