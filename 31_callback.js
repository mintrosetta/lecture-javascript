/*
    Callback
        เป็น function ที่ถูกส่งเข้าไปใน argument ของฟังชันอื่น ๆ
*/

sum(2, 3, displayConsole);

function sum(x, y, callback) {
    let result = x + y;
    callback(result);
}

function displayConsole(output) {
    console.log(output);
}