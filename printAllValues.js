var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

function printAllValues(obj) {
   let list = [];
   for (let i in obj){
       list.push(obj[i]);
   }
   console.log(list);
}
printAllValues(obj);
