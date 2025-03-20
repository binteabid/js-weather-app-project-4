
let userName = prompt("Enter your name");
let cityName = prompt("Enter your city name").toLowerCase(); 

if (cityName == "tokyo" || cityName == "karachi" || cityName == "paris" || cityName == "cairo" || cityName == "new york city" || cityName == "rio de janeiro" || cityName == "sydney") {

    if (cityName === "tokyo") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Tokyo<br>");
        document.write("Country: Japan<br>");
        document.write("Continent: Asia<br>");
        document.write("Weather: Humid subtropical, mostly sunny with occasional rain<br>");
        document.write("Temperature Range: 5°C – 31°C");
    }
    else if (cityName === "karachi") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Karachi<br>");
        document.write("Country: Pakistan<br>");
        document.write("Continent: Asia<br>");
        document.write("Weather: Arid/semi-arid, mostly sunny and dry<br>");
        document.write("Temperature Range: 11°C – 35°C");
    }
    else if (cityName === "paris") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Paris<br>");
        document.write("Country: France<br>");
        document.write("Continent: Europe<br>");
        document.write("Weather: Temperate oceanic, cloudy with light rain<br>");
        document.write("Temperature Range: 3°C – 25°C");
    }
    else if (cityName === "new york city") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: New York City<br>");
        document.write("Country: USA<br>");
        document.write("Continent: North America<br>");
        document.write("Weather: Humid subtropical, sunny, snowy winters, humid summers<br>");
        document.write("Temperature Range: -3°C – 30°C");
    }
    else if (cityName === "rio de janeiro") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Rio de Janeiro <br>");
        document.write("Country: Brazil<br>");
        document.write("Continent: South America<br>");
        document.write("Weather: Tropical, sunny, humid, rainy summers<br>");
        document.write("Temperature Range: 18°C – 32°C");
    }
    else if (cityName === "cairo") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Cairo<br>");
        document.write("Country: Egypt<br>");
        document.write("Continent: Africa<br>");
        document.write("Weather: Hot desert, sunny and dry<br>");
        document.write("Temperature Range: 9°C – 35°C");
    }
    else if (cityName === "sydney") {
        document.write("<h2>Hello " + userName + "!</h2>");
        document.write("City: Sydney<br>");
        document.write("Country: Australia<br>");
        document.write("Continent: Australia (Oceania)<br>");
        document.write("Weather: Temperate, mostly sunny with occasional showers<br>");
        document.write("Temperature Range: 8°C – 26°C");
    }

} 
else {
    document.write("<h2>Hello " + userName + "!</h2>");
    document.write("City not found in database.");
}
