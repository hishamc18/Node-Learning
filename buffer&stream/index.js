const buffer = new Buffer.from("Hisham")

buffer.write('goat') // here goat replace the letters Hish from Hisham, bcz thois buffer have only the size of 6

console.log(buffer.toJSON());  //character code
console.log(buffer); // unicode
console.log(buffer.toString()); //Hisham

