// Edit these here to test different types of trees

// Test with eventSP
let jsonSP = false;

// Test with event SSR
let jsonSSR = false;

// Test with event SR
let jsonSR = false;

let timesToPull = 100000;


// Gem tree looks good
// Goal
// SP & SSR = 1%
// SR = 10%
// R = 89%

// Event SP looks good
// Goal
// Event SP = 1.5%
// SP & SSR = 1%
// SR = 10%
// R = 87.5%

// Event SSR
// Goal
// Event SSR = 1.5%
// SP & SSR = 1%
// SR = 10%
// R = 87.5%

// Event SSR and SP
// Goal
// Event SP = 0.75%
// Event SSR = 0.75%
// SP & SSR = 1%
// SR = 10%
// R = 87.5%


// ***********************
let totalTimesPulled = 0;
let timesPulled = 0;
let resultsContainer = document.getElementById("results");

// Declaring the drop rate variables
let dropSP = 0;
let dropEventSSR = 0;
let dropStandardSSR = 1;
let dropSR = 10;
let dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;

// Checking and updating the drop rate
if (jsonSR == true && jsonSP == false && jsonSSR == false) {
    console.log("SR only");
    // eventSR only, and has been merged with standard SR. Drop rates like standard wish tree
    dropSP = 0;
    dropEventSSR = 0;
    dropStandardSSR = 1;
    dropSR = 10;
    dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;
}
else if (jsonSP == true && jsonSSR == false) {
    // Only eventSP
    console.log("SP");
    dropSP = 1.5;
    dropEventSSR = 0;
    dropStandardSSR = 1;
    dropSR = 10;
    dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;
}
else if (jsonSP == true && jsonSSR == true) {
    console.log("SP and SSR");
    // Event SP and event SSR
    dropSP = 1;
    dropEventSSR = 1;
    dropStandardSSR = 0.5;
    dropSR = 10;
    dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;
}
else if (jsonSSR == true && jsonSR == false || jsonSSR == true && jsonSR == true ) {
    console.log("SSR only, or SSR and SR");
    // eventSSR only, I'm assuming that eventSSRs run by themselves if there are no SRs
    // or eventSSR because eventSR are combined w/ standard sr in the begginging
    dropSP = 0;
    dropEventSSR = 1.5;
    dropStandardSSR = 1;
    dropSR = 10;
    dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;
}
else {
    console.log("Standard Gem Tree");
    // Standard Wish tree
    dropSP = 0;
    dropEventSSR = 0;
    dropStandardSSR = 1;
    dropSR = 10;
    dropR = 100 - dropSP - dropEventSSR - dropStandardSSR - dropSR;
}
let minSPnum = 100 - dropSP;
let minEventSSRnum = minSPnum - dropEventSSR;
let minStandardSSRnum = minEventSSRnum - dropStandardSSR;
let minSRnum = minStandardSSRnum - dropSR;

console.log("minSPnum: " + minSPnum);
console.log("minEventSSRnum: " + minEventSSRnum);
console.log("minStandardSSRnum: " + minStandardSSRnum);
console.log("minSRnum: " + minSRnum);

// random decimal
function rollWithDecimal() {
    let int = getRandomInt(1, 100);
    let deci = getRandomInt(0, 9);
    let secondDeci = getRandomInt(0, 9);
    let strNum = int + "." + deci + secondDeci;
    let finalNumber = parseFloat(strNum);
    return finalNumber;
}

// Random number from 1 to 100 if called with
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Declare actual result variables
let actualRnum = 0;

let actualKingSSR = 0;
let actualKingSR = 0;
let actualKingR = 0;

let actualEventSPnum = 0;
let actualEventSSRnum = 0;
let actualEventSRnum = 0;

let actualStandardSSRorSPnum = 0;
let actualStandardSRnum = 0;

// Randomly draw 1 karma
function draw1() {
    let karmaRoll = rollWithDecimal();
    let kingCheck = getRandomInt(1, 101);
 
    if (kingCheck > 98) {
        if (karmaRoll > 95) {
            actualKingSSR += 1;
            actualStandardSSRorSPnum += 1;
        }
        else if (karmaRoll > 65) {
            actualKingSR += 1;
            actualStandardSRnum += 1;
        }
        else {
            actualKingR += 1;
            actualRnum += 1;
        }
    }
    else {
        if (karmaRoll > minSPnum) {
            actualEventSPnum += 1;
        }
        else if (karmaRoll > minEventSSRnum) {
            actualEventSSRnum += 1;
        }
        else if (karmaRoll > minStandardSSRnum) {
            actualStandardSSRorSPnum += 1;
        }
        else if (karmaRoll > minSRnum) {
            actualStandardSRnum += 1;
        }
        else {
            actualRnum += 1;
        }
    }
}

function drawMultipleTimes(timesToPull) {
    while (timesPulled < timesToPull) {
        draw1();

        timesPulled += 1;
    } 
    updatePage();
}

function updatePage() {
    totalTimesPulled += timesPulled;
    let eventSPrate = actualEventSPnum / totalTimesPulled * 100;
    let eventSSRrate = actualEventSSRnum / totalTimesPulled * 100;
    let eventSRrate = actualEventSRnum / totalTimesPulled * 100;

    let standardSPorSSRrate = actualStandardSSRorSPnum / totalTimesPulled * 100;
    let standardSRrate = actualStandardSRnum / totalTimesPulled * 100;
    let standardRrate = actualRnum / totalTimesPulled * 100;

    let totalSPandSSRrate = eventSPrate + eventSSRrate + standardSPorSSRrate;
    let totalSRrate = eventSRrate + standardSRrate;

    let kingSSRrate = actualKingSSR / totalTimesPulled * 100;
    let kingSRrate = actualKingSR / totalTimesPulled * 100;
    let kingRrate = actualKingR / totalTimesPulled * 100;

    eventSPrate = eventSPrate.toFixed(2);
    eventSSRrate = eventSSRrate.toFixed(2);
    eventSRrate = eventSRrate.toFixed(2);
    standardSPorSSRrate = standardSPorSSRrate.toFixed(2);
    standardSRrate = standardSRrate.toFixed(2);
    standardRrate = standardRrate.toFixed(2);
    kingSSRrate = kingSSRrate.toFixed(2);
    kingSRrate = kingSRrate.toFixed(2);
    kingRrate = kingRrate.toFixed(2);

    totalSPandSSRrate = totalSPandSSRrate.toFixed(2);
    totalSRrate = totalSRrate.toFixed(2);


    let textString = "You pulled " + totalTimesPulled + " times. <br> The event SP rate was: " + eventSPrate + "%, <br>the event SSR rate was: " + eventSSRrate + "%, <br>the event SR rate was: " + eventSRrate + "%, <br>the standard SP or SSR rate was: " + standardSPorSSRrate + "%, <br>the total SP or SSR drop rate was: " + totalSPandSSRrate + "%, <br>the total SR drop rate was: " + totalSRrate + "%, <br>the total R drop rate was: " + standardRrate + "%, <br>the King SSR drop rate was: " + kingSSRrate + "%, <br>the King SR drop rate was: " + kingSRrate + "%, <br>the King R drop rate was: " + kingRrate + "%";

    resultsContainer.innerHTML= textString;
    timesPulled = 0;
}

drawMultipleTimes(timesToPull);