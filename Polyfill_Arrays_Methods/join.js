Array.prototype.newJoin=function(seperator=','){
    let str='';
    for(let i=0;i<this.length;i++){
      str+= i < this.length-1 ? `${this[i]}${seperator}` : `${this[i]}`;
    }
    return str;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newJoin('-'));  //"1-2-3-4-5-6-8"