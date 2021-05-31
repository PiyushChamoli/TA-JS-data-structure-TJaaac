// 1. Create an array named numbers and store 5 number values in it

numbers = [5, 50, 10, 12, 24];

// 2. Calculate the sum of array items and print it to the console using console.log()

let total = 0;
for (let num of numbers) {
    total += num;
}
console.log(total);

// 3. Calculate the average of array items and print it to the console using console.log()

let avg = 0;
for (let num of numbers) {
    avg += num;
}
console.log(avg/numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()

let high = 0;
for (let num of numbers) {
    if (num>high) {
        high = num;
    }
}
console.log(high);

// 5. Find the lowest number in the array and print it to the console using console.log()

low = numbers[0];
for (let num of numbers) {
    if (num<low) {
        low = num;
    }
}
console.log(low);

// 6. Find the even numbers in the array and print them to the console using console.log()

for (let num of numbers) {
    if (num%2===0) {
        console.log(num);
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for (let num of numbers) {
    if (num%2!==0) {
        console.log(num);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (let num of numbers) {
    if (num%5===0) {
        console.log(num);
    }
}

// 9. Log all the element of the array one by one



// 10. Find all the number in the array that is divisible by 3
