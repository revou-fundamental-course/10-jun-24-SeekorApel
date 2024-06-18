document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const calculationOutput = document.getElementById('calculationOutput');
    const convertButton = document.getElementById('convertButton');
    const resetButton = document.getElementById('resetButton');
    const reverseButton = document.getElementById('reverseButton');
    const celsiusSection = document.getElementById('celsiusSection').querySelector('header h3');
    const fahrenheitSection = document.getElementById('fahrenheitSection').querySelector('header h3');
    const conversionTitle = document.getElementById('conversionTitle');

    let isCelsiusToFahrenheit = true;

    convertButton.addEventListener('click', function() {
        if (isCelsiusToFahrenheit) {
            const celsius = parseFloat(celsiusInput.value);
            if (!isNaN(celsius)) {
                const fahrenheit = (celsius * 9/5) + 32;
                fahrenheitInput.value = fahrenheit.toFixed(2);
                calculationOutput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
            } else {
                alert('Please enter a valid number for Celsius.');
            }
        } else {
            const fahrenheit = parseFloat(celsiusInput.value);
            if (!isNaN(fahrenheit)) {
                const celsius = (fahrenheit - 32) * 5/9;
                fahrenheitInput.value = celsius.toFixed(2);
                calculationOutput.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
            } else {
                alert('Please enter a valid number for Fahrenheit.');
            }
        }
    });

    resetButton.addEventListener('click', function() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        calculationOutput.value = '';
    });

    reverseButton.addEventListener('click', function() {
        isCelsiusToFahrenheit =!isCelsiusToFahrenheit;
        celsiusSection.innerHTML = isCelsiusToFahrenheit? 'Celcius (&deg;C)' : 'Fahrenheit (&deg;F)';
        fahrenheitSection.innerHTML = isCelsiusToFahrenheit? 'Fahrenheit (&deg;F)' : 'Celcius (&deg;C)';
        celsiusInput.placeholder = isCelsiusToFahrenheit? 'Masukkan derajat Celcius' : 'Masukkan derajat Fahrenheit';
        fahrenheitInput.placeholder = isCelsiusToFahrenheit? 'Hasil dalam Fahrenheit' : 'Hasil dalam Celcius';
        conversionTitle.innerHTML = isCelsiusToFahrenheit? 'Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit(&deg;F)' : 'Cara Konversi Dari Fahrenheit(&deg;F) ke Celcius (&deg;C)';
        fahrenheitInput.value = '';
        calculationOutput.value = '';
    });
});
