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
    happiness: 75,
    fullfillment: 0
}

var foodObj = {

}

var skillsObj = {

}

var jobObj = {

}

// broadcast
function clearBroadcast(){
    document.getElementById('broadcast').innerHTML = "";
}

// money
var time = setInterval(addMoneyByTime, 1700);

function afterMove(){
  userObj.money += 1.00;
  document.getElementById('money').innerHTML = moneySign + userObj.money;
  // this is another way to change the attribute
  // document.getElementById('myBar').setAttribute("style", "width: 1%");
  // these next to lines of code are not working yet.
  document.getElementById('myBar').style.width = "1%";
  document.getElementById('label').innerHTML = "1%";
}

// this function is not working yet, and does not clear the progress bar
function clearProgress(){
  document.getElementById('myBar').setAttribute("style", "width: 1%");
  document.getElementById('label').innerHTML = "1%";
}

function funTime(){
  var elem = document.getElementById("myBar");
  move();
  afterMove();
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
var hunger = setInterval(gettingHungery, 60000);

function gettingHungery(){
    userObj.hunger -= 1;
    document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
}

function ramenSnack(){
    if (userObj.hunger <= 99 && userObj.money > 2.25){
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

// pizza

function clearUpgradeBroadcast(){
  var emptyString = document.getElementById('upgradeBroadcast').innerHTML = "";
}

function clickShow(){
    var upgradeDenied = "you need more money to ungrade your food choices.";
    if (userObj.money >= 10){
        var y = document.getElementById('pizzaUpgrade');
        var x = document.getElementById('pizzaPizza');
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
    } else {
      document.getElementById('upgradeBroadcast').innerHTML = upgradeDenied;
      setTimeout(clearUpgradeBroadcast, 2000);
    }
}

function pizzaSnack(){
    if (userObj.hunger <= 97 && userObj.money > 4.75){
        userObj.hunger += 3;
        userObj.money -= 4.75;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 97) {
        document.getElementById('upgradeBroadcast').innerHTML = hungryNoMoney;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger > 97) {
        document.getElementById('upgradeBroadcast').innerHTML = notHungry;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger < 97 && userObj.money < 4.75){
        alert("you are hungry and without money.");
    }
}

// function createPizzaSnack(){
//     var i = document.createElement("IMG");
//     i.setAttribute("src", "./assets/pizzaRolls.png");
//     i.setAttribute("width", "50");
//     document.getElementById('pizzaLocation').appendChild(i);
// }

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}
