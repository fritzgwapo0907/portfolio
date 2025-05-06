document.getElementById("convert").addEventListener("click", function() {

    const phpAmount = parseFloat(document.getElementById('display1').value);

  
    if (isNaN(phpAmount) || phpAmount <= 0) {
        alert("Please enter a valid amount in PHP.");
        return; 
    }

  
    const conversionRates = {
        'xrp': 0.0060,
        'usdt': 0.017,
        'doge': 0.05427,
        'trx': 0.0722,
    };

   
    const convertedXRP = phpAmount * conversionRates.xrp;
    const convertedUSDT = phpAmount * conversionRates.usdt;
    const convertedDOGE = phpAmount * conversionRates.doge;
    const convertedTRX = phpAmount * conversionRates.trx;

    
    document.getElementById('display2').value = convertedXRP.toFixed(4); 
    document.getElementById('display3').value = convertedUSDT.toFixed(4); 
    document.getElementById('display4').value = convertedDOGE.toFixed(4); 
    document.getElementById('display5').value = convertedTRX.toFixed(4); 
});
