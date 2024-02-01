let grades = [100, 50, 90, 60, 80, 70];
grades = grades.sort(descedingSort);
console.log(grades);

/*
    จะเป็นการเปรียบเทียบ 2 ค่า

    y - x เรียกจากมากไปน้อย
    x - y เรียกจากน้อยไปมาก
*/
function descedingSort(x, y) {
    return y - x; 
}