/*
    filter()
        สร้าง array ใหม่ขึ้นมา โดยจะมีแค่ข้อมูลที่ผ่านเงื่อนไข
*/

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);
console.log(adults);

function checkAge(element) {
    return element >= 18
}