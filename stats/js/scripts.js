let spoiler = false;

// let spoiler = JSON.parse(localStorage.getItem('spoiler'));
// console.log(spoiler);

// if (spoiler == false) {
//     toggleSpoilers();
// }


function toggleSpoilers() {
    if (spoiler == false) {

        let action = confirm("Are you sure you want to show spoilers for content not released in the Global Server?");
        if (action) {
            let spoilerTrees = ["appetency"];

            for (let i = 0; i < spoilerTrees.length; i++) {
                let labelElement = document.getElementById(spoilerTrees[i] + "Label");
        
                labelElement.classList.remove("spoiler");

                let statElement = document.getElementById(spoilerTrees[i] + "TimesPulled");

                statElement.classList.remove("spoiler");
            }

            document.getElementById("agreeToSpoilers").checked = true;

            spoiler = true;
            // localStorage.setItem("spoiler", true);
            // console.log(spoiler);
        }
        else {
            document.getElementById('agreeToSpoilers').checked = false;
        }
    }
    else {
        let spoilerTrees = ["appetency"];

        for (let i = 0; i < spoilerTrees.length; i++) {
            let labelElement = document.getElementById(spoilerTrees[i] + "Label");
    
            labelElement.classList.add("spoiler");

            let statElement = document.getElementById(spoilerTrees[i] + "TimesPulled");

            statElement.classList.add("spoiler");
        }
        
        document.getElementById("agreeToSpoilers").checked = false;

        spoiler = false;
        // localStorage.setItem("spoiler", false);
        // console.log(spoiler);
    }
    // setAllKarmas();
}


function clearLocalStorage() {
    let action = confirm("Are you sure you want to delete all records? This is not reversible.");
    if (action) {
        localStorage.clear();
        location.reload();
    }
}




// // Karmas
// setAllKarmas();



// function setAllKarmas() {
//     let allKarmas = [];

//     // Standard
//     let url = '../standard-gem/standard.json';
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (jsonObject) {
//             allKarmas.push(jsonObject['standardSP']);
//             allKarmas.push(jsonObject['standardKingSSR']);
//             allKarmas.push(jsonObject['standardKingSR']);
//             allKarmas.push(jsonObject['standardKingR']);
//             allKarmas.push(jsonObject['standardR']);
//         })

//     // Code of Passionate Love
//     url = '../code-of-passionate-love/code-of-passionate-love.json';
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (jsonObject) {
//             allKarmas.push(jsonObject['eventSP']);
//         })

//     // Appetency
//     if (spoiler == true) {
//         url = '../appetency/appetency.json';
//         fetch(url)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (jsonObject) {
//                 allKarmas.push(jsonObject['eventSSR']);
//             })
//     }


//     console.log(allKarmas);
// }




// Local Storage


// let allowSpoilers = localStorage.getItem("allowSpoilers");

function karmasToHTML(karmas) {
    let containerHTML = "<div class='karma-titles'>";

    for (let i = 0; i < karmas.length; i++) {
        let character = karmas[i].character;
        let king = karmas[i].king;
        let rarity = karmas[i].rarity;
        // let stat = karmas[i].stat;
        let title = karmas[i].title;

        // console.log(king);
        // console.log(rarity);

        let karmaHTML = "<p>";

        if (king == "true") {
            console.log("King");
            karmaHTML += "<span class='king-highlight'>King " + rarity + "</span>";
        }
        else if (rarity == "SR") {
            karmaHTML += "<span class='sr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SSR") {
            karmaHTML += "<span class='ssr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SP") {
            karmaHTML += "<span class='sp-highlight'>" + rarity + "</span>";
        }
        else {
            karmaHTML += rarity;
        }
        

        karmaHTML += " - " + character + ": " + title;
        karmaHTML += "</p>";

        containerHTML += karmaHTML;
    }

    containerHTML += "</div>";

    return containerHTML;
}

function pulledKarmasToHTML(karmas) {
    let containerHTML = "<div class='karma-titles'>";
    if (!karmas[0]) {
        let karmaHTML = "<p>No karmas of this type have been obtained.</p>";
        containerHTML += karmaHTML;
    }
    else {
        for (let i = 0; i < karmas.length; i++) {
            let character = karmas[i].character;
            let king = karmas[i].king;
            let rarity = karmas[i].rarity;
            // let stat = karmas[i].stat;
            let title = karmas[i].title;
            let timesPulled = karmas[i].timesPulled;

            // console.log(king);
    
            let karmaHTML = "<p>";
    
            if (king == "true") {
                karmaHTML += "<span class='king-highlight'>King " + rarity + "</span>";
            }
            else if (rarity == "SR") {
                karmaHTML += "<span class='sr-highlight'>" + rarity + "</span>";
            }
            else if (rarity == "SSR") {
                karmaHTML += "<span class='ssr-highlight'>" + rarity + "</span>";
            }
            else if (rarity == "SP") {
                karmaHTML += "<span class='sp-highlight'>" + rarity + "</span>";
            }
            else {
                karmaHTML += rarity;
            }
            
    
            karmaHTML += " - " + character + ": " + title + " (" + timesPulled + ")";
            karmaHTML += "</p>";
    
            containerHTML += karmaHTML;
        }
    }

    containerHTML += "</div>";

    return containerHTML;
}

function pulledKarmaToHTML(karma) {
    let containerHTML = "<div class='karma-titles'>";

   
    let character = karma.character;
    let king = karma.king;
    let rarity = karma.rarity;
    // let stat = karmas.stat;
    let title = karma.title;
    let timesPulled = karma.timesPulled;

    let karmaHTML = "<p>";

    // console.log(king);

    if (!karma) {
        karmaHTML += "No karma of this type has been pulled yet."
        karmaHTML += "</p>";
    }
    else {
        if (king == "true") {
            karmaHTML += "<span class='king-highlight'>King " + rarity + "</span>";
        }
        else if (rarity == "SR") {
            karmaHTML += "<span class='sr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SSR") {
            karmaHTML += "<span class='ssr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SP") {
            karmaHTML += "<span class='sp-highlight'>" + rarity + "</span>";
        }
        else {
            karmaHTML += rarity;
        }
            
    
        karmaHTML += " - " + character + ": " + title + " (" + timesPulled + ")";
        karmaHTML += "</p>";
    }

    containerHTML += karmaHTML;

    containerHTML += "</div>";

    return containerHTML;
}

function pulledNumToHTML(number) {
    let containerHTML = "<div class='karma-num'>";
    let numHTML = "<p>";
    if (!number) {
        numHTML += "0";
    }
    else {
        numHTML += number;
    }
    numHTML +=  "</p>";
    containerHTML += numHTML;
    return containerHTML;
}

let last10pull = JSON.parse(localStorage.getItem('last10pull'));
if (last10pull) {
    document.getElementById("last10pull").innerHTML = karmasToHTML(last10pull);
}


let last1pull = JSON.parse(localStorage.getItem('last1pull'));
if (last1pull) {
    document.getElementById("last1pull").innerHTML = karmasToHTML(last1pull);
}











// list of karma obtained

// list of unobtained karma

// Times pulled by tree
let totalTimesPulled = localStorage.getItem("totalTimesPulled");
document.getElementById("totalTimesPulled").textContent = totalTimesPulled;

let standardGemTimesPulled = localStorage.getItem("standardGemTimesPulled");
document.getElementById("standardGemTimesPulled").textContent = standardGemTimesPulled;
let codeOfPassionateLoveTimesPulled = localStorage.getItem("codeOfPassionateLoveTimesPulled");
document.getElementById("codeOfPassionateLoveTimesPulled").textContent = codeOfPassionateLoveTimesPulled;
let appetencyTimesPulled = localStorage.getItem("appetencyTimesPulled");
document.getElementById("appetencyTimesPulled").textContent = appetencyTimesPulled;






let karmaObtained = JSON.parse(localStorage.getItem('karmaObtained'));

// most pulled karma
let mostPulledKarma = "";
let mostPulledRKarma = "";
let mostPulledSRKarma = "";
let mostPulledSSRKarma = "";
let mostPulledSPKarma = "";


// number of karma pulled
let numRkarmaPulled = 0;
let numSRkarmaPulled = 0;
let numSSRkarmaPulled = 0;
let numSPkarmaPulled = 0;

// king stats
let SSRkingsObtained = [];
let numKingRkarmaPulled = 0;
let numKingSRkarmaPulled = 0;
let numKingSSRkarmaPulled = 0;


// Number of karmas pulled by character
let numLucienKarmas = 0;
let numVictorKarmas = 0;
let numGavinKarmas = 0;
let numKiroKarmas = 0;


// Lucien stats
let mcLucienKarma = "";
let mcLucienR = "";
let mcLucienSR = "";
let mcLucienSSR = "";
let mcLucienSP = "";

// Victor stats
let mcVictorKarma = "";
let mcVictorR = "";
let mcVictorSR = "";
let mcVictorSSR = "";
let mcVictorSP = "";

// Gavin stats
let mcGavinKarma = "";
let mcGavinR = "";
let mcGavinSR = "";
let mcGavinSSR = "";
let mcGavinSP = "";

// Kiro stats
let mcKiroKarma = "";
let mcKiroR = "";
let mcKiroSR = "";
let mcKiroSSR = "";
let mcKiroSP = "";



let mostPulledKarmaNum = 0;
let mostPulledRkarmaNum = 0;
let mostPulledSRkarmaNum = 0;
let mostPulledSSRkarmaNum = 0;
let mostPulledSPkarmaNum = 0;

let mcLucienKarmaNum = 0;
let mcVictorKarmaNum = 0;
let mcGavinKarmaNum = 0;
let mcKiroKarmaNum = 0;

let mcLucienRNum = 0;
let mcLucienSRNum = 0;
let mcLucienSSRNum = 0;
let mcLucienSPNum = 0;

let mcVictorRNum = 0;
let mcVictorSRNum = 0;
let mcVictorSSRNum = 0;
let mcVictorSPNum = 0;

let mcGavinRNum = 0;
let mcGavinSRNum = 0;
let mcGavinSSRNum = 0;
let mcGavinSPNum = 0;

let mcKiroRNum = 0;
let mcKiroSRNum = 0;
let mcKiroSSRNum = 0;
let mcKiroSPNum = 0;

for (let i = 0; i < karmaObtained.length; i++) {
    let karma = karmaObtained[i];
    let rarity = karma.rarity;
    let character = karma.character;
    // let title = karma.title;
    let king = karma.king;
    let timesPulled = karma.timesPulled;

    // total most pulled karma
    if (timesPulled > mostPulledKarmaNum) {
        mostPulledKarma = karma;
        mostPulledKarmaNum = timesPulled;
    }
    // most pulled R karma
    if (timesPulled > mostPulledRkarmaNum && rarity == "R") {
        mostPulledRKarma = karma;
        mostPulledRkarmaNum = timesPulled;
    }
    // most pulled SR karma
    if (timesPulled > mostPulledSRkarmaNum && rarity == "SR") {
        mostPulledSRKarma = karma;
        mostPulledSRkarmaNum = timesPulled;
    }
    // most pulled SSR karma
    if (timesPulled > mostPulledSSRkarmaNum && rarity == "SSR") {
        mostPulledSSRKarma = karma;
        mostPulledSSRkarmaNum = timesPulled;
    }
    // most pulled SP karma
    if (timesPulled > mostPulledSPkarmaNum && rarity == "SP") {
        mostPulledSPKarma = karma;
        mostPulledSPkarmaNum = timesPulled;
    }

    // number of rarity pulled
    if (rarity == "SP") {
        numSPkarmaPulled += 1;
    }
    else if (rarity == "SSR") {
        numSSRkarmaPulled += 1;
    }
    else if (rarity == "SR") {
        numSRkarmaPulled += 1;
    }
    else {
        numRkarmaPulled += 1;
    }

    // king
    if (king == "true") {
        if (rarity == "SSR") {
            SSRkingsObtained.push(karma);
            numKingSSRkarmaPulled += 1;
        }
        else if (rarity == "SR") {
            numKingSRkarmaPulled += 1;
        }
        else {
            numKingRkarmaPulled += 1;
        }
    }

    // Character
    if (character == "Lucien") {
        numLucienKarmas += 1;
        if (timesPulled > mcLucienKarmaNum) {
            mcLucienKarma = karma;
            mcLucienKarmaNum = timesPulled;
        }
        if (rarity == "SP" && timesPulled > mcLucienSPNum) {
            mcLucienSP = karma;
            mcLucienSPNum = timesPulled;
        }
        else if (rarity == "SSR" && timesPulled > mcLucienSSRNum) {
            mcLucienSSR = karma;
            mcLucienSSRNum = timesPulled;
        }
        else if (rarity == "SR" && timesPulled > mcLucienSRNum) {
            mcLucienSR = karma;
            mcLucienSRNum = timesPulled;
        }
        else if (rarity == "R" && timesPulled > mcLucienRNum) {
            mcLucienR = karma;
            mcLucienRNum = timesPulled;
        }
    }
    else if (character == "Victor") {
        numVictorKarmas += 1;
        if (timesPulled > mcVictorKarmaNum) {
            mcVictorKarma = karma;
            mcVictorKarmaNum = timesPulled;
        }
        if (rarity == "SP" && timesPulled > mcVictorSPNum) {
            mcVictorSP = karma;
            mcVictorSPNum = timesPulled;
        }
        else if (rarity == "SSR" && timesPulled > mcVictorSSRNum) {
            mcVictorSSR = karma;
            mcVictorSSRNum = timesPulled;
        }
        else if (rarity == "SR" && timesPulled > mcVictorSRNum) {
            mcVictorSR = karma;
            mcVictorSRNum = timesPulled;
        }
        else if (rarity == "R" && timesPulled > mcVictorRNum) {
            mcVictorR = karma;
            mcVictorRNum = timesPulled;
        }
    }
    else if (character == "Gavin") {
        numGavinKarmas += 1;
        if (timesPulled > mcGavinKarmaNum) {
            mcGavinKarma = karma;
            mcGavinKarmaNum = timesPulled;
        }
        if (rarity == "SP" && timesPulled > mcGavinSPNum) {
            mcGavinSP = karma;
            mcGavinSPNum = timesPulled;
        }
        else if (rarity == "SSR" && timesPulled > mcGavinSSRNum) {
            mcGavinSSR = karma;
            mcGavinSSRNum = timesPulled;
        }
        else if (rarity == "SR" && timesPulled > mcGavinSRNum) {
            mcGavinSR = karma;
            mcGavinSRNum = timesPulled;
        }
        else if (rarity == "R" && timesPulled > mcGavinRNum) {
            mcGavinR = karma;
            mcGavinRNum = timesPulled;
        }
    }
    else {
        numKiroKarmas += 1;
        if (timesPulled > mcKiroKarmaNum) {
            mcKiroKarma = karma;
            mcKiroKarmaNum = timesPulled;
        }
        if (rarity == "SP" && timesPulled > mcKiroSPNum) {
            mcKiroSP = karma;
            mcKiroSPNum = timesPulled;
        }
        else if (rarity == "SSR" && timesPulled > mcKiroSSRNum) {
            mcKiroSSR = karma;
            mcKiroSSRNum = timesPulled;
        }
        else if (rarity == "SR" && timesPulled > mcKiroSRNum) {
            mcKiroSR = karma;
            mcKiroSRNum = timesPulled;
        }
        else if (rarity == "R" && timesPulled > mcKiroRNum) {
            mcKiroR = karma;
            mcKiroRNum = timesPulled;
        }
    }
}



// let last10pull = JSON.parse(localStorage.getItem('last10pull'));
// document.getElementById("last10pull").innerHTML = karmasToHTML(last10pull);


document.getElementById("mostCommonKarma").innerHTML = pulledKarmaToHTML(mostPulledKarma);
document.getElementById("mostCommonRKarma").innerHTML = pulledKarmaToHTML(mostPulledRKarma);
document.getElementById("mostCommonSRKarma").innerHTML = pulledKarmaToHTML(mostPulledSRKarma);
document.getElementById("mostCommonSSRKarma").innerHTML = pulledKarmaToHTML(mostPulledSSRKarma);
document.getElementById("mostCommonSPKarma").innerHTML = pulledKarmaToHTML(mostPulledSPKarma);

// special function for the numbers
document.getElementById("numRKarmaObtained").innerHTML = pulledNumToHTML(numRkarmaPulled);
document.getElementById("numSRKarmaObtained").innerHTML = pulledNumToHTML(numSRkarmaPulled);
document.getElementById("numSSRKarmaObtained").innerHTML = pulledNumToHTML(numSSRkarmaPulled);
document.getElementById("numSPKarmaObtained").innerHTML = pulledNumToHTML(numSPkarmaPulled);

// Special function for this one
document.getElementById("SSRKingsObtained").innerHTML = pulledKarmasToHTML(SSRkingsObtained);


document.getElementById("numRKingsObtained").innerHTML = pulledNumToHTML(numKingRkarmaPulled);
document.getElementById("numSRKingsObtained").innerHTML = pulledNumToHTML(numKingSRkarmaPulled);
document.getElementById("numSSRKingsObtained").innerHTML = pulledNumToHTML(numKingSSRkarmaPulled);


document.getElementById("numLucienKarmas").innerHTML = pulledNumToHTML(numLucienKarmas);
document.getElementById("numVictorKarmas").innerHTML = pulledNumToHTML(numVictorKarmas);
document.getElementById("numGavinKarmas").innerHTML = pulledNumToHTML(numGavinKarmas);
document.getElementById("numKiroKarmas").innerHTML = pulledNumToHTML(numKiroKarmas);


document.getElementById("mostCommonLucienKarma").innerHTML = pulledKarmaToHTML(mcLucienKarma);
document.getElementById("mostCommonLucienRKarma").innerHTML = pulledKarmaToHTML(mcLucienR);
document.getElementById("mostCommonLucienSRKarma").innerHTML = pulledKarmaToHTML(mcLucienSR);
document.getElementById("mostCommonLucienSSRKarma").innerHTML = pulledKarmaToHTML(mcLucienSSR);
document.getElementById("mostCommonLucienSPKarma").innerHTML = pulledKarmaToHTML(mcLucienSP);

document.getElementById("mostCommonVictorKarma").innerHTML = pulledKarmaToHTML(mcVictorKarma);
document.getElementById("mostCommonVictorRKarma").innerHTML = pulledKarmaToHTML(mcVictorR);
document.getElementById("mostCommonVictorSRKarma").innerHTML = pulledKarmaToHTML(mcVictorSR);
document.getElementById("mostCommonVictorSSRKarma").innerHTML = pulledKarmaToHTML(mcVictorSSR);
document.getElementById("mostCommonVictorSPKarma").innerHTML = pulledKarmaToHTML(mcVictorSP);

document.getElementById("mostCommonGavinKarma").innerHTML = pulledKarmaToHTML(mcGavinKarma);
document.getElementById("mostCommonGavinRKarma").innerHTML = pulledKarmaToHTML(mcGavinR);
document.getElementById("mostCommonGavinSRKarma").innerHTML = pulledKarmaToHTML(mcGavinSR);
document.getElementById("mostCommonGavinSSRKarma").innerHTML = pulledKarmaToHTML(mcGavinSSR);
document.getElementById("mostCommonGavinSPKarma").innerHTML = pulledKarmaToHTML(mcGavinSP);

document.getElementById("mostCommonKiroKarma").innerHTML = pulledKarmaToHTML(mcKiroKarma);
document.getElementById("mostCommonKiroRKarma").innerHTML = pulledKarmaToHTML(mcKiroR);
document.getElementById("mostCommonKiroSRKarma").innerHTML = pulledKarmaToHTML(mcKiroSR);
document.getElementById("mostCommonKiroSSRKarma").innerHTML = pulledKarmaToHTML(mcKiroSSR);
document.getElementById("mostCommonKiroSPKarma").innerHTML = pulledKarmaToHTML(mcKiroSP);




// document.getElementById("karmaObtained").textContent = karmaObtained;

// document.getElementById("karmaNotObtained").textContent = karmaNotObtained;

