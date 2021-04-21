var obj = {name: '“ISRO”', age: 35, role: '“Scientist”'};
function convertListToObject(obj) {
 // your code here
 let keys = Object.keys(obj);//getting all the keys of "obj"
 let array = [];//creating an empty array
 for(let i in obj){//using for in loop to iterate through the obj
     let index=0;
     let list = [];
     list.push(keys[index]);//pushing key
     list.push(obj[i]);//pushing value
     array.push(list);
     index++;
 }
 console.log(array);//printing out the output
}
convertListToObject(obj);//calling function
