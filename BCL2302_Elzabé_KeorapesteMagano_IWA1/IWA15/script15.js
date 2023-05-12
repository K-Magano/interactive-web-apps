const data = {  // an object with nested arrays
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

//Deconstructing an array  

  const [_, first] = data.lists.find(([key]) => key === 'first') || [, []];
  const [__, second] = data.lists.find(([key]) => key === 'second') || [, []];
  const [___, third] = data.lists.find(([key]) => key === 'third') || [, []];
  
  const result = [];
  //function to find the last element of the array with the largest number 
  const extractBiggest = () => {
	const firstLast = first[first.length - 1];
	const secondLast = second[second.length - 1];
	const thirdLast = third[third.length - 1];
  
	if (firstLast >= secondLast && firstLast >= thirdLast) {
	  return first.pop();
	}
  
	if (secondLast >= firstLast && secondLast >= thirdLast) {
	  return second.pop();
	}
  
	return third.pop();
  };
  
  // Only edit above
  
  for (let i = 0; i < 15; i++) {
	result.push(extractBiggest());
  }
  
  console.log(...result);
//!expected outcome [10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]

//!I get [10 12 14 5 7 13 11 15 1 3 9]
// Only edit above

result.push(extractBiggest()) //.push adds a key to the end of the array
result.push(extractBiggest()) //.pop remove last key from array
result.push(extractBiggest()) //.shift like .pop but first 
result.push(extractBiggest()) //.unshift like push but for first
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