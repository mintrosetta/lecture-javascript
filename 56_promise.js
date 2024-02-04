/*
    Promise
        เป็น object ที่ใช้ห่อหุ้ม asynchronous operation เพื่อเป็นการบอกว่า
        "สัญญาจะที่จะทำงานจนเสร็จ แล้วส่งคืนข้อมูลกลับมาให้"
*/

const promise = new Promise((resolve, reject) => {
    let x = 19;

    setTimeout(() => {
        if (x === 10) {
            resolve(true);
        } else {
            reject("Id not found");
        }
    }, 1000)
});

promise.then((value) => {
    console.log(value);
}).catch((err) => console.log(err));