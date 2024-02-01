/*
    sort 
        เป็นการจัดเรียงข้อมูลใน array

        โดยถ้าเป็น string จะเรียงตาม character ตัวแรก

        .reverse()
            เป้นการกลับด้าน array
*/

let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort().reverse();

for (let fruit of fruits) {
    console.log(fruit);
}