/* 
    console.time(name)
        เริ่มจับเวลา โดยปกติจะใช้วัดระยะเวลาที่ function ทำงาน
*/


// start
console.time("Response time");

setTimeout(() => {
    console.log("Hello World");

    // end
    console.timeEnd("Response time")
}, 2000);

