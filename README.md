# For Loop Function

*Add a for-loop like function to arrays, including **break** and **continue** functionalities.*

![npm](https://img.shields.io/npm/dt/for-loop-function.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/for-loop-function)

```ts
import "for-loop-function";

const numbers = [ 1, 2, 3, 4, 5, 6 ];

// break example
numbers.for((num, { stop }) => {  
  if (num === 5) {
    stop(); // break
  }
  console.log(num); // => 1 2 3 4
});


// continue example
numbers.for((num, { jump }) => {
  if (num % 2){
    jump(); // continue
  }
  console.log(num); // => 2 4 6
});


// getting current index and original array
numbers.for((num, { i, arr }) => {
  console.log(num * i + arr.length); // => 6 8 12 18 26 36
});
```

You can set a custom **start index**, **condition** or **iterator**.

```ts
import "for-loop-function";

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

numbers.for(
  (num) => {
    console.log(num); // => 2 5 8
  },
  {
    start: 1, // default: 0
    condition: (i, arr) => i < arr.length - 1, // default: i => i < arr.length
    iterator: i => i + 3 // default: i => ++i
  }
);
```