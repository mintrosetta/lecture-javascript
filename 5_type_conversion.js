/*
    Type Conversion
        เปลี่ยนชนิดของข้อมูลเป็นชนิดอื่น ระหว่าง string, numbers, booleans

        Number()
            ใช้แปลงข้อมูลเป็น number
            ถ้าข้อมูลที่ต้องการแปลงไม่ใช่ตัวเลข จะได้ Not a Number (NaN)
        String()
            ใช้แปลงข้อมูลเป็น string
        Boolean()
            ใช้แปลงข้อมูลเป็น boolean
*/

let age = "21";
age = Number(age);
age += 1;

console.log(age)

let PI = Number("3.14");
console.log(PI, typeof PI);

console.log(Boolean("")); // ถ้า string ว่างเปล่าจะได้ false
console.log(Boolean("pizza")); // ถ้า string มีค่าจะได้ true
console.log(Boolean(1));
console.log(Boolean(0));