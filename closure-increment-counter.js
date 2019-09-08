const ic = myClosure(4);

console.log(ic());
console.log(ic());
console.log(ic());
console.log(ic());
console.log(ic());
console.log(ic());

function myClosure(startingCount) {
    startingCount = startingCount && typeof startingCount === 'number' ?
      startingCount : 0;
    return function() {
        return startingCount ++;
    }
}
