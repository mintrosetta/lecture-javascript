/* 
    Async
        ใช้ทำให้ function ส่งคืนเป็น Promise
        และสามารถใช้งานได้กับ await

    Await
        ใช้กับ async function เพื่อรอให้ Promise ส่งคืนค่ากลับมา
        โดยสามารถใช้ได้ใน function ที่เป็ต async เท่านั้น
*/

async function loadFile() {
    let x = 19;

    if (x === 10) {
        return true;
    } else {
        throw {message: "Id not found"};
    }
}

async function main() {
    try {
        let message = await loadFile();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}
main();

