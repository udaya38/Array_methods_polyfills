Array.prototype.newMap=function(callback){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newMap((e) => e+2));  //[3, 4, 5, 6, 7, 8, 10]