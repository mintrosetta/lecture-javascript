/*
    Function
        เป็นสิ่งที่เอาไว้เก็บชุดของคำสั่ง และสามารถนำไปเรียกใช้ได้จากหลาย ๆ ที่
        โดยไม่ต้องเขียนใหม่
*/

function happyBirthday(username) {
    if (username === undefined) console.error("Username is undefined."); 
    console.log("Happy birthday to " + username + " <3");
}

happyBirthday("Mint Rosetta");
happyBirthday("Bike Chanokchon");