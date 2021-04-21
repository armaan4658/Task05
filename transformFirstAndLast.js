var arr = ['“GUVI”', '“I”', '“am”', '“a geek”'];
function transformFirstAndLast(arr) {
    let firstElement=0;
    let lastElement=arr.length-1;
    let key=arr[firstElement].split("");
    let newkay=key.filter((element)=>{
        return element!='“'&&element!='”';
    });
    let newObject={};
    newObject[newkay.join("")]=arr[lastElement];//adding key:value to "newObject"
    return newObject;
}
console.log(transformFirstAndLast(arr));//printing out the output
