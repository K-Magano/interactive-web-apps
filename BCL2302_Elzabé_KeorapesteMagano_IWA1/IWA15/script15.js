// scripts.js

const data = {//!Name: Array literal uses [ **index**] not {}
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
//Deconstructing array  
const { first = 1 } = data.first || {} //join arrays? using concat
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}

const result = []

const extractBiggest = () => {
	if (first[-1] > second[-1]) { //-1 looking for the last key in array
		return first // try indexof() , find(), findLast(), findIndex/ findLastIndex
	}

	if (third[-1] < 1) { //try sort()
		return second
	}
	
	return third
}


// Only edit above

result.push(extractBiggest()) //.push adds a key to the end of the array
result.push(extractBiggest()) //.pop remove last key from array
result.push(extractBiggest()) //.shit like .pop but first 
result.push(extractBiggest()) //.unshift like pish but for first
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)