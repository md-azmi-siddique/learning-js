var arrayNumber = [1,2,3,4,5];
console.log(arrayNumber)

arrayNumber[1] = 10;

//finding the index number with indexOf() function.
var position = arrayNumber.indexOf(100);
if(position == -1){
    console.log("\n nothing inside \n")
}
else{
    console.log("index is: " + position)
}

//push operation
arrayNumber.push(100)
console.log(arrayNumber)
console.log("length is: "+arrayNumber.length)

//pop operation
arrayNumber.pop()
console.log(arrayNumber)
console.log("length is: "+arrayNumber.length)

//unshift operation - adding on front
arrayNumber.unshift(0, 200, 400)
console.log(arrayNumber)
console.log("length is: "+arrayNumber.length)

//unshift operation - removing on front
arrayNumber.shift()
console.log(arrayNumber)
console.log("length is: "+arrayNumber.length)