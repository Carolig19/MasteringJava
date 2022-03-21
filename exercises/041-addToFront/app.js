function addToFront(arr, element) {
return arr = arr.unshift(element)
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift