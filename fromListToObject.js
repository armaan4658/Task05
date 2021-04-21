var arr = [['“make”', '“Ford”'], ['“model”', '“Mustang”'], ['“year”', 1964]];
function fromListToObject(arr) {
 var newObject = {};//creating new object
 for(let i in arr){
     newObject[arr[i][0]]=arr[i][1];//adding key:value to the object
 }
 return newObject;
}
console.log(fromListToObject(arr));//printing out the output
