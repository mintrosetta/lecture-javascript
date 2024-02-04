/* 
    Date Object
        ใช้สำหรับจัดการ date & time

        new Date(milliseconds)
            เราสามารถส่งมิลลิวินาทีเข้าไปให้ date คำนวณวันที่ได้
            ว่าตั้งแต่ปี 1970 จนถึง มิลลิวินาที ที่ระบุ ผ่านมาแล้วกี่ช่วงเวลา
        
        new Date(year, month, date)
            สามารถระบุเป็น ปี เดือน วัน ได้

        อะไรที่เราสามารถ set ได้ เราสามารถ get ได้เหมือนกัน
*/

let date = new Date();
console.log(date);
console.log(date.toLocaleString());
console.log(date.getFullYear()); // ดูปี
console.log(date.getDay()); // ดูวันของสัปดาห์นั้น โดย วันอาทิตย์ = 0
console.log(date.getHours()); // ดูชั่วโมง
console.log(date.getMinutes()); // ดูนาที
console.log(date.getSeconds()); // ดูวินาที
console.log(date.getMilliseconds()); // ดูมิลลิวินาที
console.log(date.toString("dd-mm-yyyy"));