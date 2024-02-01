/*
    2 Deimension Array
        จะเป็น array ที่ด้านในจัดเก็บข้อมูลของ array
*/

let fruits = ["banana", "apple", "orange"];
let vegatebles = ["carrots", "onions", "potatos"];
let meats = ["eggs", "chicken", "fish"];

let groceries = [fruits, vegatebles, meats];

console.log(groceries[1][2]);

for (let grocerie of groceries) {
    for (let food of grocerie) {
        console.log(food);
    }
    console.log("---");
}