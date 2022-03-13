Array.prototype.newFilter=function(callback){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)) newArray[newArray.length]=this[i];
    }
    return newArray;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newFilter((e) => e%2 === 0));  //[2, 4, 6, 8]