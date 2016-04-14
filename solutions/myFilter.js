/* write your myFilter function body in the function below */

function myFilter(arr, callback) {
  var outputArray = [];
  for (var i=0; i<arr.length; i++) {
    if (callback(arr[i], i, arr)){
      outputArray.push(arr[i]);
    }
  }
  return outputArray;
}










// export this function (you can ignore this for now)
module.exports = myFilter;
