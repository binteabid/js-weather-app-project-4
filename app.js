

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
        // document.write("<h2>Hello " + userName + "!</h2>");
        // document.write("City: Karachi<br>");
        // document.write("Country: Pakistan<br>");
        // document.write("Continent: Asia<br>");
        // document.write("Weather: Arid/semi-arid, mostly sunny and dry<br>");
        // document.write("Temperature Range: 11°C – 35°C");

        document.write(`
            <div class="background">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-md-8 col-lg-6">
                    <div class="custom-card text-center">
                      <img src="./assests/images/karachi.jpg" class="card-img-top" alt="karachi">
                      <div class="card-body">
                        <h2 class="card-title">Hello ${userName} !</h2>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">City: Karachi</li>
                        <li class="list-group-item">Country: Pakistan</li>    
                        <li class="list-group-item">Continent: Asia</li>
                        <li class="list-group-item">Weather: Arid/semi-arid, mostly sunny and dry</li>
                        <li class="list-group-item">Temperature Range: 11°C – 35°C</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `);
          
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


document.write(`
  <footer class="bg-dark text-white pt-5 pb-3 px-4">
    <div class="container">
      <div class="row gy-4">
        <!-- Logo Section -->
        <div class="col-12 col-sm-6 col-lg-3 d-flex align-items-center">
          <a href="./index.html">
            <img src="./assests/images/logo.png" alt="logo" class="img-fluid w-75">
          </a>
        </div>

        <!-- Social Icons -->
        <div class="col-12 col-sm-6 col-lg-3 d-flex align-items-center">
          <ul class="d-flex list-unstyled gap-3 mb-0">
            <li>
              <a href="http://facebook.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://pk.linkedin.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-secondary" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Cities -->
        <div class="col-12 col-sm-6 col-lg-3">
          <h5 class="mb-4">Cities</h5>
          <ul class="list-unstyled ps-2">
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Karachi</a>
            </li>
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Japan</a>
            </li>
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Paris</a>
            </li>
          </ul>
        </div>

        <!-- More Cities -->
        <div class="col-12 col-sm-6 col-lg-3">
          <h5 class="mb-4"></h5>
          <ul class="list-unstyled ps-2">
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">New York City</a>
            </li>
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Rio de Janeiro</a>
            </li>
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Cairo</a>
            </li>
            <li class="mb-2">
              <a href="./index.html" class="text-secondary text-decoration-none">Sydney</a>
            </li>
          </ul>
        </div>
      </div>

      <p class="text-secondary small mt-4 mb-0">© WEATHER CHECK. All rights reserved.</p>
    </div>
  </footer>
`);
