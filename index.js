function StarRating(str) {
  const num = (Math.round(str * 2) / 2).toFixed(2); //rounds up the number to the nearest 0.5 and change it to 2 decimal places
  const outputarr = [];
  const images = {
    full: { name: "full", url: "full.jpg" },
    half: { name: "half", url: "half.jpg" },
    empty: { name: "empty", url: "empty.jpg" },
  }; //an object containing the image path and url
  for (i = 0; i < num.split(".")[0]; i++) outputarr.push(images.full.name); //looping through the value before the decimal and pushing full into outputarr
  if (num % 1 !== 0) outputarr.push(images.half.name); //checking if it has a decimal and pushing half into outputarr if present
  while (outputarr.length < 5) outputarr.push(images.empty.name); //complete the outputarr with empty
  return outputarr.join(" "); //join them with a space
}

console.log(StarRating(7));

// JAVASCRIPT HACKS
// 1) Resize an array
let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

console.log(array.length);

array.length = 4;

console.log(array.length);
console.log(array);

// 2) Flatten multidimensional array
let entries = [1, [2, 5], [6, 7], 9];
let flat_entries = [].concat(...entries);

console.log(flat_entries);

// 3) Getting the last item in the array

let ARRAY = [1, 2, 3, 4, 5, 6];
console.log(ARRAY.slice(-3));

// 4) Swap 2 variables without the third variable
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);

// 5) Merging two arrays by optimizing memory
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2))