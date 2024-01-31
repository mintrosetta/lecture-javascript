/*
    break
        หยุดการทำงานของ loop
    continue
        ข้ามการวนซ้ำไปรอบถัดไป
*/

let x = 0;
while (true) {
    console.log(x);

    if (++x == 5) break;
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) continue;

    console.log(i);
}