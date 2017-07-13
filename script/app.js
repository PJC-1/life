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
        // func          :  "coffeeBoost()",
        func          :  "testUseBoost()",           
        src           :  "./assets/coffee.png"
    },
    redBull: {
        width         :  "55",
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
        src           :  "./assets/redbull.png",
        // below are new key-values for boosts
        inject         :  "addingBoost",
        element        :  "IMG",
        parent         :  "boostParent",
        child          :  "boostUpgrade",
        newElement     :  "BUTTON",
        textNode       :  "Upgrade Boost",
        classAttribute :  "upgradeBtn",
        idAttribute    :  "boostUpgrade",
        clickAttribute :  "addRB()"
    },
    kind: {
        width          :  "65",
        id             :  "kID",
        fltrSwitch     :  true,
        description    :  "All KIND snacks are gluten-free, made from whole "
                          + "ingredients and low in sodium. Currently, their KIND"
                          + " Healthy Grains and KIND Healthy Grains Clusters are"
                          + " certified by the NON-GMO Project. All KIND bars "
                          + "range between 180-210 calories and have healthy fats"
                          + " and protein.",
        price          :  3.00,
        fullfillment   :  0,
        durration      :  15000,
        cashRate       :  200,
        rate           :  425,
        func           :  "kindBoost()",
        src            :  "./assets/kind.png",
        // below are new key-values for boosts
        inject         :  "addingBoost",
        element        :  "IMG",
        parent         :  "boostParent",
        child          :  "boostUpgrade",
        newElement     :  "BUTTON",
        textNode       :  "Upgrade Boost",
        classAttribute :  "upgradeBtn",
        idAttribute    :  "boostUpgrade",
        clickAttribute :  "addKD()"
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


//////////////////////////
// REFACTORED BROADCAST //
//////////////////////////

var broadCastObj = {
    boost: {
        id     : "appendBoostBCast",
        string : "You need more money.",
        time   : 3000
    },
    test: {
        id : "testingBroadcast",
        hungerString : "You are getting hungry try eatting some food.",
        moneyCoffeeString : "You need more money for this cup of joe.",
        coffeeCooldownString : "You need to wait before having more coffee.",
        time : 3000
    },
    upgrade: {
        id : "upgradeBroadcast",
        noHungryString : "You are not hungry now.",
        hungryNoMoneyString : "You are hungry, but don't have enough money for this item.",

    }
}

// Think about what is the best way to structure/organize the broadcast refactor.
// Maybe have all the cached strings together and then a separate broadcast object that contains the id and time value

// var expSign       =  "Exp: ";
// var hungerSign    =  "Hunger: ";
// var moneySign     =  "Money: $ ";
// var purchasedSign =  "Purchased: ";
// var notHungry     =  "You are not hungry now.";
// var noMoney       =  "You do not have enought money for that.";
// var hungryNoMoney =  "You are hungry, but don't have enough money for this item.";
// var tier1Locked   =  "You dont have enough money to unlock these tokens. Consider working more.";


// for consistency, perhaps rename the cast argument to castID, for readability.
// testing external repository connection.
function appendBoostBroadcast(cast, message,callback,time){
    document.getElementById(cast).innerHTML = message;
    // you can now pass arguments to the function inside setTimeout using Function.prototype.bind()
    // setTimeout(callback.bind(null,cast), time)
    setTimeout(function(){
        callback(cast);
    }, time);
}

// this is used in the appendBoostBroadcast() as the callback function in the setTimeout.
function clearBCast(castID){
    document.getElementById(castID).innerHTML = "";
}


//////////////////
// APPEND BOOST //
//////////////////

function switchChanger(fnc){
    fnc.switchy = false;
}

function appendBoost(
      boost,
      inject,
      user,
      mainSwitch,
      element,
      parent,
      child,
      newElement,
      textNode,
      classAttribute,
      idAttribute,
      clickAttribute,
      appendBroadcast,
      broadcast,
      callback
  ) {
    var b = boost;
    var injectDOM = document.getElementById(inject);
    if ((user.money >= b.price) && (mainSwitch.switchy === true)) {
        var x = document.createElement(element);
        x.setAttribute("width", b.width);
        x.setAttribute("src", b.src);
        x.setAttribute("id", b.id);
        x.setAttribute("onclick", b.func);
        injectDOM.appendChild(x);
        switchChanger(mainSwitch);
        var parentNode = document.getElementById(parent);
        var childNode = document.getElementById(child);
        parentNode.removeChild(childNode);
        var y = document.createElement(newElement);
        var z = document.createTextNode(textNode);
        y.appendChild(z);
        y.setAttribute("class", classAttribute);
        y.setAttribute("id", idAttribute);
        y.setAttribute("onclick", clickAttribute);
        document.getElementById(parent).appendChild(y);
    } else if (mainSwitch.switchy === false) {
        console.log("prevent duplicate boost");
    } else {
        appendBroadcast(broadcast.id, broadcast.string, callback, broadcast.time);
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
    if (userObj.money >= coffee.price && coffeeCoolDown === true) {
        var time = setInterval(addMoneyByTime, coffee.cashRate);
        var hungryLow = setInterval(decreaseHunger, coffee.rate);
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
        appendBoostBroadcast(broadCastObj.test.id, "You need more money for this cup of joe.", clearBCast, broadCastObj.test.time);
    } else if (coffeeCoolDown === false) {
        appendBoostBroadcast(broadCastObj.test.id, coffeeBreak, clearBCast, broadCastObj.test.time);
    }
}

// useBoost()
// ARGUMENTS:
// coolDown => from coffeeCoolDown, this should probably be part of the boost object
// boost => from coffee = boostObj.coffee
// userHunger => from uHunger = document.getElementById("userHunger")
// userMoney => from moneySpan = document.getElementById("money")
// uObject => from userObj.money, maybe just pass in the userObj for reusability
// moneyString => from moneySign
// hungeryString => from hungerSign
// appendBroadcast => from appendBoostBroadcast
// broadcastObject => from broadCastObj.test (this will cover broadCastObj.test and broadCastObj.id)
// broadcastString => from coffeeBreak
// callback => from clearBCast



var chill = {
    coffee : true
}

// think about adding the broadcasts first before futher optimizing
function useBoost(coolDown,boost,userHunger,userMoney,user,moneyString,hungerString){
    var b = boost;
    var uHunger = document.getElementById(userHunger);
    var uMoney = document.getElementById(userMoney);
    if (user.money >= b.price && coolDown === true) {
        var moneyUp = setInterval(increaseMoney, b.cashRate);
        var hungerDown = setInterval(decreaseHunger, b.rate);
        user.money -= b.price;
        uMoney.innerHTML = moneyString + user.money;
        setTimeout(boostDurration, b.durration);
        coolDown = false;
        function decreaseHunger() {
                user.hunger -= 1;
                uHunger.innerHTML = hungerString + user.hunger;
        }
        function increaseMoney() {
                user.money += 1;
                uMoney.innerHTML = moneyString + user.money;
        }
        function boostDurration() {
                clearInterval(moneyUp);
                clearInterval(hungerDown);
                setTimeout(coolDownSwitch, 3000);
        }
        function coolDownSwitch() {
                coolDown = true;
        }
    } else if (user.money <= b.price && coolDown === true) {
            // add the appendBoostBroadcast here
            console.log("useBoost() else if, user needs more money");
    // this is not working for some reason, look in to the coolDown false
    } else if (coolDown === false) {
            // add the appendBoostBroadcast here as well
            console.log("useBoost() else if coolDown equals false");
    }
}

function testUseBoost(){
        console.log("envoked testUseBoost()");
        useBoost(chill.coffee, boostObj.coffee,"userHunger","money",userObj,moneySign,hungerSign);
}

///////////////////
// REDBULL BOOST //
///////////////////

var rbCoolDown = true;

function redbullBoost() {
    var rb = boostObj.redBull;
    var uHunger = document.getElementById("userHunger");
    var uMoney = document.getElementById("money");
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
    } else if (userObj.money <= rb.price && rbCoolDown === true) {
        appendBoostBroadcast(broadCastObj.test.id, "You need more money for a redbull", clearBCast, broadCastObj.test.time);
        console.log("RB log when user needs more money to by a redbull");
    } else if (rbCoolDown === false) {
        // consider having multiple replies for the cooldown broadcasts, stored in an array and randomized
        appendBoostBroadcast(broadCastObj.test.id, "No double-fisting Redbulls at work.", clearBCast, broadCastObj.test.time);
        console.log("RB log for the cooldown.");
    }
}

// you can consider creating a object that can combine the
// rbSwitch and the rbCooldown into one location
var rbSwitch = {
    switchy : true
}

// adds redbull boost
function boostAdding() {
    appendBoost(
        boostObj.redBull,
        boostObj.redBull.inject,
        userObj,
        rbSwitch,
        boostObj.redBull.element,
        boostObj.redBull.parent,
        boostObj.redBull.child,
        boostObj.redBull.newElement,
        boostObj.redBull.textNode,
        boostObj.redBull.classAttribute,
        boostObj.redBull.idAttribute,
        boostObj.redBull.clickAttribute,
        appendBoostBroadcast,
        broadCastObj.boost,
        clearBCast
    );
}


////////////////
// KIND BOOST //
////////////////

var kdSwitch = {
    switchy : true
}

// adds kind boost
function addRB() {
    appendBoost(
        boostObj.kind,
        boostObj.kind.inject,
        userObj,
        kdSwitch,
        boostObj.kind.element,
        boostObj.kind.parent,
        boostObj.kind.child,
        boostObj.kind.newElement,
        boostObj.kind.textNode,
        boostObj.kind.classAttribute,
        boostObj.kind.idAttribute,
        boostObj.kind.clickAttribute,
        appendBoostBroadcast,
        broadCastObj.boost,
        clearBCast
    );
}

function addKD(){
    console.log("testing the new function wired to the onclick");
}

function kindBoost(){
    console.log("kindBoost is wired, woo hoo!");
}
