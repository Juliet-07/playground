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
