/*
    Super
        ใช้เมื่อ sub class ต้องการอ้างอิงถึง super class ที่ได้สืบทอดมา
        โดยมักจะใช้สร้าง constructor ของ parent class

        โดยสาเหตุที่เราต้องใช้ super ส่งค่าไปให้ super class เพื่อในกรณี
        ที่ super class ต้องการข้อมูลนำไปใช้
*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit", 1, 40);
const fist = new Fish("Fish", 2, 80);
const hawk = new Fish("Hawk", 3, 80);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);