/* write your myReduce function body in the function below */

function myReduce(arr, callback, initialValue) {
  if (arr.length === 0) {
    return initialValue;
  }

  var previous_value = initialValue ? callback(initialValue, arr[0], 0, arr) : arr[0];

  var len = arr.length-1;
  for(var i=1; i<=len; i++){
    previous_value = callback(previous_value, arr[i], i, arr)
  }

  return previous_value;
}










// export this function (you can ignore this for now)
module.exports = myReduce;
