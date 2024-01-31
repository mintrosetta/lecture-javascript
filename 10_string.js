let username = "Mint Rosetta";

// ดูว่า string เก็บ character ไว้กี่ตัว
console.log(username.length);

// ดู character ในตำแหน่งที่ระบุ
console.log(username.charAt(3));

// หาตำแหน่งแรกที่เจอ ของตัวอักษรที่ระบุ
console.log(username.indexOf("R"));

// หาตำแหน่งสุดท้ายที่เจอ ของตัวอักษรที่ระบุ
console.log(username.lastIndexOf("t"));

// ลบช่องว่างซ้ายขวา
console.log("  Mint.rosetta  ".trim());

// แปลงเป็นตัวใหญ่
console.log(username.toUpperCase());

// แปลงเป็นตัวเล็ก
console.log(username.toLowerCase());

// แทนที่ตัวอักษรที่ระบุทั้งหมด ด้วยตัวที่ต้องการ
console.log("080-071-0622".replaceAll("-", ""));

// แยกส่วนของ string โดยจะส่งคืน string ใหม่ ไม่แก้ไข string เดิม
// ตำแหน่งเริ่มต้น, นับไปอีกกี่ตัว
console.log(username.slice(0, 4));