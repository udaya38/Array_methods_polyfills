Array.newIsArray=function(arr){
    return typeof arr === 'object' && !!arr.length;
}

const arr=[1,2,3,4,5,6,7,8];
console.log(Array.newIsArray(arr));  //true