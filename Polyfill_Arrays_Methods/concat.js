Array.prototype.newConcat=function(...newArray){
    for(let i=0;i<newArray.length;i++){
        const len = this.length;
        for(let j=0;j<newArray[i].length;j++){
          this[len+j]=newArray[i][j];
        }
    }
    return this;
}

const arr1=[1,2,3,4,5,6,8];
const arr2=[34,45,65];
const arr3=[76,8,4];
console.log(arr1.newConcat(arr2,arr3)); //[1, 2, 3, 4, 5, 6, 8, 34, 45, 65, 76, 8, 4]