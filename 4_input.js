// using window prompt
// let username = window.prompt(''); 

// using html input element
let username;
document.getElementById('enter-btn').onclick = function () {
    username = document.getElementById('name').value;
    console.log(username);
    document.getElementById('nameLabel').innerHTML = username;
}