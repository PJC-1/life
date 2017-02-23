////////////////////
// CACHED STRINGS //
////////////////////

var moneySign     =  "Money: $ ";
var expSign       =  "Exp: ";
var purchasedSign =  "Purchased: ";
var hungerSign    =  "Hunger: ";
var hungryNoMoney =  "You are hungry, but don't have enough money for this item.";
var notHungry     =  "You are not hungry now.";
var noMoney       =  "You do not have enought money for that.";


/////////////////
// USER OBJECT //
/////////////////

var userObj = {
    employment   :  [],
    money        :  0.00,
    hunger       :  75,
    foodLevel    :  1,
    happiness    :  75,
    mood         :  [],
    exp          :  0,
    level        :  1,
    skills       :  [],
    tokens       :  [],
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


//////////////////
// BOOST OBJECT //
//////////////////

var boostObj = {
    coffee: {
        width         :  "50",
        id            :  "coffeeID",
        fltrSwitch    :  true,
        description   :  "Coffee is a brewed drink prepared from roasted coffee beans. Coffee can have a stimulating effect on humans because of its caffeine content.",
        price         :  4.75,
        fullfillment  :  0,
        durration     :  5000,
        rate          :  300,
        func          :  "coffeeBoost()",
        src           :  "./assets/coffee.png"
    },
    redBull: {
        width         :  "50",
        id            :  "rbID",
        fltrSwitch    :  true,
        description   :  "Red Bull gives you wings",
        price         :  8.75,
        fullfillment  :  0,
        durration     :  10000,
        rate          :  100,
        func          :  "redbullBoost()",
        src           :  "./assets/redbull.png"
    }
}


/////////////////
// JOBS OBJECT //
/////////////////

var jobObj = {
        internship: {
            title        :  "Intern",
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
            exp          :  2.5,
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
            exp          :  5,
            hunger       :  2,
            fullfillment :  0,
            current      :  false
        }
}


////////////////////////
// FAME-TOKENS OBJECT //
////////////////////////

var tokenObj = {
    tierOne: {
        rubiks: {
            src          :  "./assets/rubiks.png",
            width        :  "50",
            id           :  "rubiksID",
            func         :  "rmFltrRubiks()",
            fltrSwitch   :  true,
            description  :  "3-D combination puzzle",
            price        :  4.75,
            fullfillment :  10
        },
        jordan6: {
            src          :  "./assets/jordan6.png",
            width        :  "75",
            id           :  "jordanID",
            func         :  "rmFltrJordan()",
            fltrSwitch   :  true,
            description  :  "Jordan 6 Retro Black Infrared",
            price        :  199.25,
            fullfillment :  0
        },
        iPhone: {
            src          :  "./assets/iPhone.png",
            width        :  "60",
            id           :  "iphoneID",
            func         :  "rmFltrIphone()",
            fltrSwitch   :  true,
            description  :  "32GB Apple iPhone 7 Plus",
            price        :  769.75,
            fullfillment :  0
        }
    },
    tierTwo: {
    // empty for now
    },
    tierThree: {
    // empty for now
    }
};


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

function clearUpgradeBroadcast() {
    document.getElementById('upgradeBroadcast').innerHTML = "";
}

function clearTknBroadcast() {
    document.getElementById('tknBroadcast').innerHTML = "";
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

// create a function to upgrade to the next job
function supportUpgrade() {
    // this will have to push the new job into the userObj
    // and then iterate to that new job, this might change how the rest of the
    // functionality interacts with the jobs. look into it.
}

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

// maybe you could take this out, and replace it for boosts
// var time = setInterval(addMoneyByTime, 1700);
//
// function addMoneyByTime() {
//     userObj.money += 0.25;
//     document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
// }

if (userObj.money <= 0) {
    // you can broadcast a message
    userObj.money = 0;
    userObj.happiness -= 25;
}


//////////////////
// PROGRESS BAR //
//////////////////

var progressSwitch = true;

function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    // here you can set the milleseconds to add delay.
    var id = setInterval(frame, 20);
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
        if (width === 100) {
            // find out why this is adding both money + hunger twice
            userObj.money += jobObj.internship.money;
            userObj.hunger -= jobObj.internship.hunger;
            // exp is not yet wired up
            userObj.exp += jobObj.internship.exp;
            document.getElementById('userExp').innerHTML = expSign + userObj.exp;
            document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
            document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
            document.getElementById('myBar').setAttribute("style", "width: 0%");
            document.getElementById('label').innerHTML = "0%";
            progressSwitch = true;
        }
    }
}

function funTime() {
    if (progressSwitch === false) {
        // disabled onclick while progress bar is in use.
        console.log("working...");
    } else {
        move();
    }
}


/////////////////
// FAME-TOKENS //
/////////////////

var tOneSwitch = true;

function unlockTierI() {
    var tierI = tokenObj.tierOne;
    if (userObj.money >= 10.00 && tOneSwitch === true) {
        for (var key in tierI) {
            // hasOwnProperty() filters out built-in key-value pairs inherited by
            // parent (i.e. prototype || __proto__)
            if (tierI.hasOwnProperty(key)) {
                // note how I am able to access the price.
                console.log(key + " ->" + tierI[key].price);
                var i = document.createElement("IMG");
                i.setAttribute("src", tierI[key].src);
                i.setAttribute("width", tierI[key].width);
                i.setAttribute("id", tierI[key].id);
                i.setAttribute("class", "img1");
                i.setAttribute("style", "filter:blur(5px)");
                // you will need to add onclick as a token's key
                i.setAttribute("onclick", tierI[key].func);
                document.getElementById("tokenInject").appendChild(i);
            }
        }
        tOneSwitch = false;
    } else if (tOneSwitch === false) {
        // to prevent unlocking multiple times
    } else if (((userObj.money < 10.00) && (userObj.exp >= 10.00) && (tOneSwitch === true)) || ((userObj.money < 10.00) && (userObj.exp < 10.00) && (tOneSwitch === true))) {
        document.getElementById("tknBroadcast").innerHTML = "You are unworthy of unlocking Tier-I. Consider working more.";
        setTimeout(clearTknBroadcast, 3000);
    }
}


/////////////////
// RUBIKS CUBE //
/////////////////

function rmFltrRubiks() {
    var rubiks = tokenObj.tierOne.rubiks;
    if (userObj.money > rubiks.price && rubiks.fltrSwitch === true) {
        // incorporate fullfillment points
        userObj.money -= rubiks.price;
        userObj.tokens.push(rubiks);
        console.log("Checking userObjs tokens ", userObj.tokens)
        document.getElementById(rubiks.id).removeAttribute("style");
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
        rubiks.fltrSwitch = false;
    } else if (rubiks.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("fltrSwitch: " + rubiks.fltrSwitch);
    } else if (userObj.money < rubiks.price) {
        document.getElementById("tknBroadcast").innerHTML = "You need more money to purcahse this item.";
        setTimeout(clearTknBroadcast, 3000);
    }
}


////////////////
// AIR-JORDAN //
////////////////

function rmFltrJordan() {
    var jordan6 = tokenObj.tierOne.jordan6;
    if (userObj.money > jordan6.price && jordan6.fltrSwitch === true) {
        userObj.money -= jordan6.price;
        userObj.tokens.push(jordan6);
        console.log("Checking userObjs tokens ", userObj.tokens)
        document.getElementById(jordan6.id).removeAttribute("style");
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
        jordan6.fltrSwitch = false;
    } else if (jordan6.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("fltrSwitch: " + jordan6.fltrSwitch);
    } else if (userObj.money < jordan6.price) {
        document.getElementById("tknBroadcast").innerHTML = "You need more money to purcahse this item.";
        setTimeout(clearTknBroadcast, 3000);
    }
}


////////////
// IPHONE //
////////////

function rmFltrIphone() {
    var iphone = tokenObj.tierOne.iPhone;
    if (userObj.money > iphone.price && iphone.fltrSwitch === true) {
        userObj.money -= iphone.price;
        userObj.tokens.push(iphone);
        console.log("Checking userObjs tokens ", userObj.tokens)
        document.getElementById(iphone.id).removeAttribute("style");
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
        iphone.fltrSwitch = false;
    } else if (iphone.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("iphoneSwitch: " + iphone.fltrSwitch);
    } else if (userObj.money < iphone.price) {
        document.getElementById("tknBroadcast").innerHTML = "You need more money to purcahse this item.";
        setTimeout(clearTknBroadcast, 3000);
    }
}


///////////////////
// REMOVE FILTER //
///////////////////

// you will need to figure out all the different arguments so that you can use
// the removeFilterTkn function for all the tokens.

function removeFilterTkn(userObject, tokenObject) {
    // use an if condition that checks the token's swtich and compares the user's
    // money to the token's price
    // if that condition is met then subtract the tokens price to the users money
    // push the token into the user's tokens
    // remove the filter attribute
    // update the users money in the view
    // set the filterSwitch to false
    // else if the filterSwitch is equal to false then nothing
    // else if condition that users money is less than token's price then broadcast
}


////////////
// HUNGER //
////////////

var hunger = setInterval(gettingHungery, 60000);

function gettingHungery() {
    userObj.hunger -= 5;
    document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
    // hunger reminder
    if (userObj.hunger < 39) {
        document.getElementById('testingBroadcast').innerHTML = "You are getting hungry try eatting some food.";
        setTimeout(clearTestBroadcast, 3000);
    }
    if (userObj.hunger <= 0) {
        userObj.hunger = 0;
    }
}


///////////
// RAMEN //
///////////

function ramenSnack() {
    if (userObj.hunger <= 99 && userObj.money > 2.25) {
        userObj.hunger += 1;
        userObj.money -= 2.25;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
    } else if (userObj.hunger < 99) {
        document.getElementById('broadcast').innerHTML = hungryNoMoney;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger > 99) {
        document.getElementById('broadcast').innerHTML = notHungry;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger < 99 && userObj.money < 2.25) {
        alert("you are hungry and without money.");
    }
}


///////////
// PIZZA //
///////////

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

function pizzaSnack() {
    if (userObj.hunger <= 97 && userObj.money > 4.75) {
        userObj.hunger += foodObj.pizzaSnack.fill;
        userObj.money -= foodObj.pizzaSnack.cost;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
    } else if (userObj.hunger < 97 && userObj.money < 4.75) {
        document.getElementById('upgradeBroadcast').innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 97) {
        document.getElementById('upgradeBroadcast').innerHTML = notHungry;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger < 97 && userObj.money < 4.75) {
        alert("you are hungry and without money.");
    }
}


///////////////////
// CHEESE BURGER //
///////////////////

var cheeseSwitch = true;

function addCheese() {
    // create a new upgrade button
    var happySrc = foodObj.cheeseBurger.src;
    if (userObj.money > 20 && cheeseSwitch === true) {
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
    if (userObj.hunger < 95 && userObj.money > 6.00) {
        userObj.hunger += foodObj.cheeseBurger.fill;
        userObj.money -= foodObj.cheeseBurger.cost;
        document.getElementById('userHunger').innerHTML = hungerSign + userObj.hunger;
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
    } else if (userObj.hunger < 95 && userObj.money < 6.00) {
        document.getElementById('upgradeBroadcast').innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 95) {
        document.getElementById('upgradeBroadcast').innerHTML = notHungry;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger < 95 && userObj.money < 6.00){
        alert("you are hungry and without money.");
    }
}


///////////
// BOOST //
///////////

function coffeeBoost() {
    var coffee = boostObj.coffee;
    // use an if statement to place a condition that checks the users money vs boost cost
    var time = setInterval(addMoneyByTime, coffee.rate);
    function addMoneyByTime() {
        userObj.money += 1;
        document.getElementById('moneySpan').innerHTML = moneySign + userObj.money;
    }
    setTimeout(coffeeDurration, coffee.durration);
    function coffeeDurration() {
        clearInterval(time);
    }
}

function boostAdding() {
    console.log("this is wired to the boost upgrade btn");
}
