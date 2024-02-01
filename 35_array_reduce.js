/*
    reduce()
        เป็นการลด array เป็นค่าเดียว 
        เช่น การหาผลรวม

        (ค่าจาก return ครั้งก่อนหน้า, ข้อมูลปัจจุบัน)
*/

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);
console.log(total);


function checkOut(total, element) {
    return (total + element);
}