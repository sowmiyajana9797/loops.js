// javascript loop task

// 1) Print numbers from 1 to 5 using a loop.
// 2) Print "Hello World" 5 times using a loop.
// 3) Print numbers from 5 to 1 using a loop.
// 4) Print the first 5 odd numbers.
// 5)Calculate the sum of numbers from 1 to 10 using a loop.
// 6) Print each element of an array using a loop.
// 7) Count how many numbers between 1 and 20 are divisible by 3.
// 8) Print the multiplication table of 3 using a loop.
// 9) Calculate the sum of all even numbers between 1 and 10.
// 10)Print each character of a string on a new line using a loop

for(let i= 1; i <= 5 ; i++) {
    console.log(i)
}

// output
// 1
// 2
// 3
// 4
// 5



for(let i= 0; i < 5; i++) {
    console.log("hello world")
}

// output
// hello world
// hello world
// hello world
// hello world
// hello world


for (let i= 5; i>= 1 ; i--) {
    console.log(i)
}

// output
// 5
// 4
// 3
// 2
// 1
  
for (let i= 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log(i)
    }
        
    }

    // output
    // 1
    // 3
    // 5
    // 7
    // 9


    let sum = 0;

    for (let i= 1; i <= 10; i++) {
       sum += i;
    }
    console.log(sum)

    // output
    // 55




fruits = ["orange", "apple", "banana", "cherry"]

for (let i=0; i < fruits.length; i++) {
    console.log (fruits[i]);
}
 
// output
// orange
// apple
// banana
// cherry




 let count=0;

 for (let count = 1; count <= 20; count++) {
    if (count % 3 == 0) {
       console.log(count);
       count++;
    }
 }

//  output
//  3
//  6
//  9
//  12
//  15
//  18

for (let i=1; i <= 10; i++) {
    console.log (`3 x ${i} = ${3 * i}`);
}

// output
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
  
let lap = 0;
for (let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        lap += i;
    }
}
  console.log(lap);

//   output
//   30

let hai = "hai sowmiya";

for (let i = 0; i < hai.length; i++) {
    console.log(hai[i]);
}

// output
// h
// a
// i
 
// s
// o
// w
// m
// i
// y
// a




