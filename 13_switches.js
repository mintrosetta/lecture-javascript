/*
    Switch statement
        ใช้สำหรับตรวจสอบค่ากับหลายกรณี
*/

let grade = "D";
switch (grade) {
    case "A":
        console.log("You are great!");
        break;
    case "B":
        console.log("You are good!");
        break;
    case "C":
        console.log("You are okay!");
        break;
    case "D":
        console.log("You are barely!");
        break;
    case "F":
        console.log("You are failed!");
        break;
    default:
        console.log("Grade is not support.");
}

let score = 42;
switch (true) {
    case score >= 80:
        console.log("You are great!");
        break;
    case score >= 70:
        console.log("You are good!");
        break;
    case score >= 60:
        console.log("You are okay!");
        break;
    case score >= 50:
        console.log("You are barely!");
        break;
    case score < 50:
        console.log("You are failed!");
        break;
    default:
        console.log("Grade is not support.");
}