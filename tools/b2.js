function builder( object, array ){
  let results = object;
  let itemArray = results.features;
  for ( let i = 0; i < array.length; i++ ){
//    console.log( 'state arrary is  ', array[ i ] );
//    console.log( 'geo array is ', itemArray[ i ].properties.name );
    if ( array[ i ][ 0 ] === itemArray[ i ].properties.name ){
      itemArray[ i ].properties.spanish = array[ i ][ 1 ];
    };
  };
  console.log( results );
  return results; 
};

builder( firstObj, firstArray );




