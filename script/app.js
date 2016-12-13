// cached strings
var moneySign = "$ ";
var purchasedSign = "Purchased: ";
var hungerSign = "Hunger: ";
var hungryNoMoney = "You are hungry, but don't have enough money for this item.";
var notHungry = "You are not hungry now.";

// user object
var userObj = {
    money: 1.00,
    hunger: 75,
    happiness: 75
}

// broadcast
function clearBroadcast(){
    document.getElementById('broadcast').innerHTML = "";
}

// money
var time = setInterval(addMoneyByTime, 1700);

function funTime(){
    userObj.money += 1.00;
    document.getElementById('money').innerHTML = moneySign + userObj.money;
}

function addMoneyByTime(){
    userObj.money += 0.25;
    document.getElementById('money').innerHTML = moneySign + userObj.money;
}

if (userObj.money < 1){
    alert("You officially broke");
    userObj.money = 0;
    userObj.happiness -= 25;
}

// hunger
var hunger = setInterval(gettingHungery, 30000);

function gettingHungery(){
    userObj.hunger -= 1;
    document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
}

function ramenSnack(){
    if (userObj.hunger <= 95 && userObj.money > 2.25){
        userObj.hunger += 1;
        userObj.money -= 2.25;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 99) {
        document.getElementById('broadcast').innerHTML = hungryNoMoney;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger > 99) {
        document.getElementById('broadcast').innerHTML = notHungry;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger < 99 && userObj.money < 2.25){
        alert("you are hungry and without money.");
    }
}
