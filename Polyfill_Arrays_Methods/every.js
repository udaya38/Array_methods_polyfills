Array.prototype.newEvery=function(callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i],i,this)) return false;
    }
    return true;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newEvery((elem) => elem<5));  //false