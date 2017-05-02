////////////////////
// CACHED STRINGS //
////////////////////

var expSign       =  "Exp: ";
var hungerSign    =  "Hunger: ";
var moneySign     =  "Money: $ ";
var purchasedSign =  "Purchased: ";
var notHungry     =  "You are not hungry now.";
var noMoney       =  "You do not have enought money for that.";
var coffeeBreak   =  "You need to wait before having more coffee.";
var hungryNoMoney =  "You are hungry, but don't have enough money for this item.";
var tier1Locked   =  "You dont have enough money to unlock these tokens. Consider working more.";


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
    },
    // you can build out some functionality for this hotdog
    hotDog: {
        fill  :  6,
        cost  :  5.00,
        src   :  "./assets/hotDog.png",
        level :  4
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
        description   :  "Coffee is a brewed drink prepared from roasted coffee "
                         +"beans. Coffee can have a stimulating effect on humans"
                         +" because of its caffeine content.",
        price         :  4.75,
        fullfillment  :  0,
        durration     :  5000,
        cashRate      :  285,
        rate          :  300,
        func          :  "coffeeBoost()",
        src           :  "./assets/coffee.png"
    },
    redBull: {
        width         :  "50",
        id            :  "rbID",
        fltrSwitch    :  true,
        description   :  "Redbull drinks have the effects that caffeine and sugar"
                         + "provide, but experts still argue about the possible "
                         + "effects of the other ingredients. Most of the effects"
                         + " of energy drinks on cognitive performance, such as "
                         + "increased attention and reaction speed, are primarily"
                         + " due to the presence of caffeine.",
        price         :  8.75,
        fullfillment  :  0,
        durration     :  10000,
        // currently your are using the rate in two places for two separe purposes
        // consider creating another rate: for decreasing hunger and for increasing money
        cashRate      :  200,
        rate          :  400,
        func          :  "redbullBoost()",
        src           :  "./assets/redbull.png"
    },
    kind: {
        width         :  "50",
        id            :  "kID",
        fltrSwitch    :  true,
        description   :  "All KIND snacks are gluten-free, made from whole "
                         + "ingredients and low in sodium. Currently, their KIND"
                         + " Healthy Grains and KIND Healthy Grains Clusters are"
                         + " certified by the NON-GMO Project. All KIND bars "
                         + "range between 180-210 calories and have healthy fats"
                         + " and protein.",
        price         :  3.00,
        fullfillment  :  0,
        durration     :  15000,
        cashRate      :  200,
        rate          :  425,
        function      :  "kindBoost()",
        src           :  "./assets/kind.png"
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

//  maybe find a solution to consolidate the broadcast system, from multiple to
//  a single way of broadcasting
function clearBroadcast() {
    var bCast = document.getElementById("broadcast");
    bCast.innerHTML = "";
}

function clearTestBroadcast() {
    var bCast = document.getElementById("testingBroadcast");
    bCast.innerHTML = "";
}

function clearUpgradeBroadcast() {
    var bCast = document.getElementById("upgradeBroadcast");
    bCast.innerHTML = "";
}

function clearTknBroadcast() {
    var bCast = document.getElementById("tknBroadcast");
    bCast.innerHTML = "";
}


////////////////
// EMPLOYMENT //
////////////////

(function upgradeJob() {
    var current = jobObj.internship.current;
    var employment = userObj.employment;
    current = true;
    console.log("current => " + current);
    employment.push(jobObj.internship);
    console.log(employment);
})();

(function () {
    var tSpan = document.getElementById("testingSpan");
    tSpan.innerHTML = jobObj.internship.title;
})();

// think about why you have to click the upgrade button twice before it works
function upgradeEmployment() {
    if (userObj.exp >= 100) {
        for (var key in jobObj) {
            if (jobObj.hasOwnProperty(key)) {
                if (jobObj[key].current === false) {
                    jobObj[key].current = true;
                    userObj.employment.push(jobObj[key]);
                    // splice the old job
                    userObj.employment.splice(0,1);
                    // using break to jump out of the loop.
                    break;
                } else {
                    console.log("this is the else condition");
                }
                console.log("This is after the first if");
            }
            console.log("This is after the second if");
        }
        console.log("this is after the for in loop, directly after the break.");
        document.getElementById("testingSpan").innerHTML = userObj.employment[0].title;
    } else {
        console.log("the if condition was not satisfied");
        document.getElementById("broadcast").innerHTML = "You dont have enough experience to upgrade your job.";
        setTimeout(clearBroadcast, 3000);
    }
}


///////////
// MONEY //
///////////

(function () {
    var uMoney = document.getElementById("money");
    uMoney.innerHTML = moneySign + userObj.money;
})();

if (userObj.money < 1) {
    userObj.money = 0;
    userObj.happiness -= 25;
}

// this fixed the hunger issue, just add this into
// the functions that effect innerHTML of user hunger
function checkHunger() {
    var uHunger = document.getElementById("userHunger");
    if (userObj.hunger < 1) {
        userObj.hunger = 1;
        uHunger.innerHTML = hungerSign + userObj.hunger;
        // add a reminder and also think about a reaction
        // to constantly hitting this reminder like productivity
    }
}


//////////////////
// PROGRESS BAR //
//////////////////

var progressSwitch = true;

function funTime() {
  if (progressSwitch === false) {
    // disabled onclick while progress bar is in use.
  } else {
    move();
  }
}

function move() {
    var width = 0;
    var elem = document.getElementById("myBar");
    var uBar = document.getElementById("myBar");
    var uExp = document.getElementById("userExp");
    var uLabel = document.getElementById("label");
    var uMoney = document.getElementById("money");
    var uHunger = document.getElementById("userHunger");
    // here you can set the milleseconds to add delay.
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            progressSwitch = false;
            width++;
            //this line is what increments the width attribute in the progress bar element
            elem.style.width = width + "%";
            uLabel.innerHTML = width * 1 + "%";
        }
        if (width === 100) {
            // find out why this is adding both money + hunger twice

            userObj.money += userObj.employment[0].money;
            userObj.hunger -= userObj.employment[0].hunger;

            checkHunger();
            // userObj.exp += jobObj.internship.exp;
            userObj.exp += userObj.employment[0].exp;
            uExp.innerHTML = expSign + userObj.exp;
            uHunger.innerHTML = hungerSign + userObj.hunger;
            uMoney.innerHTML = moneySign + userObj.money;
            uBar.setAttribute("style", "width: 0%");
            uLabel.innerHTML = "0%";
            progressSwitch = true;
        }
    }
}


/////////////////
// FAME-TOKENS //
/////////////////

var tOneSwitch = true;
var lessThanTen = "userObj.money < 10.00";
var greatThanTen = "userObj.exp >= 10.00";
var switchTrue = "tOneSwitch === true";
var xpLessTen = "userObj.exp < 10.00";

function unlockTierI() {
    var tierI = tokenObj.tierOne;
    var bCast = document.getElementById("tknBroadcast");
    var tInject = document.getElementById("tokenInject");
    if (userObj.money >= 100.00 && tOneSwitch === true) {
        for (var key in tierI) {
            // hasOwnProperty() filters out built-in key-value pairs inherited by
            // parent (i.e. prototype || __proto__)
            if (tierI.hasOwnProperty(key)) {
                // note how I am able to access the price.
                console.log(key + " ->" + tierI[key].price);
                var i = document.createElement("IMG");
                i.setAttribute("class", "img1");
                i.setAttribute("id", tierI[key].id);
                i.setAttribute("src", tierI[key].src);
                i.setAttribute("width", tierI[key].width);
                // i.setAttribute("style", "filter:blur(5px)");
                // you will need to add onclick as a token's key
                i.setAttribute("onclick", tierI[key].func);
                tInject.appendChild(i);
                // You needed webkit prefix to get this to work on safri (iphone)
                document.getElementById(tierI[key].id).style.WebkitFilter="blur(5px)";
            }
        }
        tOneSwitch = false;
    } else if (tOneSwitch === false) {
        // to prevent unlocking multiple times
    } else if (((lessThanTen) && (greatThanTen) && (switchTrue)) || ((lessThanTen) && (xpLessTen) && (switchTrue))) {
        bCast.innerHTML = tier1Locked;
        setTimeout(clearTknBroadcast, 3000);
    }
}


/////////////////
// RUBIKS CUBE //
/////////////////

function rmFltrRubiks() {
    var rubiks = tokenObj.tierOne.rubiks;
    var rRubiks = document.getElementById(rubiks.id);
    var uMoney = document.getElementById("money");
    var bCast = document.getElementById("tknBroadcast");
    var mMoney = "You need more money to purcahse this item.";
    if (userObj.money > rubiks.price && rubiks.fltrSwitch === true) {
        // incorporate fullfillment points
        userObj.money -= rubiks.price;
        userObj.tokens.push(rubiks);
        console.log("Checking userObjs tokens ", userObj.tokens)
        rRubiks.removeAttribute("style");
        uMoney.innerHTML = moneySign + userObj.money;
        rubiks.fltrSwitch = false;
    } else if (rubiks.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("fltrSwitch: " + rubiks.fltrSwitch);
    } else if (userObj.money < rubiks.price) {
        bCast.innerHTML = mMoney;
        setTimeout(clearTknBroadcast, 3000);
    }
}


////////////////
// AIR-JORDAN //
////////////////

function rmFltrJordan() {
    var jordan6 = tokenObj.tierOne.jordan6;
    var jordan = document.getElementById(jordan6.id);
    var uMoney = document.getElementById("money");
    var bCast = document.getElementById("tknBroadcast");
    var moreMoney = "You need more money to purcahse this item.";
    if (userObj.money > jordan6.price && jordan6.fltrSwitch === true) {
        userObj.money -= jordan6.price;
        userObj.tokens.push(jordan6);
        console.log("Checking userObjs tokens ", userObj.tokens)
        jordan.removeAttribute("style");
        uMoney.innerHTML = moneySign + userObj.money;
        jordan6.fltrSwitch = false;
    } else if (jordan6.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("fltrSwitch: " + jordan6.fltrSwitch);
    } else if (userObj.money < jordan6.price) {
        bCast.innerHTML = moreMoney;
        setTimeout(clearTknBroadcast, 3000);
    }
}


////////////
// IPHONE //
////////////

function rmFltrIphone() {
    var iphone = tokenObj.tierOne.iPhone;
    var phone = document.getElementById(iphone.id);
    var uMoney = document.getElementById("money");
    var bCast = document.getElementById("tknBroadcast");
    if (userObj.money > iphone.price && iphone.fltrSwitch === true) {
        userObj.money -= iphone.price;
        userObj.tokens.push(iphone);
        console.log("Checking userObjs tokens ", userObj.tokens)
        phone.removeAttribute("style");
        uMoney.innerHTML = moneySign + userObj.money;
        iphone.fltrSwitch = false;
    } else if (iphone.fltrSwitch === false) {
        // to prevent multiple purchasing
        console.log("iphoneSwitch: " + iphone.fltrSwitch);
    } else if (userObj.money < iphone.price) {
        bCast.innerHTML = "You need more money to purcahse this item.";
        setTimeout(clearTknBroadcast, 3000);
    }
}



////////////
// HUNGER //
////////////

var hunger = setInterval(gettingHungery, 60000);

function gettingHungery() {
    var uHunger = document.getElementById("userHunger");
    var bCast = document.getElementById("testingBroadcast");
    userObj.hunger -= 5;
    uHunger.innerHTML = hungerSign + userObj.hunger;
    checkHunger();
    if (userObj.hunger < 39) {
        bCast.innerHTML = "You are getting hungry try eatting some food.";
        setTimeout(clearTestBroadcast, 3000);
    }
}


///////////
// RAMEN //
///////////

function ramenSnack() {
    var bCast = document.getElementById("broadcast");
    var uMoney = document.getElementById("money");
    var uHunger = document.getElementById("userHunger");
    if (userObj.hunger <= 99 && userObj.money > 2.25) {
        userObj.hunger += 1;
        userObj.money -= 2.25;
        uHunger.innerHTML = hungerSign + userObj.hunger;
        uMoney.innerHTML = moneySign + userObj.money;
    } else if (userObj.hunger < 99) {
        bCast.innerHTML = hungryNoMoney;
        setTimeout(clearBroadcast, 3000);
    } else if (userObj.hunger > 99) {
        bCast.innerHTML = notHungry;
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
    var fAdd = document.getElementById("addingFood");
    var bCast = document.getElementById("broadcast");
    var fInject = document.getElementById("upgradeFoodInject");
    if (userObj.money > 10 && pizzaSwtich === true) {
        var i = document.createElement("IMG");
        i.setAttribute("src", src);
        i.setAttribute("width", "50");
        i.setAttribute("id", "pizzaPizza");
        i.setAttribute("onclick", "pizzaSnack()");
        fAdd.appendChild(i);
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
        fInject.appendChild(x);
    } else if (pizzaSwtich === false) {
        // this will prevent appending another pizza roll to the page
    } else {
        bCast.innerHTML = noMoney;
        setTimeout(clearBroadcast, 2000);
    }
}

function pizzaSnack() {
    var uMoney = document.getElementById("money");
    var uHunger = document.getElementById("userHunger");
    var upCast = document.getElementById("upgradeBroadcast");
    if (userObj.hunger <= 97 && userObj.money > 4.75) {
        userObj.money -= foodObj.pizzaSnack.cost;
        userObj.hunger += foodObj.pizzaSnack.fill;
        uMoney.innerHTML = moneySign + userObj.money;
        uHunger.innerHTML = hungerSign + userObj.hunger;
    } else if (userObj.hunger < 97 && userObj.money < 4.75) {
        upCast.innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 97) {
        upCast.innerHTML = notHungry;
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
    var happySrc = foodObj.cheeseBurger.src;
    var bCast = document.getElementById("broadcast");
    var foodAdd = document.getElementById("addingFood");
    if (userObj.money > 20 && cheeseSwitch === true) {
        var z = document.createElement("IMG");
        z.setAttribute("width", "50");
        z.setAttribute("src", happySrc);
        z.setAttribute("id", "happyHappy");
        z.setAttribute("onclick", "happySnack()");
        // you might need to take this out or create a new class for this
        // z.setAttribute("class", "upgradeBtn");
        foodAdd.appendChild(z);
        cheeseSwitch = false;
    } else if (cheeseSwitch === false) {
        // this will prevent appending another cheese burger
    } else {
        bCast.innerHTML = noMoney;
        setTimeout(clearBroadcast, 2000);
    }
}

function happySnack() {
    var uMoney = document.getElementById("money");
    var uHunger = document.getElementById("userHunger");
    var bCast = document.getElementById("upgradeBroadcast");
    if (userObj.hunger < 95 && userObj.money > 6.00) {
        userObj.money -= foodObj.cheeseBurger.cost;
        userObj.hunger += foodObj.cheeseBurger.fill;
        uHunger.innerHTML = hungerSign + userObj.hunger;
        uMoney.innerHTML = moneySign + userObj.money;
    } else if (userObj.hunger < 95 && userObj.money < 6.00) {
        bCast.innerHTML = hungryNoMoney;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger > 95) {
        bCast.innerHTML = notHungry;
        setTimeout(clearUpgradeBroadcast, 3000);
    } else if (userObj.hunger < 95 && userObj.money < 6.00){
        alert("you are hungry and without money.");
    }
}


//////////////////
// COFFEE BOOST //
//////////////////

var coffeeCoolDown = true;

function coffeeBoost() {
    var coffee = boostObj.coffee;
    var uHunger = document.getElementById("userHunger");
    var moneySpan = document.getElementById("money");
    var bCast = document.getElementById("testingBroadcast");
    if (userObj.money >= coffee.price && coffeeCoolDown === true) {
        var hungryLow = setInterval(decreaseHunger, coffee.rate);
        var time = setInterval(addMoneyByTime, coffee.cashRate);
        userObj.money -= coffee.price;
        moneySpan.innerHTML = moneySign + userObj.money;
        setTimeout(coffeeDurration, coffee.durration);
        coffeeCoolDown = false;
        function decreaseHunger() {
            userObj.hunger -= 1;
            uHunger.innerHTML = hungerSign + userObj.hunger;
        }
        function addMoneyByTime() {
            userObj.money += 1;
            moneySpan.innerHTML = moneySign + userObj.money;
        }
        function coffeeDurration() {
            clearInterval(time);
            clearInterval(hungryLow);
            setTimeout(coolDownSwitch, 3000);
        }
        function coolDownSwitch() {
            coffeeCoolDown = true;
        }
    } else if (userObj.money <= coffee.price && coffeeCoolDown === true) {
        bCast.innerHTML = "You need more money for this cup of joe.";
        setTimeout(clearTestBroadcast, 2000);
    } else if (coffeeCoolDown === false) {
        bCast.innerHTML = coffeeBreak;
        setTimeout(clearTestBroadcast, 2000);
    }
}


///////////////////
// REDBULL BOOST //
///////////////////

var rbSwitch = true;

// appends Redbull to the DOM
function boostAdding() {
    var rb = boostObj.redBull;
    var inject = document.getElementById("addingBoost");
    if (userObj.money >= rb.price && rbSwitch === true) {
        var x = document.createElement("IMG");
        x.setAttribute("width", rb.width);
        x.setAttribute("src", rb.src );
        x.setAttribute("id", rb.id);
        x.setAttribute("onclick", rb.func);
        inject.appendChild(x);
        rbSwitch = false;
        var parent = document.getElementById("boostParent");
        var child = document.getElementById("boostUpgrade");
        parent.removeChild(child);
        var y = document.createElement("BUTTON");
        var z = document.createTextNode("Upgrade Boost");
        y.appendChild(z);
        y.setAttribute("class", "upgradeBtn");
        y.setAttribute("id", "boostUpgrade");
        y.setAttribute("onclick", "addRB()");
        document.getElementById("boostParent").appendChild(y);
    } else if ( rbSwitch === false ) {
        console.log("prevented duplicate redbulls");
    } else {
        // consider adding a broadcast here
        console.log("else if");
    }
}

var rbCoolDown = true;

function redbullBoost() {
    var rb = boostObj.redBull;
    var uMoney = document.getElementById("money");
    var uHunger = document.getElementById("userHunger");
    if (userObj.money >= rb.price && rbCoolDown === true) {
        var moneyUp = setInterval(increaseMoney, rb.cashRate);
        var hungeryLow = setInterval(decreaseHunger, rb.rate);
        userObj.money -= rb.price;
        uMoney.innerHTML = moneySign + userObj.money;
        setTimeout(redbullDurration, rb.durration);
        rbCoolDown = false;
        function decreaseHunger() {
            userObj.hunger -= 1;
            uHunger.innerHTML = hungerSign + userObj.hunger;
        }
        function increaseMoney() {
            userObj.money += 1;
            uMoney.innerHTML = moneySign + userObj.money;
        }
        function redbullDurration() {
            clearInterval(moneyUp);
            clearInterval(hungeryLow);
            setTimeout(coolDownSwitch, 3000);
        }
        function coolDownSwitch() {
            rbCoolDown = true;
        }
    } else {
        console.log("this is the else for the rebullBoost");
    }
}

// note that, running the function appendBoost, does not set the kdSwitch variable
// this is because kdSwitch is passed through to the function an argument, which
// will not allow it to be affected by changes within the function. Reffer to note
// within the appendBoost function.
// var kdSwitch = true;
var switches = {
    kdSwitch : true
};

// function addRB() {
   function tempFunctionName() {
    var kd = boostObj.kind;
    var inject = document.getElementById("addingBoost");
    if (userObj.money >= kd.price && kdSwitch === true) {
        var x = document.createElement("IMG");
        x.setAttribute("width", kd.width);
        x.setAttribute("src", kd.src);
        x.setAttribute("id", kd.id);
        x.setAttribute("onclick", kd.func);
        inject.appendChild(x);
        kdSwitch = false;
        var parent = document.getElementById("boostParent");
        var child = document.getElementById("boostUpgrade");
        parent.removeChild(child);
        var y = document.createElement("BUTTON");
        var z = document.createTextNode("Upgrade Boost");
        y.appendChild(z);
        y.setAttribute("class", "upgradeBtn");
        y.setAttribute("id", "boostUpgrade");
        // find a way to not have this value hardcoded
        y.setAttribute("onclick", "addKD");
        document.getElementById("boostParent").appendChild(y);
    } else if (kdSwitch === false) {
        console.log("prevent duplicate kind bar");
    } else {
        console.log("else in addRB function");
    }
}

// list of all the parameters for this function, from the above example
// - boost => boostObj.kind, maybe just grab the boostObj and then access the boost you want in the function when caching the local variable
// - inject => "addingBoost" from document.getElementById("addingBoost")
// - user => userObj
//   can't name it switch, its a reserved word in javascript
// - switch => kdSwitch
// - element => "IMG" from document.createElement("IMG") maybe make this a key in boostObj
// - parent => "boostParent" from document.getElementById("boostParent")
// - child => "boostUpgrade" from document.getElementById("boostUpgrade")
// - newElement => "BUTTON" from document.createElement("BUTTON")
// - textNode => "Upgrade Boost" from document.createTextNode("Upgrade Boost")
// - classAttribute => "upgradeBtn" from y.setAttribute("class", "upgradeBtn")
// - idAttribute => "boostUpgrade" from y.setAttribute("id", "boostUpgrade")
// - clickAttribute => "addKD" from y.setAttribute("onlick", "addKD")


function appendBoost(boost,inject,user,mainSwitch,element,parent,child,newElement,textNode,classAttribute,idAttribute,clickAttribute) {
    // think about changing all of these variable names to make them more general
    // to suit a more modular functionality.
    var kd = boost;
    var injectDOM = document.getElementById(inject);
    if (user.money >= kd.price && mainSwitch === true) {
        var x = document.createElement(element);
        x.setAttribute("width", kd.width);
        x.setAttribute("src", kd.src);
        x.setAttribute("id", kd.id);
        x.setAttribute("onclick", kd.func);
        injectDOM.appendChild(x);
        // If a function changes an argument's value, it does not change the parameter's original value.
        // so mainSwitch might not work because you want to change the original value of mainSwitch.
        // BUT NOTE: Changes to object properties are visible (reflected) outside the function.
        // so perhaps you can change the mainSwitch to be a switchObj.
        mainSwitch = false;
        var parentNode = document.getElementById(parent);
        var childNode = document.getElementById(child);
        parentNode.removeChild(childNode);
        var y = document.createElement(newElement);
        var z = document.createTextNode(textNode);
        y.appendChild(z);
        y.setAttribute("class", classAttribute);
        y.setAttribute("id", idAttribute);
        // find a way to not have this value hardcoded
        y.setAttribute("onclick", clickAttribute);
        document.getElementById(parent).appendChild(y);
    } else if (mainSwitch === false) {
        console.log("prevent duplicate kind bar");
    } else {
        console.log("else in addRB function");
    }
}

function addRB() {

    appendBoost(boostObj.kind, "addingBoost", userObj, switches.kdSwitch, "IMG", "boostParent", "boostUpgrade", "BUTTON", "Upgrade Boost", "upgradeBtn", "boostUpgrade", "addKD");

}
