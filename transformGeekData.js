var arr= [[['“firstName”', '“Vasanth”'], ['“lastName”', '“Raja”'], ['“age”', 24], ['“role”', '“JSWizard”']], [['“firstName”', '“Sri”'], ['“lastName”', '“Devi”'], ['“age”', 28], ['“role”', '“Coder”']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 //Your code
 for (let i in arr){
     let obj = {};
     for (let j in arr[i]){
         obj[arr[i][j][0]]=arr[i][j][1];
     }
     tranformEmployeeList.push(obj);
 }
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));