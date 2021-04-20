var obj = {name: '“ISRO”', age: 35, role: '“Scientist”'};
function convertListToObject(obj) {
 // your code here
 let keys = Object.keys(obj);
 let array = [];
 for(let i in obj){
     let index=0;
     let list = [];
     list.push(keys[index]);
     list.push(obj[i]);
     array.push(list);
     index++;
 }
 console.log(array);
}
convertListToObject(obj);