var moneySign = "$ ";
var purchasedSign = "Purchased: ";
var hungerSign = "Hunger: ";
var hungryNoMoney = "You are hungry, but don't have enough money for this item.";
var notHungry = "You are not hungry now.";


var userObj = {
    money: 0,
    hunger: 90,
    happiness: 100,
    purchased: []
}

var time = setInterval(addMoneyByTime, 1500);

var hunger = setInterval(gettingHungery, 120000);

function funTime(){
  userObj.money += 5;
  document.getElementById('money').innerHTML = moneySign + userObj.money;
}

function addMoneyByTime(){
  userObj.money += 1;
  document.getElementById('money').innerHTML = moneySign + userObj.money;
}

function clearBroadcast(){
  document.getElementById('broadcast').innerHTML = "";
}

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

function buy(){
  userObj.money -= 100;
  userObj.purchased.push("example string");
  document.getElementById('userPurchased').innerHTML = purchasedSign + userObj.purchased;
}
