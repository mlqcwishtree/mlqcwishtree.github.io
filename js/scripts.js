let spoiler = JSON.parse(localStorage.getItem('spoiler'));

if (spoiler == null) {
    localStorage.setItem("spoiler", "false");
}
else if (spoiler == true) {
    defaultSpoilersTrue();
}

function defaultSpoilersTrue() {

    let spoilerTrees = ["appetency"];

    for (let i = 0; i < spoilerTrees.length; i++) {
        let linkElement = document.getElementById(spoilerTrees[i]);
        linkElement.setAttribute("href", spoilerTrees[i] + "/index.html");

        linkElement.classList.remove("spoiler");
    }

    spoiler = true;
    localStorage.setItem("spoiler", "true");

    document.getElementById('agreeToSpoilers').checked = true;

}

function toggleSpoilers() {
    if (spoiler == false) {
        let action = confirm("Are you sure you want to show spoilers for content not released in the Global Server? (Spoiler Karma pulled will still be shown on the stats page, even if spoilers is turned back off)");
        if (action) {
            let spoilerTrees = ["appetency"];

            for (let i = 0; i < spoilerTrees.length; i++) {
                let linkElement = document.getElementById(spoilerTrees[i]);
                linkElement.setAttribute("href", spoilerTrees[i] + "/index.html");

                linkElement.classList.remove("spoiler");
            }

            spoiler = true;
            localStorage.setItem("spoiler", "true");
        }
        else {
            document.getElementById('agreeToSpoilers').checked = false;
        }
    }
    else {
        let spoilerTrees = ["appetency"];

        for (let i = 0; i < spoilerTrees.length; i++) {
            let linkElement = document.getElementById(spoilerTrees[i]);
            linkElement.setAttribute("href", "#");

            linkElement.classList.add("spoiler");
        }

        spoiler = false;
        localStorage.setItem("spoiler", "false");
    }
}