var a = [4,2,5,3,7,1]
var res = [];

for (i =0; i<a.length; i++) {
    if (res < a[i]) {
        res.push(a[i])
    }
}

a.sort((a,b) => {
    return a-b;
})

console.log(a)

// function bubbleSort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i ++) {
//         if (array[i - 1] < array[i]) {
//           done = false;
//           var tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }
  
//     return array;
//   }


// array = [4,2,5,3,7,1]
// console.log(array)
// bubbleSort(array)
// console.log(array)