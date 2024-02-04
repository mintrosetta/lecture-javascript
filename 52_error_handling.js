/*
    Error Handling
        error
            เป็น Object ที่มีรายละเอียดเกี่ยวกับข้อผิดพลาด
            เช่น 
                ไม่สามารถเปิดไฟล์ได้
                ขาดการเชื่อมต่อ
                ประเภทข้อมูลไม่ตรงกัน
*/

try {
    let id = "5a";

    if (isNaN(id)) throw {message: "User id is invalid"};

} catch (error) {
    console.log(error.message);
} finally {
    // ทำงานหลังจาก try หรือ catch ทำงานเสร็จ
    console.log("finally")
}