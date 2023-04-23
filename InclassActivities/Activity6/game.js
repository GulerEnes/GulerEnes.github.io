let level = 1;
let clicks = 0;
let timeout = 500;
let oldClickTime = new Date();
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

function playGame() {
    const button = document.getElementById("theButton");

    button.addEventListener("mouseover", () => {
        let newClickTime = new Date();

        const marginTop = Math.random() * (windowHeight - 100) + "px";
        const marginLeft = Math.random() * (windowWidth - 100) + "px";

        button.style.marginTop = marginTop;
        button.style.marginLeft = marginLeft;

        if (newClickTime - oldClickTime < timeout){
            clicks++;
        }
        else{
            clicks = 1;
        }
        oldClickTime = new Date();
    

        if (clicks === 3) {
            clicks = 0;
            timeout -= 100;
            alert("You won the level " + level + "! New timeout is " + timeout);
            level++;
        }
    });

}

playGame();
