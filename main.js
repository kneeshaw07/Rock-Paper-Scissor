function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomVal = getRandomArbitrary(0,2);

console.log(randomVal);
