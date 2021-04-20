var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    // your code here
    let key1 = Object.keys(actual);
    let key2 = Object.keys(expected);
    let samekey = (key1,key2)=>{
        let same = 0;
        for(let i in key1){
            if(key1[i]==key2[i]){
                same++;
            }
        }
        if(same==key1.length){ return true;}else{false;}
    };
    let val1 = Object.values(actual);
    let val2 = Object.values(expected);
    if((samekey(key1,key2))&&(samekey(val1,val2))){
        return `Passed`;
    }else{
        return `FAILED [my test] Expected {${key2[0]}:${expected.foo},${key2[1]}:${expected.bar}} but got {${key1[0]}:${actual.foo},${key1[1]}:${actual.bar}}`
    }
}
console.log(assertObjectsEqual(actual,expected,'detects that two objects are equal'));
