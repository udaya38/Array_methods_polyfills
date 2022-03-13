Array.newFrom=function(newArray,callback){
    if(typeof newArray === 'string') newArray=[...newArray];
    let outArray = [];
    for(let i=0;i<newArray.length;i++){
       outArray.push(callback(newArray[i],i));
   }
    return outArray;

}

const arr=['h','j','g'];
console.log(Array.newFrom(arr,(e) => e+"!"));  //['h!', 'j!', 'g!']