/* write your myFind function body in the function below */

function myFind(arr, callback) {
  for (var i=0; i<arr.length; i++) {
    if (callback(arr[i], i, arr)){
      return arr[i];
    }
  }
}










// export this function (you can ignore this for now)
module.exports = myFind;
