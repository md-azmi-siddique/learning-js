var arrayNumber = [1,2,3,4,5,6,65,67,69,76,86,23,435,35,353,3,535,35,34,5];
console.log(arrayNumber)

arrayNumber[1] = 10;
console.log("Updated array change to index 1 = 10" + arrayNumber)

//finding the index number with indexOf() function.
var position = arrayNumber.indexOf(100);
if(position == -1){
    console.log("\n nothing inside \n")
}
else{
    console.log("index is: " + position)
}

//push operation
arrayNumber.push(100, 8900, 6354)
console.log("Pushing new element on the last to the array: " + arrayNumber)
console.log("length is after pushing: "+arrayNumber.length)

//pop operation
arrayNumber.pop()
console.log("Poping the last element: "+ arrayNumber)
console.log("length is after poping: "+arrayNumber.length)

//unshift operation - adding on front
arrayNumber.unshift(0, 200, 400)
console.log("Adding new element on the begining to the array: " + arrayNumber)
console.log("length is: "+arrayNumber.length)

//unshift operation - removing on front
arrayNumber.shift()
console.log("Removing an elemet from the begining of an array: "+ arrayNumber)
console.log("length is: "+arrayNumber.length)

//slice operation
//(starting position, till before last position)
var arrayNumber1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var newNumber = arrayNumber1.slice(2,3)
console.log('slices new number: '+newNumber)
