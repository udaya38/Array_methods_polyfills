Array.prototype.newFill=function(element,startIndex=0, endIndex=this.length){
    if(startIndex<0) startIndex+=this.length;
    if(endIndex<0) endIndex+=this.length;
    for(let i=startIndex;i<endIndex;i++){
        this[i]=element;
    }
    return this;
}

const arr=[1,2,3,4,5,6,8];
console.log(arr.newFill(90,1,3));  //[1, 90, 90, 4, 5, 6, 8]