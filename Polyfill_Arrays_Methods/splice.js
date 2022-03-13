Array.prototype.newSplice = function(start, deleteCount = 0, ...items) {
    let startArray = [];
    let endArray = [];
    if (start > this.length) return this;
    for (let i = 0; i < this.length; i++) {
        if (i < start) {
            startArray.push(this[i]);
        }
        if (i >= start + deleteCount) {
            endArray.push(this[i]);
        }
    }
    startArray = [...startArray, ...items, ...endArray];
    this.length = startArray.length;
    for (let i = 0; i < startArray.length; i++) {
        this[i] = startArray[i];
    }
    return this;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.newSplice(2, 4, 'parrot', 'anemone', 'blue'));