// for (let i = 1; i <= 10; i++) { 
//     console.log(`For table ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         let result = i*j;
//         console.log(`The Multiplication of ${i} and ${j} is ${result}`);
//     }
//     console.log("\n");
// }

let str = "hEllo world";
let counter = 0;

for (let i = 0; i < str.length; i++) {
    let lowercaseChar = str[i].toLowerCase();
    if (lowercaseChar == 'a' || lowercaseChar == 'e' || lowercaseChar == 'i' || lowercaseChar == 'o' || lowercaseChar == 'u') {
        counter++;
    }
}

console.log(`Numbers of vowels are present: ${counter}`);
