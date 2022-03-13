Array.prototype.newSome=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) return true;
    }
    return false;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newSome((elem) => elem<5));  //true