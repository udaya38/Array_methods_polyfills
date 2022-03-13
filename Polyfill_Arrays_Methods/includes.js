Array.prototype.newIncludes=function(num, startIndex=0){
    for(let i=startIndex;i<this.length;i++){
       if(this[i] === num) return true;
    }
    return false;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newIncludes(4))  //3