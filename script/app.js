////////////////////
// CACHED STRINGS //
////////////////////
var moneySign = "$ ";
var purchasedSign = "Purchased: ";
var hungerSign = "Hunger: ";
var hungryNoMoney = "You are hungry, but don't have enough money for this item.";
var notHungry = "You are not hungry now.";

/////////////////
// USER OBJECT //
/////////////////
var userObj = {
    money:        1.00,
    hunger:       75,
    foodLevel:    1,
    happiness:    75,
    exp:          0,
    level:        1,
    skills:       [],
    fullfillment: 0
}

/////////////////
// FOOD OBJECT //
/////////////////
var foodObj = {
    ramenSnack: {
        fill:  1,
        cost:  2.25,
        src:   "./assets/ramen.png",
        level: 1
    },
    pizzaSnack: {
        fill:  3,
        cost:  4.75,
        src:   "./assets/pizzaRolls.png",
        level: 2
    }
}

/////////////////
// JOBS OBJECT //
/////////////////
var jobObj = {
    internship: {
        level:        1,
        money:        1.00,
        exp:          5,
        hunger:       .5,
        fullfillment: 0
    }
}

///////////////////
// SKILLS OBJECT //
///////////////////
var skillsObj = {
    // empty object for now
}

///////////////
// BROADCAST //
///////////////
function clearBroadcast(){
    document.getElementById('broadcast').innerHTML = "";
}

///////////
// MONEY //
///////////
var time = setInterval(addMoneyByTime, 1700);

function addMoneyByTime(){
    userObj.money += 0.25;
    document.getElementById('money').innerHTML = moneySign + userObj.money;
}

if (userObj.money < 1){
    // at some point change alert to something else
    alert("You officially broke");
    userObj.money = 0;
    userObj.happiness -= 25;
}

//////////////////
// PROGRESS BAR //
//////////////////
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            //this line is what increments the width attribute in the progress bar element
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
        if (width === 100){
            // find out why this is adding both money + hunger twice
            userObj.money += jobObj.internship.money;
            userObj.hunger -= jobObj.internship.hunger;
            // exp is not yet wired up
            userObj.exp += jobObj.internship.exp;
            document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
            document.getElementById('money').innerHTML = moneySign + userObj.money;
            document.getElementById('myBar').setAttribute("style", "width: 1%");
            document.getElementById('label').innerHTML = "1%";
        }
    }
}

// need to check if this function is necessary, might have been created
// with the intension of combining functionality, but as it stands it seems to
// only have the move(), so possibily delete it.
function funTime(){
    var elem = document.getElementById("myBar");
    move();
}

////////////
// HUNGER //
////////////
var hunger = setInterval(gettingHungery, 60000);

function gettingHungery(){
    userObj.hunger -= 1;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    // hunger reminder
    if (userObj.hunger < 39){
        document.getElementById('testingBroadcast').innerHTML = "You are getting hungry try eatting some food.";
        setTimeout(clearBroadcast, 3000);
    }
}

///////////
// RAMEN //
///////////
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

///////////
// PIZZA //
///////////
function clearUpgradeBroadcast(){
    var emptyString = document.getElementById('upgradeBroadcast').innerHTML = "";
}

// wired to the onclick in index.html
function pizzaSnack(){
    if (userObj.hunger <= 97 && userObj.money > 4.75){
        userObj.hunger += foodObj.pizzaSnack.fill;
        userObj.money -= foodObj.pizzaSnack.cost;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 97) {
        document.getElementById('upgradeBroadcast').innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 97) {
        document.getElementById('upgradeBroadcast').innerHTML = notHungry;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger < 97 && userObj.money < 4.75){
        alert("you are hungry and without money.");
    }
}

// used with testAdding()
var pizzaSwtich = true;

function testAdding(){
    var src = foodObj.pizzaSnack.src;
    if(userObj.money > 10 && pizzaSwtich === true) {
        var i = document.createElement("IMG");
        i.setAttribute("src", src);
        i.setAttribute("width", "50");
        i.setAttribute("onclick", "pizzaSnack()");
        i.setAttribute("id", "pizzaPizza");
        document.getElementById('addingFood').appendChild(i);
        pizzaSwtich = false;
        // this code will remove the upgrade button
        var parent = document.getElementById("parentDivTest");
        var child = document.getElementById("testButton");
        parent.removeChild(child);
    } else if (pizzaSwtich === false) {
        // this will prevent appending another pizza roll to the page
    } else {
        alert('you don\'t have enough money');
    }
}
