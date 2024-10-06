document.body.addEventListener("mousemove", (e) => {
    if (e.clientY >= 110 && e.clientY <= 860) {
        document.getElementById("player1").style.top = e.clientY - 100 + "px";
    }
});

var darkTheme = false;
function changeTheme() {
    if (darkTheme == false) {
        document.body.style.background = "black";
        document.getElementById("change").style.backgroundImage = 'url("sun.png")';
        document.getElementById("player1").style.background = "white";
        document.getElementById("line").style.background = "white";
        document.getElementById("change").style.border = "3px solid white";
        document.getElementById("record").style.color = "white";
        document.getElementById("score").style.color = "white";
        document.getElementById("player2").style.background = "white";
        document.getElementById("ball").style.background = "white";
        document.getElementById("soundOff").style.border = "3px solid white";
        if (soundOffMode == true) document.getElementById("soundOff").style.backgroundImage = 'url("soundOffWhite.png")';
        else document.getElementById("soundOff").style.backgroundImage = 'url("soundOnWhite.png")';
        darkTheme = true;
    } else {
        document.body.style.background = "white";
        document.getElementById("change").style.backgroundImage = 'url("moon.png")';
        document.getElementById("player1").style.background = "black";
        document.getElementById("line").style.background = "black";
        document.getElementById("change").style.border = "3px solid black";
        document.getElementById("record").style.color = "black";
        document.getElementById("score").style.color = "black";
        document.getElementById("player2").style.background = "black";
        document.getElementById("ball").style.background = "black";
        document.getElementById("soundOff").style.border = "3px solid black";
        if (soundOffMode == true) document.getElementById("soundOff").style.backgroundImage = 'url("soundOffBlack.png")';
        else document.getElementById("soundOff").style.backgroundImage = 'url("soundOnBlack.png")';
        darkTheme = false;
    }
}

var soundOffMode = false;
function soundOff() {
    if (soundOffMode == false) {
        if (darkTheme == false) document.getElementById("soundOff").style.backgroundImage = 'url("soundOffBlack.png")';
        else document.getElementById("soundOff").style.backgroundImage = 'url("soundOffWhite.png")';
        soundOffMode = true;
    }
    else {
        if (darkTheme == false) document.getElementById("soundOff").style.backgroundImage = 'url("soundOnBlack.png")';
        else document.getElementById("soundOff").style.backgroundImage = 'url("soundOnWhite.png")';
        soundOffMode = false;
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("hover_zone").addEventListener("mouseover", () => {
    document.getElementById("change").style.top = 10 + "px";
    document.getElementById("soundOff").style.top = 10 + "px";
});

document.getElementById("hover_zone").addEventListener("mouseout", () => {
    document.getElementById("change").style.top = -100 + "px";
    document.getElementById("soundOff").style.top = -100 + "px";
});

document.getElementById("change").addEventListener("mouseover", () => {
    document.getElementById("change").style.top = 10 + "px";
    document.getElementById("soundOff").style.top = 10 + "px";
});

document.getElementById("soundOff").addEventListener("mouseover", () => {
    document.getElementById("soundOff").style.top = 10 + "px";
    document.getElementById("change").style.top = 10 + "px";
});

var firstMove = true;
var orient = 0;
var aud = document.createElement("audio");
document.getElementById("player1").style.left = 50 + "px";

setInterval(() => {
    if (orient == 1) {
        document.getElementById("ball").style.top = rand(10, 915) + "px";
        document.getElementById("ball").style.left = 1820 + "px";
        document.getElementById("score").innerHTML = "Score: " + (parseInt(document.getElementById("score").innerHTML.split(" ")[1]) + 1);
        if (soundOffMode == false) {
            aud.src = "ball_sound.mp3";
            aud.autoplay = true;
        }
    } else if (orient == 0) {
        document.getElementById("ball").style.top = rand(10, 915) + "px";
        document.getElementById("ball").style.left = 40 + "px";
        if (firstMove != true) {
            if (soundOffMode == false) {
                aud.src = "ball_sound.mp3";
                aud.autoplay = true;
            }
        }
        firstMove = false;
    } else {
        document.getElementById("ball").style.transition = "background 1s ease-in";
        document.getElementById("ball").style.top = 455 + "px";
        document.getElementById("ball").style.left = 935 + "px";
        orient = 0;
        setTimeout(() => {
            document.getElementById("ball").style.transition = "background 1s ease-in, top 1.5s linear, left 1.5s linear";
        }, 1000);
        if (parseInt(document.getElementById("score").innerHTML.split(" ")[1]) > parseInt(document.getElementById("record").innerHTML.split(" ")[1])) {
            document.getElementById("record").innerHTML = "Record: " + parseInt(document.getElementById("score").innerHTML.split(" ")[1]);
        }
        document.getElementById("score").innerHTML = "Score: 0";
        firstMove = true;
    }
}, 1500);

setInterval(() => {
    if (((parseInt(document.getElementById("ball").style.top) >= parseInt(document.getElementById("player1").style.top)) && (parseInt(document.getElementById("ball").style.top) <= parseInt(document.getElementById("player1").style.top) + 200)) && (parseInt(document.getElementById("ball").style.left) <= parseInt(document.getElementById("player1").style.left))) orient = 1;
    else if ((((parseInt(document.getElementById("ball").style.top) + 5) < parseInt(document.getElementById("player1").style.top)) || (parseInt(document.getElementById("ball").style.top) > parseInt(document.getElementById("player1").style.top) + 200)) && (parseInt(document.getElementById("ball").style.left) <= parseInt(document.getElementById("player1").style.left))) orient = 2;
    else orient = 0;
}, 10);

setInterval(() => {
    if (parseInt(document.getElementById("ball").style.top) >= 765) document.getElementById("player2").style.top = parseInt(document.getElementById("ball").style.top) - 155 + "px";
    else if (parseInt(document.getElementById("ball").style.top) <= 150) document.getElementById("player2").style.top = parseInt(document.getElementById("ball").style.top) + "px";
    else document.getElementById("player2").style.top = parseInt(document.getElementById("ball").style.top) - rand(0, 160) + "px";
}, 3000);