////////////////////
// CACHED STRINGS //
////////////////////

var moneySign     =  "Money: $ ";
var purchasedSign =  "Purchased: ";
var hungerSign    =  "Hunger: ";
var hungryNoMoney =  "You are hungry, but don't have enough money for this item.";
var notHungry     =  "You are not hungry now.";
var noMoney       =  "You do not have enought money for that."


/////////////////
// USER OBJECT //
/////////////////

var userObj = {
    // just use a self-invoking function to add the default job.
    // NOTE: keeping the jobObj as an object instead of an array will be a better
    // idea, and then we can keep employment as an array, for now.
    employment:   [],
    money        :  0.00,
    hunger       :  75,
    foodLevel    :  1,
    happiness    :  75,
    // maybe mood can effect productivity and be tied to mini-games
    mood         :  [],
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
            // this is the only way to do a multi line string that seems to not
            // break in any other situation, but it doesn't look very nice, look
            // into it
            description  :  "The Web Development Intern will work closely with "
                            + "the Executive Director and staff on a variety of "
                            + "digital projects. The intern will conceptualize "
                            + "and manage the organization’s website as well as "
                            + "format and design electronic newsletters for "
                            + "members and families. This position helps to "
                            + "extend the resources in order to better assist "
                            + "and meet the needs of our members and the "
                            + "families that we serve",
            level        :  1,
            money        :  1.00,
            exp          :  5,
            hunger       :  .5,
            fullfillment :  0,
            current      :  true
        },
        supportEngineer: {
            title        :  "Software Support Engineer",
            description  :  "Support Engineers deliver effective technical "
                            + "customer support to our rapidly growing customer "
                            + "base, delivering solutions to both technical and "
                            + "non-technical end users while also supporting a "
                            + "wide range of technologies. Support Engineers may"
                            + " be required to be on-call on a rotating basis "
                            + "throughout the year.",
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

//  maybe find a solution to consolidate the broadcast system, from multiple to
//  a single way of broadcasting
function clearTestBroadcast() {
    document.getElementById('testingBroadcast').innerHTML = "";
}


////////////////
// EMPLOYMENT //
////////////////

// test function to upgrade users job
(function upgradeJob() {
    // add code here that will push the next job into the userObj.employment array
    // this seems to work beter if the jobObj is an array of objects instead of an
    // object of objects. NOTE: look into this futher because accessing objects is
    // a lot easier than having to go through an array everytime.
    // doing length - 1 could be useful later on for upgrading
    userObj.employment.push(jobObj.internship);
    console.log(userObj.employment);
})();

// self-invoking function, you have to add parentheses around the function to
// indicate that it is a function expression:
(function () {
    document.getElementById("testingSpan").innerHTML = jobObj.internship.title;
})();


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

// creating a switch to disable the job button while doing a job.
var progressSwitch = true;

function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    // here you can set the milleseconds to add delay.
    var id = setInterval(frame, 75);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            progressSwitch = false;
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
            progressSwitch = true;
        }
    }
}

// need to check if this function is necessary, might have been created
// with the intension of combining functionality, but as it stands it seems to
// only have the move(), so possibily delete it.
function funTime() {
    if (progressSwitch === false){
        // disabled onclick while progress bar is in use.
        console.log("working...");
    } else {
        move();
    }
}


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
        setTimeout(clearTestBroadcast, 3000);
    }
    if (userObj.hunger < 0){
        userObj.hunger = 0;
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

function pizzaSnack() {
    if (userObj.hunger <= 97 && userObj.money > 4.75){
        userObj.hunger += foodObj.pizzaSnack.fill;
        userObj.money -= foodObj.pizzaSnack.cost;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 97 && userObj.money < 4.75) {
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

// change the name of this function to something else
function testAdding() {
    var src = foodObj.pizzaSnack.src;
    if (userObj.money > 10 && pizzaSwtich === true) {
        var i = document.createElement("IMG");
        i.setAttribute("src", src);
        i.setAttribute("width", "50");
        i.setAttribute("onclick", "pizzaSnack()");
        i.setAttribute("id", "pizzaPizza");
        // i.setAttribute("class", "upgradeBtn");
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
        // add a "upgradeBtn" class to this button
        x.setAttribute("class", "upgradeBtn");
        document.getElementById('upgradeFoodInject').appendChild(x);
    } else if (pizzaSwtich === false) {
        // this will prevent appending another pizza roll to the page
    } else {
        document.getElementById("broadcast").innerHTML = noMoney;
        setTimeout(clearBroadcast, 2000);
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
        // you might need to take this out or create a new class for this
        // z.setAttribute("class", "upgradeBtn");
        document.getElementById('addingFood').appendChild(z);
        cheeseSwitch = false;
    } else if (cheeseSwitch === false) {
        // this will prevent appending another cheese burger
    } else {
        document.getElementById("broadcast").innerHTML = noMoney;
        setTimeout(clearBroadcast, 2000);
    }
}

function happySnack() {
    if (userObj.hunger < 95 && userObj.money > 6.00){
        userObj.hunger += foodObj.cheeseBurger.fill;
        userObj.money -= foodObj.cheeseBurger.cost;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 95 && userObj.money < 6.00){
        document.getElementById('upgradeBroadcast').innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 95) {
        document.getElementById('upgradeBroadcast').innerHTML = notHungry;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger < 95 && userObj.money < 6.00){
        alert("you are hungry and without money.");
    }
}
