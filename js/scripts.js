let spoiler = false;

// let spoilerPreferance = JSON.parse(localStorage.getItem('spoilerPreferance'));

// if (!spoilerPreferance) {
//     let spoiler = false;
// }
// else {
//     if (spoilerPreferance) {
//         let spoiler = true;
//         // document.getElementById('agreeToSpoilers').checked = true;
//         toggleSpoilers()
//     }
//     // else {
//     //     let spoiler = false;
//     // }
// }

function toggleSpoilers() {
    if (spoiler == false) {
        let action = confirm("Are you sure you want to show spoilers for content not released in the Global Server?");
        if (action) {
            let spoilerTrees = ["appetency"];

            for (let i = 0; i < spoilerTrees.length; i++) {
                let linkElement = document.getElementById(spoilerTrees[i]);
                linkElement.setAttribute("href", spoilerTrees[i] + "/index.html");
        
                linkElement.classList.remove("spoiler");
            }
    
            spoiler = true;
            localStorage.setItem("spoilerPreferance", JSON.stringify(spoiler));
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
        localStorage.setItem("spoilerPreferance", JSON.stringify(spoiler));
    }
}