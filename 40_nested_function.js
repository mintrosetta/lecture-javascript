/*
    Nested functions
        เป็น function ที่อยู่ข้างใน function อื่น
        โดย function จะถูกซ่อน ไม่ให้เรียกใช้จากภายนอกได้
*/

let username = "Mint Rosetta";
let inbox = 0;

login();
function login() {
    displayUsername();
    displayUserInbox();

    function displayUsername() {
        console.log(`Welcome ${username}`)
    }
    
    function displayUserInbox() {
        console.log(`You have ${inbox} new messages`);
    }
}