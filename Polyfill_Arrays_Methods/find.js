Array.prototype.newFind=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return this[i];
    }
    return;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newFind((e) => e > 3));  //4