var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    // your code here
    let key1 = Object.keys(actual);//getting keys of "actual"
    let key2 = Object.keys(expected);//getting keys of "expeccted"
    let samekey = (key1,key2)=>{
        let same = 0;
        for(let i in key1){//checking if both the keys are same
            if(key1[i]==key2[i]){
                same++;
            }
        }
        if(same==key1.length){ return true;}else{false;}//if keys are same true will be returned else false will be returned
    };
    let val1 = Object.values(actual);//getting all the values of "actual"
    let val2 = Object.values(expected);//getting all the values of "expected"
    if((samekey(key1,key2))&&(samekey(val1,val2))){//checking if both the values are equal
        return `Passed`;
    }else{
        return `FAILED [my test] Expected {${key2[0]}:${expected.foo},${key2[1]}:${expected.bar}} but got {${key1[0]}:${actual.foo},${key1[1]}:${actual.bar}}`
    }
}
console.log(assertObjectsEqual(actual,expected,'detects that two objects are equal'));//printing out the output
