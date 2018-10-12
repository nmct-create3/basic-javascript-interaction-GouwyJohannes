function handleFloatingLabel() {
    let floatingInput = document.querySelector(".js-name-input");
    let floatingLabel = document.querySelector(".js-floating-label");

    floatingInput.addEventListener("blur", function() {
        console.log('In add event listener');
        if (document.getElementsByClassName("js-name-input") != "") {
            console.log(floatingLabel.classList);
            floatingLabel.classList.add('is-floating');
            console.log(floatingLabel.classList);
        };
    });
};


function handlePasswordSwitcher() {
    let passwordInput = document.querySelector(".js-password-input");
    let passwordToggle = document.querySelector(".js-password-toggle-checkbox");

    passwordToggle.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            console.log('Password shown');
        }
        else {
            passwordInput.type = "password";
            console.log('Password hidden')
        };
    });
};


function handleQualityRange () {
    let rangeInput = document.querySelector(".js-quality-input");
    let rangeHolder = document.querySelector(".js-range-holder");
    let rangeValue = rangeInput.value;
    rangeInput.addEventListener("input", function() {
        rangeValue = rangeInput.value;
        console.log('rangeInput has changed ' + rangeValue);
        rangeHolder.setAttribute('data-value', rangeValue);
        rangeHolder.style.marginLeft = rangeValue + "%";
    });
};


function handleDropdownButton () {
    let dropdownInput = document.querySelector(".js-dropdown-input");
    let dropdownOptions = document.querySelector(".js-dropdown-options");
    let dropdownSymbol = document.querySelector(".js-button-dropdown__symbol");
    dropdownInput.addEventListener("click", function(e){
        e.preventDefault();
        console.log("Button pressed")
        dropdownOptions.classList.toggle('is-shown');
        dropdownSymbol.classList.toggle('c-button-dropdown__symbol');
    });
};


document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange ();
    handleDropdownButton();
});