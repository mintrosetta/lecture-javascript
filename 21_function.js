/*
    Function
        เป็นสิ่งที่เอาไว้เก็บชุดของคำสั่ง และสามารถนำไปเรียกใช้ได้จากหลาย ๆ ที่
        โดยไม่ต้องเขียนใหม่

    Parameter
        ข้อมูลที่สามารถส่งเข้าไปให้กับ function ได้

    Return
        ข้อมูลที่ฟังก์ชันจะส่งคืนกลับมา
*/

let area;
let width = 6;
let height = 9;

area = getArea(width, height);
console.log(area);

function getArea(width, height) {
    let result = width * height;
    return result;
}

function happyBirthday(username) {
    if (username === undefined) console.error("Username is undefined."); 
    console.log("Happy birthday to " + username + " <3");
}

// happyBirthday("Mint Rosetta");
// happyBirthday("Bike Chanokchon");