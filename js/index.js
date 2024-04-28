var userNumber = document.querySelector(`.user-number`),
    randomResult = document.querySelector(`.random-result`),
    result = document.querySelector(`.result`);

function checkNumber(userValue){
    var randomValue = Math.ceil(Math.random() * 6);
    userNumber.innerHTML = userValue;
    randomResult.innerHTML = randomValue;

    if(userValue == randomValue){
        result.innerHTML = `<h2>You Win!</h2>`;
        result.style.color = `#008000`;
        } else {
        result.innerHTML = `<h2>You Lose!</h2>`;
        result.style.color = `#ff0000`;
    }
}
