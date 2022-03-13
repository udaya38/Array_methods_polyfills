function flatten(flatArray, depth) {
	if (depth === -1) {
		outArray.push(flatArray);
		return;
	}
	for (let arr of flatArray) {
		if (Array.isArray(arr)) {
			flatten(arr, depth - 1)
		} else {
			outArray.push(arr);
		}
	}
}

let outArray=[];
flatten([[[0], [1]], [[2], [3]], [[4], [5]]], 1);
console.log(outArray) //[[0],[1],[2],[3],[4],[5]]  -->one depth flatten

flatten([0, 1, 2, [[[3, 4]]]], 2);
console.log(outArray) //[0, 1, 2,[3, 4]]  -->two depth flatten

//If we pass depth value greater than the nested array depth, then it will flatten all the nested arrays.