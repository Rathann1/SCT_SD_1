function convertTemperature() {

    // Get temperature entered by user
    let temperature = parseFloat(
        document.getElementById("temperature").value
    );


    // Check if user entered a valid number
    if (isNaN(temperature)) {

        document.getElementById("result").innerText =
            "Please enter a valid temperature.";

        return;
    }


    // Get selected units
    let fromUnit =
        document.getElementById("fromUnit").value;

    let toUnit =
        document.getElementById("toUnit").value;


    let result;


    // Celsius conversions
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {

        result = (temperature * 9 / 5) + 32;

    }

    else if (fromUnit === "Celsius" && toUnit === "Kelvin") {

        result = temperature + 273.15;

    }


    // Fahrenheit conversions
    else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {

        result = (temperature - 32) * 5 / 9;

    }

    else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {

        result = (temperature - 32) * 5 / 9 + 273.15;

    }


    // Kelvin conversions
    else if (fromUnit === "Kelvin" && toUnit === "Celsius") {

        result = temperature - 273.15;

    }

    else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {

        result = (temperature - 273.15) * 9 / 5 + 32;

    }


    // Same unit
    else {

        result = temperature;

    }


    // Get temperature symbol
    let symbol;

    if (toUnit === "Celsius") {

        symbol = "°C";

    }

    else if (toUnit === "Fahrenheit") {

        symbol = "°F";

    }

    else {

        symbol = "K";

    }


    // Display result
    document.getElementById("result").innerText =
        result.toFixed(2) + " " + symbol;
}