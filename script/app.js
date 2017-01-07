////////////////////
// CACHED STRINGS //
////////////////////
var moneySign     =  "Money: $ ";
var purchasedSign =  "Purchased: ";
var hungerSign    =  "Hunger: ";
var hungryNoMoney =  "You are hungry, but don't have enough money for this item.";
var notHungry     =  "You are not hungry now.";

/////////////////
// USER OBJECT //
/////////////////
var userObj = {
    employment:   [
                      {
                          // intern will be the default job for the user
                          internship: {
                              title        :   "Intern",
                              description  :   "The Web Development Intern will work closely with the Executive Director and staff on a variety of digital projects. The intern will conceptualize and manage the organization’s website as well as format and design electronic newsletters for members and families. This position helps to extend the resources in order to better assist and meet the needs of our members and the families that we serve",
                              level        :   1,
                              money        :   1.00,
                              exp          :   5,
                              hunger       :   .5,
                              fullfillment :   0,
                              current      :   true
                          }
                      }
                  ],
    money        :  0.00,
    hunger       :  75,
    foodLevel    :  1,
    happiness    :  75,
    exp          :  0,
    level        :  1,
    skills       :  [],
    fullfillment :  0
}

/////////////////
// FOOD OBJECT //
/////////////////
var foodObj = {
    ramenSnack: {
        fill  :  1,
        cost  :  2.25,
        src   :  "./assets/ramen.png",
        level :  1
    },
    pizzaSnack: {
        fill  :  3,
        cost  :  4.75,
        src   :  "./assets/pizzaRolls.png",
        level :  2
    },
    happySnack: {
        fill  :  5,
        cost  :  6.00,
        src   :  "./assets/happyMeal.png",
        level :  3
    },
    cheeseBurger: {
        fill  :  5,
        cost  :  6.00,
        src   :  "./assets/cheeseBurger.png",
        level :  3
    }
}

/////////////////
// JOBS OBJECT //
/////////////////
var jobObj = {
    internship: {
        title        :  "Intern",
        description  :  "The Web Development Intern will work closely with the Executive Director and staff on a variety of digital projects. The intern will conceptualize and manage the organization’s website as well as format and design electronic newsletters for members and families. This position helps to extend the resources in order to better assist and meet the needs of our members and the families that we serve",
        level        :  1,
        money        :  1.00,
        exp          :  5,
        hunger       :  .5,
        fullfillment :  0,
        current      :  true
    },
    supportEngineer: {
        title        :  "Software Support Engineer",
        description  :  "Support Engineers deliver effective technical customer support to our rapidly growing customer base, delivering solutions to both technical and non-technical end users while also supporting a wide range of technologies. Support Engineers may be required to be on-call on a rotating basis throughout the year.",
        level        :  2,
        money        :  3.00,
        exp          :  10,
        hunger       :  2,
        fullfillment :  0,
        current      :  false
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
function clearBroadcast() {
    document.getElementById('broadcast').innerHTML = "";
}

////////////////
// EMPLOYMENT //
////////////////

// test function to upgrade users job
function upgradeJob() {
 // add code here that will push the next job into the userObj.employment array
 jobObj.supportEngineer
 userObj.employment.push( jobObj.supportEngineer);
 console.log(userObj.employment);
}

///////////
// MONEY //
///////////

// self-invoking function, to display the money when the page is first loaded
(function () {
    document.getElementById("moneySpan").innerHTML = moneySign + userObj.money;
})();

var time = setInterval(addMoneyByTime, 1700);

function addMoneyByTime(){
    userObj.money += 0.25;
    document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
}

if (userObj.money < 1){
    // at some point change alert to something else
    // alert("You officially broke");
    userObj.money = 0;
    userObj.happiness -= 25;
}

//////////////////
// PROGRESS BAR //
//////////////////
function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
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
            document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
            document.getElementById('myBar').setAttribute("style", "width: 0%");
            document.getElementById('label').innerHTML = "0%";
        }
    }
}

// need to check if this function is necessary, might have been created
// with the intension of combining functionality, but as it stands it seems to
// only have the move(), so possibily delete it.
function funTime() {
    var elem = document.getElementById("myBar");
    move();
}

//////////
// WORK //
//////////

// self-invoking function, you have to add parentheses around the function to
// indicate that it is a function expression:
(function () {
    document.getElementById("testingSpan").innerHTML = userObj.employment[0].internship.title;
})();



////////////
// HUNGER //
////////////
var hunger = setInterval(gettingHungery, 60000);

function gettingHungery() {
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
function ramenSnack() {
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
function clearUpgradeBroadcast() {
    var emptyString = document.getElementById('upgradeBroadcast').innerHTML = "";
}

// wired to the onclick in index.html
function pizzaSnack() {
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

function testAdding() {
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
        // create a new upgrade button for the happy meal
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("upgrade");
        x.appendChild(t);
        x.setAttribute("id", "happyButton");
        x.setAttribute("onclick", "addCheese()");
        document.getElementById('upgradeFoodInject').appendChild(x);
    } else if (pizzaSwtich === false) {
        // this will prevent appending another pizza roll to the page
    } else {
        alert('you don\'t have enough money');
    }
}

///////////////////
// CHEESE BURGER //
///////////////////
var cheeseSwitch = true;

function addCheese() {
    // create a new upgrade button
    var happySrc = foodObj.cheeseBurger.src;
    if (userObj.money > 15 && cheeseSwitch === true){
        var z = document.createElement("IMG");
        z.setAttribute("src", happySrc);
        z.setAttribute("width", "50");
        z.setAttribute("onclick", "happySnack()");
        z.setAttribute("id", "happyHappy");
        document.getElementById('addingFood').appendChild(z);
        happySwitch = false;
    } else if (cheeseSwitch === false) {
        // this will prevent appending another happy meal
    } else {
        alert('you don\'t have enought money');
    }
}

function happySnack() {
    console.log("testing happySnack onclick");
}
