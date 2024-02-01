/*
    forEach()
        เป็นการใช้งาน callback function โดนจะส่งค่าใน array มาให้เรา
        และเราต้องทำ function มารับค่านั้น
*/

let students = ["spongebob", "patrick", "squidward"];

students.forEach(capitalize);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

console.log(students[0]);