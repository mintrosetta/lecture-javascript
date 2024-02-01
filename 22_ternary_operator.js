/* 
    Ternary Operator
        เป็น if/else statement แบบสั้น ๆ

        (condition) ? true : false;
*/

function checkAge(age) {
    return (age >= 18) ? true : false;
}

let adult = checkAge(21);
console.log(adult);