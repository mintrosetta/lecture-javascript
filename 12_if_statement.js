/*
    If statement
        เป็นรูปแบบพื้นฐานสำหรับการตัดสินใจ
        ถ้าผลลัพธ์เป็น จริง ให้ทำแบบนี้
        ถ้าผลลัพธ์เป็น เท็จ ให้ทำแบบนี้
*/

let age = 12;

if (age >= 18) {
    console.log("You age an adult!");
} else if (age < 0) {
    console.log("You haven't been born yet!");
} else {
    console.log('You age a child!');
}