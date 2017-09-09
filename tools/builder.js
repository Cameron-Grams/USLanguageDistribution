let firstObj = [ { 
  firstProp: "something first",
  secondProp: {
    inSecond: "first inside second",
    secondInSecond: "second prop inside"
  },
  thirdProp: "last prop"
},
{  firstProp: "something first",
  secondProp: {
    inSecond: "second inside second",
    secondInSecond: "second prop inside"
  },
  thirdProp: "last prop"
} ];

let firstArray = [
  [ 'first inside second', 'target one' ],
  [ 'second inside second', 'target two' ]
];

function builder( object, array ){
  for ( let i = 0; i < array.length; i++ ){
    console.log( 'in array at ', i );
    let item = array[ i ];

    for ( let j = 0; j < object.length; j++ ){
      let { secondProp } = object[ j ];
//      console.log( secondProp.inSecond );

      if ( secondProp.inSecond === item[ 0 ] ){
        object[ j ].fourthProp = item[ 1 ];
      }

    }; 
// find the object where obj.secondProp.insecond is equal to item[ 0 ] then modify obj to have a new property with arry[ 1 ]
  };
  return object;
};

let k = builder( firstObj, firstArray );
console.log( k );




