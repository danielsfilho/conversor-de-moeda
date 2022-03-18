const btnCalculating = document.querySelector('#toConvert')
const displayResult = document.querySelector('.result')

function validating(data) {
    const enteredValue = document.querySelector('.currencyConverter').value

    if(document.querySelector('#usd-brl').checked) {
        const calculate = enteredValue * data.USD_BRL
        const currencyTransformation = calculate.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2})      
        displayResult.innerHTML = `${currencyTransformation}`

    }else if(document.querySelector('#brl-usd').checked) {
        const calculate = enteredValue * data.BRL_USD
        const currencyTransformation = calculate.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
        displayResult.innerHTML = `${currencyTransformation}`

    }

}

btnCalculating.addEventListener('click', () => {

    const url = "https://free.currconv.com/api/v7/convert?q=USD_BRL,BRL_USD&compact=ultra&apiKey=6847dd99f5eef6ecef9e"
    const options = {
        method: 'GET',
    }
    fetch(url, options)
    .then(response => response.json())
    .then(data => validating(data))
    .catch(e => console.log("Error:" + e.message))
})