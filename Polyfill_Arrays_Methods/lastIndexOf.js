Array.prototype.newLastIndexOf=function(num){
    for(let i=this.length-1;i>=0;i--){
        if(this[i] === num) return i;
    }
    return -1;
}

const arr=[1,4,3,4,5,6,8];
console.log(arr.newLastIndexOf(4))  //3