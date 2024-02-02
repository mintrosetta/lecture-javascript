/*
    Constructor
        เป็น method ที่จะทำงานทันทีเมื่อมีการสร้าง object ของคลาส
        โดยจะใช้ในการรับ argument เพื่อ assignment ค่าให้กับ properties 
*/

class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

let student = new Student("Mint Rosetta", 23, 4.00);
console.log(student)
