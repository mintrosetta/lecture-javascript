/*
    array
        เป็นตัวแปรที่สามารถเก็บได้หลายข้อมูล
*/

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0])

// แก้ไขข้อมูลใน index ที่ระบุ
fruits[1] = "coconut";
console.log(fruits[1]);

// เพิ่ทข้อมูลเข้าไปใน array
fruits.push("lemon");

// ลบข้อมูลตัวสดท้าย และส่งคืนข้อมูลที่ลบ
console.log(fruits.pop());

// เพิ่มข้อมูลเข้าไปที่ด้านหน้าสุด
fruits.unshift("mango");

// ลบข้อมูลจากดด้านหน้า
fruits.unshift();

// ดูขนาดของ array
console.log(fruits.length);

// รับ index ของข้อมูลที่ค้นหา, ถ้าไม่เจอจะส่งคืน -1
console.log(fruits.indexOf("apple"));

// วนซ้ำดึงค่าใน array ด้วย index
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// ใช้ foreach ทำการดึงคต่าออกมา
for (let fruit of fruits) {
    console.log(fruit);
}
