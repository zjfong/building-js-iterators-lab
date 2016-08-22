// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {

//  CODE INSIDE HERE   //
var list = [];
for(i=0; i<arr.length; i++){

  // callback(arr[i], i, arr);
  // if(return === true){
  //   list.push(return)
  // }

  var result = callback(arr[i], i, arr);
  if(result === true){
    list.push(arr[i]);
  }





  }
  return list;
  // console.log(result);
  // console.log(list);
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/






// export this function (you can ignore this for now)
module.exports = myFilter;
