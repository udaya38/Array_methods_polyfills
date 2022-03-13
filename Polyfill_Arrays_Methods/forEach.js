Array.prototype.newForEach=function(callback){
    for(let i=0;i<this.length;i++){
       callback(this[i],i,this);
   }

}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newForEach((e) => console.log(e)));  //1,2,3,4,5,6,8