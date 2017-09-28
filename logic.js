mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZXJvbjQzIiwiYSI6ImNqNzF1czNnajA2dmgzM24xNGVoNmltbnQifQ.5uzTFIefwgSiHHfAjk4azg';

var displayObj = {
  totalPopulation: {
    intro: "Total US Population 323.1 million",
    style: 'mapbox://styles/cameron43/cj78gbiof778h2srs1qkjh4cn',
    layers: [ '0 to 599,999', '600,000', '900,000', '1,500,000', '3,000,000', '6,000,000', '9,000,000', '12,000,000', '21,000,000', '30,000,000' ],  
    colors: [ '#d8d7f7', '#c4c2f9', '#a9a6f4', '#8985f2', '#6d68ed', '#524ce8', '#342edb', '#1c16ba', '#0b078c', '#030066' ], 
    displayType: 'populations',
    descriptor: ' live in ',
    role: 'statePopulation'
    },
  spanish: {
    intro: "37,458,470 Spanish Speakers in US",
    style: 'mapbox://styles/cameron43/cj77s63px6ktq2rtezsllwonq',
    layers: [ '0 to 10,000', '10,000', '50,000', '100,000', '500,000', '1,000,000', '3,000,000', '6,000,000', '8,000,000 +' ], 
    colors: [ '#e0cccc', '#c9afaf', '#dbb6b6', '#cc9494', '#a86a6a', '#a85252', '#b23a3a', '#af2323', '#a51212', '#930202' ],  
    displayType: 'spanish',
    descriptor: ' speak Spanish ',
    role: 'spanish' 
    },
  swedish: {
    intro: "55,735 Swedish Speakers in the US ",
    style: 'mapbox://styles/cameron43/cj7dws4sd19nm2slcbfyrhhig',
    layers: [ '0', '1 to 100', '100' , '200', '300', '400', '500', '600', '700', '800 +' ],
    colors: [ '#040005', '#f3e3f7', '#e8cbef', '#d3aadd', '#b47fc1', '#9d5bad', '#9041a3', '#7b2c8e', '#691a7c', '#620b77' ],
    displayType: 'swedish',
    descriptor: ' speak Swedish ',
    role: 'swedish'
  },
  chinese: {
    intro: "1,867,485 Chinese Speakers in US",
    style: 'mapbox://styles/cameron43/cj7e0z1z71dqp2spkukfxhyoy',
    layers: [ '0 to 1200', '2,500', '5,000', '8,000', '15,000', '20,000', '35,000', '50,000', '70,000', '100,000 +' ],
    colors: [ '#edecdc', '#d6d4b8', '#cecca1', '#ccc98c', '#c1bd70', '#c1bd60', '#c6c253', '#c1bd43', '#bab523', '#7c7802' ],
    displayType: 'chinese',
    descriptor: ' speak Chinese ',
    role: 'chinese'
  },
  german: {
    intro: "1,063,275 German Speakers in US",
    style: 'mapbox://styles/cameron43/cj7e3fe5u1g852sohb8hm8sn0',
    layers: [ '0 to 2,500', '2,500', '4,500', '7,000', '9,000', '13,000' , '16,000', '25,000', '35,000', '50,000 +' ],  
    colors: [ '#d7e0d8', '#c7dbc9', '#afd6b3', '#95d69c', '#75c67e', '#5ebc68', '#46af51', '#30a03b', '#1f962b', '#077a12' ],
    displayType: 'german',
    descriptor: ' speak German ',
    role: 'german'
  }  

};

//transition function to initiate language layer display
function main(){
  $( '#introModal' ).css( "display", "none" );
  showGuideInfo();
  setTimeout( function(){ 
    $( '#waitImage' ).css( 'display', 'none' );
  }, 1500 );
  let language = $( '#js-languageSelector' ).val();  //had to move the selector here in order to pass the value
  loadNewMap( language );
};

function hideGuideInfo(){
  $( '.js-operationalView' ).hide();
}

function showGuideInfo(){
  $( '.js-operationalView' ).show();
}

//function that diplays the initial instruction with the modal
function introduction(){
  $( '#introModal' ).css( 'display', 'block' );
  hideGuideInfo();
}

//loads map by calling language specific map layer from the API
function loadNewMap( language ){
  $( '#map' ).empty();
  map = new mapboxgl.Map( {
    container: 'map', 
    style: displayObj[ language ].style,
    center: [ -101.404, 48.829 ],
    zoom: 2.0
  } );
  loadKey( language );
  readPosition( map, language );
};

//builds the key specific to the language onto the map
function loadKey( language ){
  let layers = displayObj[ language ].layers;
  let colors = displayObj[ language ].colors;
  $( '#legend' ).empty();
  $( '#legend' ).append( '<h3>Population</h3>' );
  $( '#js-intro' ).html( displayObj[ language ].intro );

//  var colorKeyTitle = document.createElement( 'h3' );
//  colorKeyTitle.innerHTML = "Population";
//  legend.appendChild( colorKeyTitle );

  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];

/*    
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;
  
    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);  //not clear how this selects? 
*/
    let colorSpan = $( '<span>color span</span>' );

    let valueSpan = $.parseHTML( `${ layer }` );
    
    $( '#legend' ).append( `<div>${ colorSpan } ${ valueSpan }</div>`)
  }
}

//mousehandler that reads the data from the map layer specific to the state's language speakers
function readPosition( map, language ){
  let role = displayObj[ language ].role;
  let purpose = displayObj[ language ].descriptor;
  let states, stateNumber; 

  map.on('mousemove', function(e) {

    var states = map.queryRenderedFeatures(e.point, {
      layers: [ displayObj[ language ].displayType ]
    });

    if ( states[ 0 ] ){
      stateNumber = states[0].properties[ role ];
    }

    if (states.length > 0) {
      document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>' +  stateNumber.toLocaleString('en-US') + '</strong> people ' + purpose + ' in ' + states[0].properties.name + '</em></p>';
    } else {
      document.getElementById('pd').innerHTML = '<p>Hover over a state for details</p>';
    }
  });
  map.getCanvas().style.cursor = 'default';
};

//event handler to remove the modal and begin
$( '.close' ).on( 'click', main );

//event handler that calls the main() to repopulate the map with a new language
//after a new language is selected
$( '#js-languageSelector' ).change( main );

$( introduction );
// $( main );