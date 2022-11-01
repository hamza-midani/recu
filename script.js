let numbrOfTerme = -1;
while (numbrOfTerme <= 0) {
  numbrOfTerme = parseInt(prompt("Enter the number of fibonaci sequence : "));
}
console.log("A fibonacci sequence is written as:");
fibonaciSequence = (numbrOfTerme) => {
  if (numbrOfTerme === 1) {
    return (arr = [0, 1]);
  } else {
    arr = fibonaciSequence(numbrOfTerme - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    console.log(...arr);
    return arr;
  }
};
console.log(fibonaciSequence(numbrOfTerme));
