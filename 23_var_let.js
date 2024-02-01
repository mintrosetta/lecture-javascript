/*
    let
        ตัวแปรถูกจำกัดในรูปแบบ block scope {}
    
    var 
        ตัวแปรที่ถูกจำกัดใน function
        แต่ถ้าประกาศแบบ global อาจจะไปทับกับ window object ได้
*/

function doSomething() {
    for (var i = 1; i <= 3; i++) {
        console.log(i);
    }
}
doSomething();

console.log(i);