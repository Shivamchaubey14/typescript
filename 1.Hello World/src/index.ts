// For each of these values, what type will be Typescript compiler infer

let a = 100; 
// number
let b = 'Coffee'; 
//string
let c = [true, false, false]; 
//boolean
let d = {age: 20};
// d: {age:20}
let e = [3];
//e = number[]
let f;
//f: any
let g = [];
//any
// • What are the compilation errors in each of the following code snippets?
let song: { 
 title: string,
 releaseYear: number
} = { title: 'My song' };
let prices = [100, 200, 300];
prices[0] = '$100'; 
function myFunc(a: number, b: number): number { };

// in song object releaseYear is not used. 
// in prices array which is a number we are trying to add string. 

// the function myFunc is returning a number but in the body of myFunct the return is not used.

