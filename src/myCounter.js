const myCounter = () => {
  let myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counterNovo = 2; counterNovo <= 3; counterNovo += 1) {
      myArray.push(counterNovo);
    }
  }
  return myArray;
};

module.exports = myCounter;
