Array.prototype.newIndexOf=function(num){
    for(let i=0;i<this.length;i++){
        if(this[i] === num) return i;
    }
    return -1;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newIndexOf(4))  //3	