var stats;
var stress = 150;
var money = 50;
var screen = "title";
let cards = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let startButton;
let playButton;
let nextdayButton;
let playagainButton;
let card1Value, card2Value, card3Value;
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dayIndex = 0;
//buttonstyle variables
var lpink = '#f79e7e'
var dpink = "#ed4a4a"
var bordRad = "10px"
//cardtextvar
let chosenCard;
let chosenValue;

function setup() {
    createCanvas(700, 400);
    startButton = createButton('Start');
    playButton = createButton('Play');
    nextdayButton = createButton('Next Day');
    playButton.hide();
    nextdayButton.hide();
    playagainButton = createButton('Play Again');
    playagainButton.hide();
}

function draw() {
    background(255, 222, 181);
    textSize(12);
    noEnergy();
    if (stress > 200) {
        stress = 200;
    }
    if (screen === "title") {
        titleScreen();
    }
    else if (screen === "instruct") {
        instructScreen();
    }
    else if (screen === "game") {
        gameScreen();
    }
    else if (screen === "result") {
        resultScreen();
    }
    else if (screen === "win") {
        winGame();
    }
    else if (screen === "lose") {
        loseGame();
    }
    else if (screen === "noenergy") {
        noEnergy2();
    }
}

function titleScreen() {
    textSize(80);
    fill(252, 174, 146);
    text("Make Your Rent!", 50, 150);
    startButton.style('font-size', '70px')
    startButton.style('background-color', lpink);
    startButton.style('color', dpink)
    startButton.position(250, 200);
    startButton.size(200, 100);
    startButton.style("border-radius", bordRad);
    startButton.style("border-color", dpink);
    startButton.mouseClicked(buttonClick);
}

function buttonClick() {
    screen = "instruct";
    startButton.hide();
}

function instructScreen() {
    noStroke();
    fill(255, 255, 255);
    rect(70, 70, 550, 270);
    fill('#ed4a4a');
    textSize(30);
    text('How to Play', 85, 110);
    fill('#f79e7e');
    textSize(15);
    text('It is currently Sunday and you must make $500 in rent by Saturday. ', 85, 140);
    text('You have an energy meter which starts at 75%.', 85, 160);
    text('You also have a money counter which starts at $50.', 85, 180);
    text('Each day at work you will make choices that affect money and energy', 85, 200);
    text('Make sure to keep them balanced!', 85, 220);
    text('You earn $60 after each hard day of work, but lose energy', 85, 240);
    playButton.show();
    playButton.style('font-size', '40px')
    playButton.style('background-color', lpink);
    playButton.style('color', dpink)
    playButton.position(260, 250);
    playButton.size(150, 50);
    playButton.style("border-radius", bordRad);
    playButton.style("border-color", dpink);
    playButton.mouseClicked(startGame);
}

function startGame() {
    screen = "game";
    playButton.hide();
    randomizeCards();
    nextdayButton.hide();
}

function gameScreen() {
    stressBar();
    moneyCount();
    gameBG();
    dayName();
}

function stressBar() {
    fill(255, 255, 255);
    rect(100, 50, 200, 30);
    textSize(20);
    text('Energy %', 100, 40);
    fill(dpink);
    rect(100, 50, stress, 30);
}

function moneyCount() {
    fill(255, 255, 255);
    text('Money', 20, 40);
    text('$', 20, 65);
    textSize(30);
    fill(dpink);
    text(money, 35, 75);
}

function dayName() {
    fill(255, 255, 255);
    textSize(20);
    text('Day:', 470, 30);
    textSize(30);
    fill(dpink);
    text(day[dayIndex], 525, 35);

}


function gameBG() {
    noStroke();
    fill(255, 255, 255);
    rect(70, 95, 550, 270);
    cardDraw();

}


function cardDraw() {
    textSize(15);
    card1();
    card2();
    card3();

}

function card1() {

    if (mouseX > 90 && mouseX < 240 && mouseY > 110 && mouseY < 310) {
        fill('#d13232');

    } else {
        fill(lpink);

    }
    rect(90, 110, 150, 200, 20);
    fill(255, 255, 255);
    if (card1Value === 'a') {
        text('Help an old lady', 100, 150);
        text('cross the road', 100, 165);
    } else if (card1Value === 'b') {
        text('Grab coffee before', 100, 150);
        text('work', 100, 165)
    } else if (card1Value === 'c') {
        text('Work overtime', 100, 150);
    } else if (card1Value === 'd') {
        text('Put time into', 100, 150);
        text('your crypto', 100, 165);
        text('side hustle', 100, 180);
    } else if (card1Value === 'e') {
        text('Buy your boss', 100, 150);
        text('coffee', 100, 165);
    } else if (card1Value === 'f') {
        text('Sleep in', 100, 150);
    } else if (card1Value === 'g') {
        text('Look at the', 100, 150);
        text('noise coming from', 100, 165);
        text('your car hood', 100, 180);
    }
}

function card2() {
    if (mouseX > 270 && mouseX < 420 && mouseY > 110 && mouseY < 310) {
        fill('#d13232');

    } else {
        fill(lpink);

    }
    rect(270, 110, 150, 200, 20);
    fill(255, 255, 255);
    if (card2Value === 'a') {
        text('Help an old lady', 280, 150);
        text('cross the road', 280, 165);
    } else if (card2Value === 'b') {
        text('Dress dapper', 280, 150);
    } else if (card2Value === 'c') {
        text('Put extra effort', 280, 150);
        text('into the sale', 280, 165);
    }
    else if (card2Value === 'd') {
        text('Make coffee at home', 280, 150);
    }
    else if (card2Value === 'e') {
        text('Skip lunch', 280, 150);
    }
    else if (card2Value === 'f') {
        text('Take your boss', 280, 150);
        text('to lunch', 280, 165);
    }
    else if (card2Value === 'g') {
        text('Look into your', 280, 150);
        text("co-worker's MLM", 280, 165);
        text('scheme', 280, 180);
    }
}

function card3() {
    if (mouseX > 450 && mouseX < 600 && mouseY > 110 && mouseY < 310) {
        fill('#d13232');

    } else {
        fill(lpink);

    }
    rect(450, 110, 150, 200, 20);
    fill(255, 255, 255);
    if (card3Value === 'a') {
        text('Meal-prep', 460, 150);
    } else if (card3Value === 'b') {
        text('Sing on your way', 460, 150);
        text('to work', 460, 165);
    } else if (card3Value === 'c') {
        text('Participate in', 460, 150);
        text('company bonding', 460, 165);
    } else if (card3Value === 'd') {
        text('Work extra hard', 460, 150);
    }
    else if (card3Value === 'e') {
        text('Pick up a', 460, 150);
        text('second shift', 460, 165);
    }
    else if (card3Value === 'f') {
        text('Steal handicapped', 460, 150);
        text('parking', 460, 165);
    }
    else if (card3Value === 'g') {
        text('Buy a lottery', 460, 150);
        text("ticket before work", 460, 165);
    }
}

function randomizeCards() {
    card1Value = random(cards);
    card2Value = random(cards);
    card3Value = random(cards);
}

function mousePressed() {
    if (screen === "game") {
        if (mouseX > 90 && mouseX < 240 && mouseY > 110 && mouseY < 310) {

            if (card1Value === 'a') {
                chosenCard = 'help an old lady cross the road'
                chosenValue = 'She dragged you into running her errands all day'
                stats = '-$50 , -25% energy'
                money -= 50
                stress -= 50
            }
            else if (card1Value === 'b') {
                chosenCard = 'grab a coffee before work'
                chosenValue = 'Why was it $10?'
                stats = '-$10 , +25% energy'
                money -= 10
                stress += 50
            }
            else if (card1Value === 'c') {
                chosenCard = 'work overtime'
                chosenValue = 'You worked your butt off and look where it got ya'
                stats = '+$100 , -50% energy'
                money += 100
                stress -= 100
            }
            else if (card1Value === 'd') {
                chosenCard = 'put time into your crypto side hustle'
                chosenValue = "Turns out it wasn't a scam"
                stats = '+$100 , -25% energy'
                money += 100
                stress -= 50
            }
            else if (card1Value === 'e') {
                chosenCard = 'buy your boss coffee'
                chosenValue = 'Looks like someone got a bonus check'
                stats = '+$100 , +25% energy'
                money += 100
                stress += 50
            }
            else if (card1Value === 'f') {
                chosenCard = 'sleep in'
                chosenValue = 'Nice and rested... and late'
                stats = "-$25 , +50% energy"
                money -= 25
                stress += 100
            }
            else if (card1Value === 'g') {
                chosenCard = 'investigate under hood'
                chosenValue = "Sometimes it's best to ignore it"
                stats = '-$50 , -10% energy'
                money -= 50
                stress -= 20
            }
            screen = "result";
        }
        else if (mouseX > 270 && mouseX < 420 && mouseY > 110 && mouseY < 310) {

            if (card2Value === 'a') {
                chosenCard = 'help an old lady cross the road'
                chosenValue = 'She gave you a hug and a crisp $50!'
                stats = '+$50 , +25% energy'
                money += 50
                stress += 50
            }
            else if (card2Value === 'b') {
                chosenCard = 'dress dapper'
                chosenValue = 'Your boss thinks youre cool'
                stats = '+$50 , +25% energy'
                money += 50
                stress += 50
            }
            else if (card2Value === 'c') {
                chosenCard = 'put extra effort into the sale'
                chosenValue = 'You sold. Literally.'
                stats = '+$50 , -10% energy'
                money += 50
                stress -= 20
            }
            else if (card2Value === 'd') {
                chosenCard = 'make coffee at home'
                chosenValue = "It really sucked"
                stats = '+$20 , +25% energy'
                money += 20
                stress += 50
            }
            else if (card2Value === 'e') {
                chosenCard = 'Skip lunch'
                chosenValue = 'You saved some money but are oh so hungry'
                stats = '+$30 , -25% energy'
                money += 30
                stress -= 50
            }
            else if (card2Value === 'f') {
                chosenCard = 'take your boss to lunch'
                chosenValue = 'He really liked that you paid for the whole meal.'
                stats = "-$100 , +50% energy"
                money -= 100
                stress += 100
            }
            else if (card2Value === 'g') {
                chosenCard = "look into your co-worker's MLM scheme"
                chosenValue = "What did you expect?"
                stats = '-$50 , -25% energy'
                money -= 50
                stress -= 50
            }
            screen = "result";
        }
        else if (mouseX > 450 && mouseX < 600 && mouseY > 110 && mouseY < 310) {
            if (card3Value === 'a') {
                chosenCard = 'do meal-prep'
                chosenValue = 'Much cheaper than take-out!'
                stats = '+$100 , +25% energy'
                money += 100
                stress += 50
            }
            else if (card3Value === 'b') {
                chosenCard = 'Sing your heart out!'
                chosenValue = 'What an energy booster! You pay for Spotify premium, though'
                stats = '-$10 , +25% energy'
                money -= 10
                stress += 50
            }
            else if (card3Value === 'c') {
                chosenCard = 'go to company bonding sesh'
                chosenValue = 'They gave out free merch?'
                stats = '+$50 , -25% energy'
                money += 50
                stress -= 50
            }
            else if (card3Value === 'd') {
                chosenCard = 'work extra hard!'
                chosenValue = "Bleh."
                stats = '+$50 , -50% energy'
                money += 50
                stress -= 100
            }
            else if (card3Value === 'e') {
                chosenCard = 'Grab a second shift'
                chosenValue = 'Working double reallyyy sucks'
                stats = '+$50 , -50% energy'
                money += 50
                stress -= 100
            }
            else if (card3Value === 'f') {
                chosenCard = 'steal handicapped parking'
                chosenValue = 'You made it to work wayy faster with priority parking. And a fine.'
                stats = "-$50 , +25% energy"
                money -= 50
                stress += 50
            }
            else if (card3Value === 'g') {
                chosenCard = "buy a lottery ticket"
                chosenValue = "Winner winner chicken dinner!"
                stats = '+$100 , -10% energy'
                money += 100
                stress -= 20
            }
            screen = "result";
        }
    }
}

function resultScreen() {
    stressBar();
    moneyCount();
    gameBG();
    dayName();
    noStroke();
    fill(255, 255, 255);
    rect(70, 95, 550, 270);
    fill(dpink);
    textSize(20);
    text('You chose ' + chosenCard, 85, 150);
    textSize(18);
    text(chosenValue, 85, 200);
    text(stats, 85, 250);
    nextdayButton.show();
    nextdayButton.style('font-size', '20px')
    nextdayButton.style('background-color', lpink);
    nextdayButton.style('color', dpink)
    nextdayButton.position(460, 300);
    nextdayButton.size(150, 50);
    nextdayButton.style("border-radius", bordRad);
    nextdayButton.style("border-color", dpink);
    nextdayButton.mouseClicked(nextDay);

}

function nextDay() {
    if (dayIndex < day.length - 1) {
        dayIndex++;
        screen = "game";
        nextdayButton.hide();
        randomizeCards();
        money += 60;
        stress -= 20;
    } else {
        endGame();
    }
}

function endGame() {
    if (money >= 500 && stress >= 1) {
        screen = "win";
    } else {
        screen = "lose";
    }

    playagainButton.show();
    playagainButton.style('font-size', '20px')
    playagainButton.style('background-color', lpink);
    playagainButton.style('color', dpink)
    playagainButton.position(460, 300);
    playagainButton.size(150, 50);
    playagainButton.style("border-radius", bordRad);
    playagainButton.style("border-color", dpink);
    playagainButton.mouseClicked(restart);
}
function restart() {
    screen = "title";
    stress = 150;
    money = 50;
    playagainButton.hide();
    startButton.show();
    dayIndex = 0;
}
function winGame() {
    nextdayButton.hide();
    noStroke();
    fill(255, 255, 255);
    rect(70, 95, 550, 270);
    fill(dpink);
    textSize(30);
    text('You Made Rent!', 85, 150);
}
function loseGame() {
    nextdayButton.hide();
    noStroke();
    fill(255, 255, 255);
    rect(70, 95, 550, 270);
    fill(dpink);
    textSize(30);
    text('You Got Evicted!', 85, 150);
}
function noEnergy() {
    if (stress <= 0) {
        screen = "noenergy";
        stress = 100;
        money -= 50;
    }
}

function noEnergy2() {
    noStroke();
    fill(255, 255, 255);
    rect(70, 95, 550, 270);
    fill(dpink);
    textSize(30);
    text('You passed out at work!', 85, 150);
    textSize(20);
    text("Boss sent you home without the day's pay", 85, 180);
    nextdayButton.show();
}
