/*
    Map
        เป็น object ที่เก็บค่าแบบ key - value
*/

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 30],
    ["underwear", 50]
]);

// เพิ่มข้อมูล
store.set("hat", 40);

// ลบข้อมูลด้วย key
store.delete("sock");

// ดูขนาดของ map
console.log(store.size);

store.forEach((value, key) => console.log(value));
console.log(store.get("jeans"));
