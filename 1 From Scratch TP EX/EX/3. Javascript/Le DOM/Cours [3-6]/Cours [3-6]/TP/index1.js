// const { body } = require("express-validator");



document.body.addEventListener("click", (e) => {
// console.log(e.target.id);
const body = document.querySelector("body");
    // if (e.target.id === "javascript" ) {
    //     body.style.background = "yellow"
    // }
    // else if (e.target.id === "php") {
    //     body.style.background = "blue"
    // }
    // else if (e.target.id === "python") {
    //     body.style.background = "green"
    // } else {
    //    body.style.background = "red"
    // }

    switch (e.target.id) {
        case "javascript":
            body.style.background = "yellow";
            body.style.color = "#b3b305ff";
            break;
        case "php":
            body.style.background = "blue";
            body.style.color = "#4f1585";
            break;
        case "python":
            body.style.background = "green";
            body.style.color = "#005300";
            break;
        default:
            body.style.background = "red";
           
    }
})