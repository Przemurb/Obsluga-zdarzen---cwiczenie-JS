// #2
function incrementCounter() {
     document.getElementById('counter').innerHTML++;
}

// #3
function registerButtonClik() {
    let button = document.getElementById("counter-button-3");
    button.onclick = () => document.getElementById('counter').innerHTML++;
}
registerButtonClik();

// #4 - można zarejestrować wiecej słuchaczy do jednego zdarzenia
function registerButtonClikTroughEventListener() {
    let button = document.getElementById("counter-button-4");
    button.addEventListener("click", () => document.getElementById('counter').innerHTML = 0);
    button.addEventListener("click", () => alert("Miałeś tego nie klikać!!!\nPokarało cię i masz znowu 0."));
}
registerButtonClikTroughEventListener();

// #5
function registerEnableButton() {
    let enableButton = document.getElementById('enable-button');
    enableButton.onclick = () => {
        let counterButton5 = document.getElementById('counter-button-5');
        counterButton5.addEventListener("click", incrementCounter);
    }
}

function registerDisableButton() {
    let disableButton = document.getElementById("disable-button");
    disableButton.onclick = () => {
        let couterButton5 = document.getElementById('counter-button-5');
        couterButton5.removeEventListener("click", incrementCounter);
    }
}
registerEnableButton();
registerDisableButton();

