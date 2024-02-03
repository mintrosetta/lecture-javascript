/*
    Anonymous objects
        เป็น object ที่ไม่มีชื่อ ไม่ต้องระบุ properties ทั้งหมด
        และจะไม่สามารถเข้าถึง object ได้เพราะะไม่มี reference
*/

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let card1 = new Card("A", "Hearts");
let card2 = new Card("A", "Spades");
let card3 = new Card("A", "Dimonds");
let card4 = new Card("A", "Cubes");

const cards = [
    new Card("A", "test"),
    {
        value: "A",
        suit: "Hearts"
    },
    {
        value: "A",
        suit: "Dimonds"
    }
]

console.log(cards);