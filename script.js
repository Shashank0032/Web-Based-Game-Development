s=1;
time=5;
document.onkeydown = function(e) {
    console.log("key :", e.keyCode);
    if (e.keyCode == 38) { // Arrow Up key
        const play = document.querySelector('.player');
        const jump = document.querySelector('.jump');
        play.style.visibility = 'hidden';
        jump.style.visibility = 'visible';
        setTimeout(() => {
            jump.style.visibility = 'hidden';
            play.style.visibility = 'visible';
            px = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
            jx=px = parseInt(window.getComputedStyle(jump, null).getPropertyValue('left'));
            play.style.left=px+100+'px';
            jump.style.left=jx+100+'px';
        }, 1000);
    }
    if(e.keyCode==39){
        play = document.querySelector('.player');
        jump = document.querySelector('.jump');
        px = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
        jx=px = parseInt(window.getComputedStyle(jump, null).getPropertyValue('left'));
        play.style.left=px+100+'px';
        jump.style.left=jx+100+'px';

    }
    if(e.keyCode==37){
        play = document.querySelector('.player');
        jump = document.querySelector('.jump');
        px = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
        jx=px = parseInt(window.getComputedStyle(jump, null).getPropertyValue('left'));
        play.style.left=px-100+'px';
        jump.style.left=jx-100+'px';

    }
}
setInterval(() => {
    const play = document.querySelector('.player');
    const gameover = document.querySelector('.gameover');
    const obstacle = document.querySelector('.obstacle');

    const px = parseInt(window.getComputedStyle(play, null).getPropertyValue('left'));
    const py = parseInt(window.getComputedStyle(play, null).getPropertyValue('bottom'));
    const ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
    const offsetx = Math.abs(px - ox);
    const offsety = Math.abs(py - oy);

    console.log(offsetx, offsety);
    const isHidden = window.getComputedStyle(play).visibility === 'hidden';
    if (offsetx <= 110 && offsety <= 380 && !isHidden) {
        gameover.style.visibility = 'visible';
        localStorage.setItem('score', Math.floor(s)); // Store the score in localStorage
        window.location.href = "start.html"; // Redirect to the second HTML page
    }else{
        s+=0.1;
        upadtescore(s)
    }
}, 10);

function upadtescore(score){
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = "Your Score : " + Math.floor(score);
}

// Check if there's a stored score and display it on the second HTML page
window.onload = function() {
    const storedScore = localStorage.getItem('score');
    if (storedScore !== null) {
        const scoreDisplay = document.querySelector('.scorrr');
        if (scoreDisplay) {
            scoreDisplay.innerHTML = "Your Score is: " + storedScore;
        }
        localStorage.removeItem('score'); // Clear the stored score after displaying it
    }
};


