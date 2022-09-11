// ***************************************
// For ease of editing, change stuff here

let standardGemTimesPulled = localStorage.getItem("standardGemTimesPulled");
let codeOfPassionateLoveTimesPulled = localStorage.getItem("codeOfPassionateLoveTimesPulled");
let appetencyTimesPulled = localStorage.getItem("appetencyTimesPulled");
let oracleTimesPulled = localStorage.getItem("oracleTimesPulled");
let nightChantTimesPulled = localStorage.getItem("nightChantTimesPulled");
let fireworkDayTimesPulled = localStorage.getItem("fireworkDayTimesPulled");
let sunsetMistGardenTimesPulled = localStorage.getItem("sunsetMistGardenTimesPulled");
let chineseNewYearTimesPulled = localStorage.getItem("chineseNewYearTimesPulled");
let christmasFairytaleTimesPulled = localStorage.getItem("christmasFairytaleTimesPulled");
let dawnGardenTimesPulled = localStorage.getItem("dawnGardenTimesPulled");
let hereComesTheGroomTimesPulled = localStorage.getItem("hereComesTheGroomTimesPulled");


// This is for the tree usage pie chart, add it here in both spots if global
let allTrees = [
    ['WishTree', 'Used'],
    ['Gem', parseInt(standardGemTimesPulled)],
    ['Code of Passionate Love', parseInt(codeOfPassionateLoveTimesPulled)],
    ['Oracle', parseInt(oracleTimesPulled)],
    ['Night Chant', parseInt(nightChantTimesPulled)],
    ['Firework Day', parseInt(fireworkDayTimesPulled)],
    ['Chinese New Year', parseInt(chineseNewYearTimesPulled)],
    ['Sunset Mist Garden', parseInt(sunsetMistGardenTimesPulled)],
    ['Christmas Fairytale', parseInt(christmasFairytaleTimesPulled)],
    ['Dawn Garden', parseInt(dawnGardenTimesPulled)],
    ['Here Comes the Groom', parseInt(hereComesTheGroomTimesPulled)],
    // Spoiler stars here
    ['Appetency', parseInt(appetencyTimesPulled)],
];

let globalTrees = [
    ['WishTree', 'Used'],
    ['Gem', parseInt(standardGemTimesPulled)],
    ['Code of Passionate Love', parseInt(codeOfPassionateLoveTimesPulled)],
    ['Oracle', parseInt(oracleTimesPulled)],
    ['Night Chant', parseInt(nightChantTimesPulled)],
    ['Firework Day', parseInt(fireworkDayTimesPulled)],
    ['Chinese New Year', parseInt(chineseNewYearTimesPulled)],
    ['Sunset Mist Garden', parseInt(sunsetMistGardenTimesPulled)],
    ['Christmas Fairytale', parseInt(christmasFairytaleTimesPulled)],
    ['Dawn Garden', parseInt(dawnGardenTimesPulled)],
    ['Here Comes the Groom', parseInt(hereComesTheGroomTimesPulled)]
];


// ****************************************





let spoiler = JSON.parse(localStorage.getItem('spoiler'));


if (spoiler == null) {
    localStorage.setItem("spoiler", "false");
}
else if (spoiler == true) {
    document.getElementById('agreeToSpoilers').checked = true;
}

function toggleSpoilers() {
    if (spoiler == true) {
        // switching to false
        spoiler = false;
        localStorage.setItem("spoiler", "false");
        location.reload();
    }
    else {
        // Switching to true
        spoiler = true;
        localStorage.setItem("spoiler", "true");
        location.reload();
    }
}


function clearLocalStorage() {
    let action = confirm("Are you sure you want to delete all records? This is not reversible.");
    if (action) {
        localStorage.clear();
        location.reload();
    }
}

function pulledKarmaToHTML(karma) {

    let containerHTML = "<div class='karma-common'>";

    let karmaHTML = "<div class='karma-group'>";

    if (!karma) {
        karmaHTML = "<p>";
        karmaHTML += "No karma of this type has been pulled yet.";
        karmaHTML += "</p>";
    }
    else {

        let character = karma.character;
        let king = karma.king;
        let rarity = karma.rarity;

        let title = karma.title;
        title = title.replace(/\s+/g, '-');

        let timesPulled = karma.timesPulled;
        let imgElement = '<div class="most-common-img"><img src="../assets/karma-cg/' + character.toLowerCase() + '-' + title.toLowerCase() + '.jpg" alt="' + character + ': ' + title + '"></div>';

        karmaHTML += imgElement;

        let captionElement = "<p class='most-common-caption'>";
        if (king == true) {
            captionElement += "<span class='king-highlight'>King " + rarity + "</span>";
        }
        else if (rarity == "SR") {
            captionElement += "<span class='sr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SSR") {
            captionElement += "<span class='ssr-highlight'>" + rarity + "</span>";
        }
        else if (rarity == "SP") {
            captionElement += "<span class='sp-highlight'>" + rarity + "</span>";
        }
        else {
            captionElement += rarity;
        }

        captionElement += " - " + character + ": " + title + " (" + timesPulled + ")";
        captionElement += "</p>";

        karmaHTML += captionElement;
    }
    karmaHTML += "</div>";

    containerHTML += karmaHTML;

    containerHTML += "</div>";

    return containerHTML;
}

let last10pull = JSON.parse(localStorage.getItem('last10pull'));
if (last10pull) {
    document.getElementById("last10pull").innerHTML = lastKarmasToHTML(last10pull);
}


let last1pull = JSON.parse(localStorage.getItem('last1pull'));
if (last1pull) {
    document.getElementById("last1pull").innerHTML = lastKarmasToHTML(last1pull);
}


function lastKarmasToHTML(karmas) {
    let containerHTML = "<div class='karma-titles'>";

    for (let i = 0; i < karmas.length; i++) {
        let karma = karmas[i];

        let character = karma.character;
        let king = karma.king;
        let rarity = karma.rarity;

        let title = karma.title;
        title = title.replace(/\s+/g, '-');
        // console.log(title);


        let karmaGroup = "<div class='karma-group'>";

        if (!karma) {
            karmaGroup += "<p>";
            karmaGroup += "No karma of this type has been pulled yet.";
            karmaGroup += "</p>";
        }
        else {
            let imgElement = "<div class='most-common-img'><img src='../assets/karma-cg/" + character.toLowerCase() + "-" + title.toLowerCase() + ".jpg' alt='" + character + ": " + title + "'></div>";
            karmaGroup += imgElement;

            let captionElement = "<p class='most-common-caption'>";
            if (king == true) {
                captionElement += "<span class='king-highlight'>King " + rarity + "</span>";
            }
            else if (rarity == "SR") {
                captionElement += "<span class='sr-highlight'>" + rarity + "</span>";
            }
            else if (rarity == "SSR") {
                captionElement += "<span class='ssr-highlight'>" + rarity + "</span>";
            }
            else if (rarity == "SP") {
                captionElement += "<span class='sp-highlight'>" + rarity + "</span>";
            }
            else {
                captionElement += rarity;
            }

            captionElement += " - " + character + ": " + title;
            captionElement += "</p>";

            karmaGroup += captionElement;
        }
        karmaGroup += "</div>";
        containerHTML += karmaGroup;
    }

    containerHTML += "</div>";

    return containerHTML;
}


let karmaObtained = JSON.parse(localStorage.getItem('karmaObtained'));

// most pulled karma
let mostPulledKarma = "";
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

let numLucienR = 0;
let numLucienSR = 0;
let numLucienSSR = 0;
let numLucienSP = 0;

// Victor stats
let mcVictorKarma = "";
let mcVictorR = "";
let mcVictorSR = "";
let mcVictorSSR = "";
let mcVictorSP = "";

let numVictorR = 0;
let numVictorSR = 0;
let numVictorSSR = 0;
let numVictorSP = 0;

// Gavin stats
let mcGavinKarma = "";
let mcGavinR = "";
let mcGavinSR = "";
let mcGavinSSR = "";
let mcGavinSP = "";

let numGavinR = 0;
let numGavinSR = 0;
let numGavinSSR = 0;
let numGavinSP = 0;

// Kiro stats
let mcKiroKarma = "";
let mcKiroR = "";
let mcKiroSR = "";
let mcKiroSSR = "";
let mcKiroSP = "";

let numKiroR = 0;
let numKiroSR = 0;
let numKiroSSR = 0;
let numKiroSP = 0;


let mostPulledKarmaNum = 0;
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

let countedKarma = 0;

for (let i = 0; i < karmaObtained.length; i++) {
    let karma = karmaObtained[i];
    let rarity = karma.rarity;
    let character = karma.character;
    let king = karma.king;
    let timesPulled = karma.timesPulled;

    // total most pulled karma
    if (timesPulled > mostPulledKarmaNum) {
        mostPulledKarma = karma;
        mostPulledKarmaNum = timesPulled;
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
        numSPkarmaPulled += timesPulled;
    }
    else if (rarity == "SSR") {
        numSSRkarmaPulled += timesPulled;
    }
    else if (rarity == "SR") {
        numSRkarmaPulled += timesPulled;
    }
    else {
        numRkarmaPulled += timesPulled;
    }

    // king
    if (king == true) {
        if (rarity == "SSR") {
            SSRkingsObtained.push(karma);
            numKingSSRkarmaPulled += timesPulled;
        }
        else if (rarity == "SR") {
            numKingSRkarmaPulled += timesPulled;
        }
        else {
            numKingRkarmaPulled += timesPulled;
        }
    }

    // Character
    if (character == "Lucien") {
        numLucienKarmas += timesPulled;
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

        if (rarity == "SP") {
            numLucienSP += timesPulled;
        }
        else if (rarity == "SSR") {
            numLucienSSR += timesPulled;
        }
        else if (rarity == "SR") {
            numLucienSR += timesPulled;
        }
        else if (rarity == "R") {
            numLucienR += timesPulled;
        }
    }
    else if (character == "Victor") {
        numVictorKarmas += timesPulled;
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

        if (rarity == "SP") {
            numVictorSP += timesPulled;
        }
        else if (rarity == "SSR") {
            numVictorSSR += timesPulled;
        }
        else if (rarity == "SR") {
            numVictorSR += timesPulled;
        }
        else if (rarity == "R") {
            numVictorR += timesPulled;
        }
    }
    else if (character == "Gavin") {
        numGavinKarmas += timesPulled;
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

        if (rarity == "SP") {
            numGavinSP += timesPulled;
        }
        else if (rarity == "SSR") {
            numGavinSSR += timesPulled;
        }
        else if (rarity == "SR") {
            numGavinSR += timesPulled;
        }
        else if (rarity == "R") {
            numGavinR += timesPulled;
        }
    }
    else {
        numKiroKarmas += timesPulled;
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

        if (rarity == "SP") {
            numKiroSP += timesPulled;
        }
        else if (rarity == "SSR") {
            numKiroSSR += timesPulled;
        }
        else if (rarity == "SR") {
            numKiroSR += timesPulled;
        }
        else if (rarity == "R") {
            numKiroR += timesPulled;
        }
    }

    countedKarma += timesPulled;
}


document.getElementById("mostCommonKarma").innerHTML = pulledKarmaToHTML(mostPulledKarma);

document.getElementById("mostCommonSRKarma").innerHTML = pulledKarmaToHTML(mostPulledSRKarma);
document.getElementById("mostCommonSSRKarma").innerHTML = pulledKarmaToHTML(mostPulledSSRKarma);
document.getElementById("mostCommonSPKarma").innerHTML = pulledKarmaToHTML(mostPulledSPKarma);


document.getElementById("mostCommonLucienKarma").innerHTML = pulledKarmaToHTML(mcLucienKarma);
document.getElementById("mostCommonLucienSRKarma").innerHTML = pulledKarmaToHTML(mcLucienSR);
document.getElementById("mostCommonLucienSSRKarma").innerHTML = pulledKarmaToHTML(mcLucienSSR);
document.getElementById("mostCommonLucienSPKarma").innerHTML = pulledKarmaToHTML(mcLucienSP);

document.getElementById("mostCommonVictorKarma").innerHTML = pulledKarmaToHTML(mcVictorKarma);
document.getElementById("mostCommonVictorSRKarma").innerHTML = pulledKarmaToHTML(mcVictorSR);
document.getElementById("mostCommonVictorSSRKarma").innerHTML = pulledKarmaToHTML(mcVictorSSR);
document.getElementById("mostCommonVictorSPKarma").innerHTML = pulledKarmaToHTML(mcVictorSP);

document.getElementById("mostCommonGavinKarma").innerHTML = pulledKarmaToHTML(mcGavinKarma);
document.getElementById("mostCommonGavinSRKarma").innerHTML = pulledKarmaToHTML(mcGavinSR);
document.getElementById("mostCommonGavinSSRKarma").innerHTML = pulledKarmaToHTML(mcGavinSSR);
document.getElementById("mostCommonGavinSPKarma").innerHTML = pulledKarmaToHTML(mcGavinSP);

document.getElementById("mostCommonKiroKarma").innerHTML = pulledKarmaToHTML(mcKiroKarma);
document.getElementById("mostCommonKiroSRKarma").innerHTML = pulledKarmaToHTML(mcKiroSR);
document.getElementById("mostCommonKiroSSRKarma").innerHTML = pulledKarmaToHTML(mcKiroSSR);
document.getElementById("mostCommonKiroSPKarma").innerHTML = pulledKarmaToHTML(mcKiroSP);


// Pie Charts

// characters
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCharacterChart);
function drawCharacterChart() {
    let data = google.visualization.arrayToDataTable([
        ['Character', '% of Pulled Karmas'],
        ['Lucien', numLucienKarmas],
        ['Victor', numVictorKarmas],
        ['Gavin', numGavinKarmas],
        ['Kiro', numKiroKarmas],
    ]);

    let options = {
        pieHole: 0,
        colors: ['#C218F5', '#DE1D0B', '#0B2FDE', '#FA9F1E'],
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('character-pie'));
    chart.draw(data, options);
}


// Rarity
google.charts.setOnLoadCallback(drawRarityChart);
function drawRarityChart() {
    let data = google.visualization.arrayToDataTable([
        ['Rarity', 'Drop Rate'],
        ['SP', numSPkarmaPulled],
        ['SSR', numSSRkarmaPulled],
        ['SR', numSRkarmaPulled],
        ['R', numRkarmaPulled],
    ]);

    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('rarity-pie'));
    chart.draw(data, options);
}

// Wish Tree
google.charts.setOnLoadCallback(drawWishTreeChart);
function drawWishTreeChart() {
    let data = "";
    if (spoiler == true) {
        data = google.visualization.arrayToDataTable(allTrees);
    }
    else {
        data = google.visualization.arrayToDataTable(globalTrees);
    }

    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('wish-tree-pie'));
    chart.draw(data, options);
}


// Wish Tree
google.charts.setOnLoadCallback(drawKingChart);
function drawKingChart() {
    let data = google.visualization.arrayToDataTable([
        ['King', 'Percent Rarity Pulled'],
        ['SSR', parseInt(numKingSSRkarmaPulled)],
        ['SR', parseInt(numKingSRkarmaPulled)],
        ['R', parseInt(numKingRkarmaPulled)]
    ]);

    if (numKingRkarmaPulled == 0 && numKingSRkarmaPulled == 0 && numKingSSRkarmaPulled == 0) {
        document.getElementById('king-pie').textContent = "No King Karma have been pulled";
    }
    else {
        let options = {
            pieHole: 0,
            backgroundColor: { fill: 'transparent' },
        };

        let chart = new google.visualization.PieChart(document.getElementById('king-pie'));
        chart.draw(data, options);
    }
}


// characters
google.charts.setOnLoadCallback(drawLucienChart);
function drawLucienChart() {
    let data = google.visualization.arrayToDataTable([
        ['Lucien', 'Percent Rarity Pulled'],
        ['SP', parseInt(numLucienSP)],
        ['SSR', parseInt(numLucienSSR)],
        ['SR', parseInt(numLucienSR)],
        ['R', parseInt(numLucienR)]
    ]);


    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('lucien-pie'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawVictorChart);
function drawVictorChart() {
    let data = google.visualization.arrayToDataTable([
        ['Victor', 'Percent Rarity Pulled'],
        ['SP', parseInt(numVictorSP)],
        ['SSR', parseInt(numVictorSSR)],
        ['SR', parseInt(numVictorSR)],
        ['R', parseInt(numVictorR)]
    ]);


    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('victor-pie'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawGavinChart);
function drawGavinChart() {
    let data = google.visualization.arrayToDataTable([
        ['Gavin', 'Percent Rarity Pulled'],
        ['SP', parseInt(numGavinSP)],
        ['SSR', parseInt(numGavinSSR)],
        ['SR', parseInt(numGavinSR)],
        ['R', parseInt(numGavinR)]
    ]);


    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('gavin-pie'));
    chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawKiroChart);
function drawKiroChart() {
    let data = google.visualization.arrayToDataTable([
        ['Kiro', 'Percent Rarity Pulled'],
        ['SP', parseInt(numKiroSP)],
        ['SSR', parseInt(numKiroSSR)],
        ['SR', parseInt(numKiroSR)],
        ['R', parseInt(numKiroR)]
    ]);


    let options = {
        pieHole: 0,
        backgroundColor: { fill: 'transparent' },
    };

    let chart = new google.visualization.PieChart(document.getElementById('kiro-pie'));
    chart.draw(data, options);
}
