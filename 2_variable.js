
/*
Variable
    เป็นสิ่งที่ใช้สำหรับเก็บข้อมูล โดยจะแบ่งได้ 3 แบบดังนี้
        var
        let 
            เป็น best practice เพราะเป็น scope variable
        const

        step
            declear (var, let, const)
                example: let name;
            assignment
                example: = assignment operator
*/

let x; // declear
x = 9; // assignment

let fullName = 'Mint Rosetta'; // string
let age = 23; // number
let student = false; // boolean

age = age + 1;

let result = '';
for (let i = fullName.length - 1; i >= 0; i--) {
    result += fullName[i];
}
console.log(result);

console.log('Hello bro ' + fullName + ' you age ' + age + ' year old.');
