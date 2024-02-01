/*
    toLocaleString()
        ใช้สำหรับแปลงข้อมูลตัวเลขเป็นสกุลเงิน

        locale
            ระบุภาษา
        option
            formatting options
*/

let amount = 123456.789;
amount = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
}); 
console.log(amount);