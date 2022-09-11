# For Function

*Add a for-loop like function to arrays, including **break** and **continue** functionalities.*

![npm](https://img.shields.io/npm/dt/for-func.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/for-func)

```ts
import "for-func";

const arr = [ 1, 2, 3, 4, 5, 6 ];

// looping through each item
arr.for(({ curr }) => {  
  console.log(curr); // => 1 2 3 4 5 6
});


// break example
arr.for(({ curr, stop }) => {  
  if (curr === 5) {
    stop();
  }
  console.log(curr); // => 1 2 3 4
});

// continue example
arr.for(({ curr, jump }) => {
  if (curr % 2){
    jump();
  }
  console.log(curr); // => 2 4 6
});
```

You can also set a custom **start index**, **condition** or **iterator**.

```ts
import "for-func";

const arr = [ 1, 2, 3, 4, 5, 6 ];

arr.for(
  ({ curr }) => {
    console.log(curr); // => 5 4 3 2
  },
  {
    start: 4, // default: 0
    condition: i => i >= 1, // default: i < arr.length
    iterator: i => --i // default: ++i
  }
);
```