const currencyFrom = document.getElementById('currency-from');
const amountFrom = document.getElementById('amount-from');
const currenctTo = document.getElementById('currency-to');
const amountTo = document.getElementById('amount-to');
const rate = document.getElementById('rate');

const currencyValue = async () => {
    try {
        const url = 'https://open.er-api.com/v6/latest/USD'
        const currencyData = await fetch(url);
        const data = await currencyData.json();
        addOptions(data, 'currency-from', 'EUR')
        addOptions(data, 'currency-to', 'DKK')
        exchangeRate(data)
        eventListeners(data)          
        return data;
    }
    catch (err) {
        throw "Error in fetching the currencies";
    }
}

const addOptions = (currencies, elementID, firstElement) => {
    const fromCurrency = document.getElementById(elementID);
    const countries = Object.keys(currencies.rates)
    const fromArray = firstElement
                        ? [firstElement, ...countries.filter(item => item !== firstElement)]
                        : countries
    fromArray.forEach(currency => {
        const option = document.createElement('option')
        option.value = currency
        option.innerText = currency
        fromCurrency.appendChild(option)
    })
}

const exchangeRate = (currencies) => {
    const fromCurrency = currencyFrom.value;
    const toCurrency = currenctTo.value;
    const conversionRate = currencies.rates[toCurrency] / currencies.rates[fromCurrency];

    rate.innerText = `1 ${fromCurrency} = ${conversionRate} ${toCurrency}`;

    amountTo.value = Number( Math.round(amountFrom.value * conversionRate + 'e3') + 'e-3' )
}

const eventListeners = (currencies) => {
    currencyFrom.addEventListener('change', () => { exchangeRate(currencies) });
    amountFrom.addEventListener('input', () => { exchangeRate(currencies) });
    currenctTo.addEventListener('change', () => { exchangeRate(currencies) });
    amountTo.addEventListener('input', () => { exchangeRate(currencies) });
}

currencyValue();
