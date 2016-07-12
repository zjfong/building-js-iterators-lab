/* write your myMap function body in the function below */

function myMap(arr, callback) {
  var output = [],
      len = arr.length-1;

  for(var i=0; i<=len; i++){
    output.push(callback(arr[i], i, arr));
  }

  return output;
}











// export this function (you can ignore this for now)
module.exports = myMap;
