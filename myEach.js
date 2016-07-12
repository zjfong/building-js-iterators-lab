/* write your myEach function body in the function below */

function myEach(arr, callback) {
  var len = arr.length-1;
  for(var i=0; i<=len; i++){
    callback(arr[i], i, arr);
  }
}










// export this function (you can ignore this for now)
module.exports = myEach;
