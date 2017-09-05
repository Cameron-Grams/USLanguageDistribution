let data = [["NAME","EST","LANLABEL","LAN","state"],
["Alabama","151385","Spanish","625","01"],
["Alaska","22425","Spanish","625","02"],
["Arizona","1230730","Spanish","625","04"],
["Arkansas","143540","Spanish","625","05"],
["California","10105385","Spanish","625","06"],
["Colorado","565060","Spanish","625","08"],
["Connecticut","371025","Spanish","625","09"],
["Delaware","57255","Spanish","625","10"],
["District of Columbia","44455","Spanish","625","11"],
["Florida","3640735","Spanish","625","12"],
["Georgia","709565","Spanish","625","13"],
["Hawaii","25490","Spanish","625","15"],
["Idaho","114560","Spanish","625","16"],
["Illinois","1570810","Spanish","625","17"],
["Indiana","277380","Spanish","625","18"],
["Iowa","113175","Spanish","625","19"],
["Kansas","195105","Spanish","625","20"],
["Kentucky","104470","Spanish","625","21"],
["Louisiana","150415","Spanish","625","22"],
["Maine","11600","Spanish","625","23"],
["Maryland","378010","Spanish","625","24"],
["Massachusetts","502615","Spanish","625","25"],
["Michigan","270695","Spanish","625","26"],
["Minnesota","192115","Spanish","625","27"],
["Mississippi","65295","Spanish","625","28"],
["Missouri","148040","Spanish","625","29"],
["Montana","13930","Spanish","625","30"],
["Nebraska","119505","Spanish","625","31"],
["Nevada","517935","Spanish","625","32"],
["New Hampshire","26815","Spanish","625","33"],
["New Jersey","1277000","Spanish","625","34"],
["New Mexico","553050","Spanish","625","35"],
["New York","2705225","Spanish","625","36"],
["North Carolina","658940","Spanish","625","37"],
["North Dakota","9190","Spanish","625","38"],
["Ohio","241650","Spanish","625","39"],
["Oklahoma","224325","Spanish","625","40"],
["Oregon","319160","Spanish","625","41"],
["Pennsylvania","525220","Spanish","625","42"],
["Rhode Island","109455","Spanish","625","44"],
["South Carolina","195870","Spanish","625","45"],
["South Dakota","16215","Spanish","625","46"],
["Tennessee","232395","Spanish","625","47"],
["Texas","6983380","Spanish","625","48"],
["Utah","245945","Spanish","625","49"],
["Vermont","6180","Spanish","625","50"],
["Virginia","506650","Spanish","625","51"],
["Washington","521720","Spanish","625","53"],
["West Virginia","18310","Spanish","625","54"],
["Wisconsin","243560","Spanish","625","55"],
["Wyoming","25530","Spanish","625","56"],
["Puerto Rico","3291955","Spanish","625","72"]];

function findMaxAndMin( arr ){
  let min = 9000000000;
  let max = 0;

  let minResults = {};
  let maxResults = {};

  let results = [];

  for ( let i = 0; i < arr.length; i++ ){
    if ( arr[ i ][ 1 ] < min ){
      min = arr[ i ][ 1 ];
      minResults = {};
      minResults[ arr[ i ][ 0 ] ] = arr[ i ][ 1 ];
    };
    if ( arr[ i ][ 1 ] > max ){
      max = arr[ i ][ 1 ];
      maxResults = {};
      maxResults[ arr[ i ][ 0 ] ] = arr[ i ][ 1 ];
    };
  };
  results.push( minResults );
  results.push( maxResults );
  return results;

};

let g = findMaxAndMin( data );
console.log( g );

