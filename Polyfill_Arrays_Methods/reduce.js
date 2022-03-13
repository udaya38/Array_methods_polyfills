Array.prototype.newReduce = function(callback, initialValue = undefined) {
    if (!initialValue) {
        let accum = this[0];
        for (let i = 1; i < this.length; i++) {
            accum = callback(accum, this[i], i, this);
        }

        return accum;
    } else {
        let accum = initialValue;
        for (let i = 0; i < this.length; i++) {
            accum = callback(accum, this[i], i, this);
        }

        return accum;
    }
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.newReduce((acc, cur) => acc + cur));  //21