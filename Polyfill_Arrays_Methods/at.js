Array.prototype.newAt=function(num){
    return num >=0 ? this[num] : this[this.length+num];
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newAt(-2))  //6