/*
    Inheritance
        เป็นการสืบทอดคุณลักษณะและพฤติกรรมจาก super class ไปให้ sub class
*/

class Animal {
    alive = true;
    name = "Animal";

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbait";

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {
    name = "fish";

    run() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
