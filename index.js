var myNames = ["mike", "june", "danny", "mike"];
myNames[0] = "rico";
myNameAges = [23, 43, 24, 53];
console.log("You are " + myNames[0] + " " + myNameAges[0]);

//Create a multiple-deminsional array
myArray = [[0, 9, 3],[32, 12, 43], 78, 53];
//pop method is use to get last or end value.
let thisPop = myArray.pop();
console.log(thisPop);
//shift method is used to remove the first element
console.log(myArray.shift());
//Using the unshift method
console.log(myArray.unshift(["Danny", "sammy"]));