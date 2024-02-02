/* 
    Getter
        ทำให้ properties สามารถดึงค่านำออกไปใช้ได้    

    Setter
        ทำให้เราสามารถ assignment ค่าให้กับ properties ได้

    ถ้าหากมี getter, setter ชื่อ properties ควรขึ้นต้นด้วย _
*/

class Car {
    constructor(power) {
        this._gas = 25;
        this._power = power;
    }

    get power() {
        return this._power;
    }

    set power(value) {
        this._power = value;
    }   

    get gas() {
        return this._gas;
    }
}

const car = new Car(400);
console.log(car.power);
console.log(car.gas);