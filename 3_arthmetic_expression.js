/*
    Arithmetic Expression
        เป็นการดำเนินการเกี่ยวกับคณิตศาสตร์ โดยจะเป็นการรวมกันของตัวถูกดำเนินการ (operands) ด้วยตัวดำเนินการ (operators)
        operands คือ ค่าที่ถูกดำเนินการ ประกอบด้วย
            value
            variable
        operators คือ ตัวดำเนินการ ประกอบด้วย
            +
            -
            *
            /
            %
        ตัวอย่างการใช้งาน
            let x = 10;
            let y = x + 5;
        ลำดับความสำคัญของการดำเนินการ
            ()
            * /
            + -

*/

let students = 20;
students = students + 1;
console.log(students);

let extraStudents = students % 2;
console.log(extraStudents);