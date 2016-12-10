var moneySign = "$ ";
var purchasedSign = "Purchased: ";

var userObj = {
    money: 0,
    purchased: []
}

var time = setInterval(addMoneyByTime, 1000);

function funTime(){
  userObj.money += 5
  document.getElementById('money').innerHTML = moneySign + userObj.money;
}

function addMoneyByTime(){
  userObj.money += 1;
  document.getElementById('money').innerHTML = moneySign + userObj.money;
}

function buy(){
  userObj.money -= 100;
  userObj.purchased.push("example string");
  document.getElementById('userPurchased').innerHTML = purchasedSign + userObj.purchased;
}
