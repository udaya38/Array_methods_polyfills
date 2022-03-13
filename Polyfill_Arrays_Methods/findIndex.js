Array.prototype.newFindIndex=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return i;
    }
    return -1;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newFindIndex((e) => e > 3));  //3