Array.newIsArray=function(arr){
    return Object.prototype.toString.call(arr) === '[object Array]';
}

const arr=[1,2,3,4,5,6,7,8];
console.log(Array.newIsArray(arr));  //true
