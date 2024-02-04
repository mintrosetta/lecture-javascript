/* 
    Synchronous
        ทำงานทีละบรรทัด
        และทำงานจะจบทันที

    Asynchronous
        ทำงานแบบไม่ได้เรียงละดับ
        เพราะอาจจะมีฟังก์ชันที่ทำงานนานกว่าปกติ
        เช่น
            Access a database
            fetch a file
            task ที่กินเวลานาน
*/

console.log("START");
setTimeout(() => {
    console.log("This is asynchronous");
}, 5000);
console.log("END");