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
    purchased: []
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
var hunger = setInterval(gettingHungery, 120000);

function ramenSnack(){
    if (userObj.hunger <= 95 && userObj.money > 5){
      userObj.hunger += 10;
      userObj.money -= 5;
      document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 95) {
      document.getElementById('broadcast').innerHTML = hungryNoMoney;
      setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger > 95) {
      document.getElementById('broadcast').innerHTML = notHungry;
      setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger < 95 && userObj.money < 5){
      alert("you are hungry and without money.");
    }
}

function gettingHungery(){
  userObj.hunger -= 1;
  document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
}

// shopping
// function buy(){
//   userObj.money -= 100;
//   userObj.purchased.push("example string");
//   document.getElementById('userPurchased').innerHTML = purchasedSign + userObj.purchased;
// }
