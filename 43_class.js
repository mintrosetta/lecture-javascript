/*
    Class
        เป็นแม่แบบสำหรับสร้าง object โดยจะมีการระบุ
            คุณลักษณะของ object (properties)
            พฤติกรรมของ object (behavier)
*/

class Player {
    score = 0;

    pause() {
        console.log("You paused the game");
    }

    exit() {
        console.log("You exited the game");
    }
}

const player1 = new Player();
player1.score += 1;
console.log(player1.score);
player1.pause();
player1.exit();

const player2 = new Player();
player2.score += 5;
console.log(player2.score);
player2.pause();
player2.exit();