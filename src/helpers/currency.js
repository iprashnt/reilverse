const convertToKHR = (usd) => {
    const exchangeRate = 4100.07;
    const value = (usd * exchangeRate).toFixed(2)
    return isNaN(value) ? 0 : value;
};

const convertKhrToUsd = (khrAmount) => {
    const usdAmount = khrAmount / 4100;
    return isNaN(usdAmount) ? 0 : usdAmount;
}

const formatNumber = (num) => {
    const numStr = Number(num).toFixed(2).split('.');
    let integerPart = numStr[0];
    let lastThree = integerPart.slice(-3);
    let otherNumbers = integerPart.slice(0, -3);

    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    let formattedIntegerPart = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    const decimalPart = '.' + numStr[1];

    return formattedIntegerPart + decimalPart;
}

export {
    convertKhrToUsd,
    convertToKHR,
    formatNumber,
}