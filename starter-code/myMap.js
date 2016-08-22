// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map
//  CODE INSIDE HERE   //
function myMap(arr, callback) {
  var list = [];
  for(i=0; i<arr.length; i++){
    var result = callback(arr[i], i, arr);
    list.push(result);
  }

  return list;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
