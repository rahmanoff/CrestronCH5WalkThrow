import * as CrCromLib from "@crestron/ch5-crcomlib";

// const button = document.querySelector(".demo");

// button.addEventListener("click", function () {
//     CrCromLib.publishEvent("b", "1", true);
//     setTimeout(() => CrCromLib.publishEvent("b", "1", false), 200);
// });

function handleSourcePress(e) {
    const value = parseInt(e.target.value, 10);
    CrCromLib.publishEvent("n", "1", value);

    let elements = document.getElementsByClassName("demoActive");
    Array.from(elements).forEach((element) => {
        document.getElementById(element.id).className = "demo";
    });

    document.getElementById(`source${e.target.value}`).className = "demoActive";
}

document.querySelector(".sources").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.id, "button was pressed!", event.target.value);
        handleSourcePress(event);
    }
    event.stopPropagation();
})