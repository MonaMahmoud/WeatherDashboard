var cityData;
var cityWeather;
// var storedWeather = JSON.parse(localStorage.getItem("WeatherSearch"));
// var storedCities = JSON.parse(localStorage.getItem("CityNames"));
var storedWeather ;
var storedCities;
//function to display get previoulsy stored values from local storage
function loadSearchHistory(){
    //fetch values stored in local storage
    storedWeather = JSON.parse(localStorage.getItem("WeatherSearch"));
    storedCities = JSON.parse(localStorage.getItem("CityNames"));
    //if there are previously stored values 
    if(storedWeather){
        var i;
        //loop on all stored values
        for(i=0;i<storedWeather.length;i++){
            //create a button for each value
            var result = document.createElement("button");
            //set data attribute equals to array index of the city represented by the button
            result.setAttribute("data-order",i);
            //set text on button to city name
            result.textContent = storedCities[i].name;
            //set button styling
            result.classList.add("btn");
            result.classList.add("btn-success");
            //add the button to HTML
            document.getElementById("history").appendChild(result);
            //add event listener for the button click
            result.addEventListener("click",function(event){
                //get the data for the city represented by the button using the data attribute that was set when creating the button
                cityWeather = storedWeather[event.target.getAttribute("data-order")];
                cityData = storedCities[event.target.getAttribute("data-order")];
                //display the weather data 
                displayWeather();
            });
        }
    }

}

//function to get city weather using its name
function getCityWeatherFromName(name){
    
    //construct request URL to get city coordinates from name
    var requestCityCoordinates = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=022816ce4f8542d4f9f3d06e40efbb54";
    //call the server API to get city coordinates from name
    fetch(requestCityCoordinates)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    cityData = data;
    //get the weather data using coordinates obtained
    getCityWeather(cityData.coord.lat, cityData.coord.lon);
    });
}

//function to get weather data using latitude and longitude
function getCityWeather(lat, lon){
    //construct URL to get weather data    
    var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=022816ce4f8542d4f9f3d06e40efbb54&units=metric";    
        //call the API to get the weather data
        fetch(requestCityWeather)
        .then(function (response){
            return response.json();
        })
        .then(function(weather){
            cityWeather = weather;
            //update the GUI with the data returned by the API and stored in cityWeather
            displayWeather();
        });
}

//function to update GUI with weather data for current and 5 day forecast
function displayWeather(){
//loop to show 5 day divs
    const nodeList = document.querySelectorAll(".weatherInfo");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display = "block";
}
//display data from current and 5 days forecast into corresponding div
    var uvIndex;
    document.getElementById("city").textContent = cityData.name;
    document.getElementById("temp").textContent = "Temperature: "+cityWeather.current.temp;
    document.getElementById("wind").textContent = "Wind Speed: "+cityWeather.current.wind_speed;
    document.getElementById("humidity").textContent = "Humidity: "+cityWeather.current.humidity;
    document.getElementById("uv").textContent = "Uv Index: "+cityWeather.current.uvi;
    uvIndex = parseFloat(cityWeather.current.uvi);

    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv").style.backgroundColor = "yellow";
    else
    document.getElementById("uv").style.backgroundColor = "green";

    document.getElementById("date").textContent = new Date(cityWeather.daily[0].dt*1000).toDateString();

    document.getElementById("city1").textContent = cityData.name;
    document.getElementById("temp1").textContent = "Temperature: "+cityWeather.daily[1].temp.day;
    document.getElementById("wind1").textContent = "Wind Speed: "+cityWeather.daily[1].wind_speed;
    document.getElementById("humidity1").textContent = "Humidity: "+cityWeather.daily[1].humidity;
    document.getElementById("uv1").textContent = "UV Index: "+cityWeather.daily[1].uvi;

    uvIndex = parseFloat(cityWeather.daily[1].uvi);
    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv1").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv1").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv1").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv1").style.backgroundColor = "yellow";
    else
    document.getElementById("uv1").style.backgroundColor = "green";


    document.getElementById("date1").textContent = new Date(cityWeather.daily[1].dt*1000).toDateString();


    document.getElementById("city2").textContent = cityData.name;
    document.getElementById("temp2").textContent = "Temperature: "+cityWeather.daily[2].temp.day;
    document.getElementById("wind2").textContent = "Wind Speed: "+cityWeather.daily[2].wind_speed;
    document.getElementById("humidity2").textContent = "Humidity: "+cityWeather.daily[2].humidity;
    document.getElementById("uv2").textContent = "UV Index: "+cityWeather.daily[2].uvi;

    uvIndex = parseFloat(cityWeather.daily[2].uvi);
    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv2").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv2").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv2").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv2").style.backgroundColor = "yellow";
    else
    document.getElementById("uv2").style.backgroundColor = "green";


    document.getElementById("date2").textContent = new Date(cityWeather.daily[2].dt*1000).toDateString();


    document.getElementById("city3").textContent = cityData.name;
    document.getElementById("temp3").textContent = "Temperature: "+cityWeather.daily[3].temp.day;
    document.getElementById("wind3").textContent = "Wind Speed: "+cityWeather.daily[3].wind_speed;
    document.getElementById("humidity3").textContent ="Humidity: "+ cityWeather.daily[3].humidity;
    document.getElementById("uv3").textContent = "UV Index: "+cityWeather.daily[3].uvi;

    uvIndex = parseFloat(cityWeather.daily[3].uvi);
    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv3").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv3").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv3").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv3").style.backgroundColor = "yellow";
    else
    document.getElementById("uv3").style.backgroundColor = "green";


    document.getElementById("date3").textContent = new Date(cityWeather.daily[3].dt*1000).toDateString();

    document.getElementById("city4").textContent = cityData.name;
    document.getElementById("temp4").textContent = "Temperature: "+cityWeather.daily[4].temp.day;
    document.getElementById("wind4").textContent = cityWeather.daily[4].wind_speed;
    document.getElementById("humidity4").textContent ="Humidity: "+ cityWeather.daily[4].humidity;
    document.getElementById("uv4").textContent = "UV Index: "+cityWeather.daily[4].uvi;


    uvIndex = parseFloat(cityWeather.daily[4].uvi);
    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv4").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv4").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv4").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv4").style.backgroundColor = "yellow";
    else
    document.getElementById("uv4").style.backgroundColor = "green";

    document.getElementById("date4").textContent = new Date(cityWeather.daily[4].dt*1000).toDateString();

    document.getElementById("city5").textContent = cityData.name;
    document.getElementById("temp5").textContent = "Temperature: "+cityWeather.daily[5].temp.day;
    document.getElementById("wind5").textContent = "Wind Speed: "+cityWeather.daily[5].wind_speed;
    document.getElementById("humidity5").textContent ="Humidity: "+ cityWeather.daily[5].humidity;
    document.getElementById("uv5").textContent = "UV Index: "+cityWeather.daily[5].uvi;

    uvIndex = parseFloat(cityWeather.daily[5].uvi);
    //change background value based on UV index value
    if(uvIndex>11)
    document.getElementById("uv5").style.backgroundColor = "violet";
    else if(uvIndex>8)
    document.getElementById("uv5").style.backgroundColor = "red";
    else if(uvIndex>6)
    document.getElementById("uv5").style.backgroundColor = "orange";
    else if(uvIndex>3)
    document.getElementById("uv5").style.backgroundColor = "yellow";
    else
    document.getElementById("uv5").style.backgroundColor = "green";


    document.getElementById("date5").textContent = new Date(cityWeather.daily[5].dt*1000).toDateString();


    //change the icons based on returned icon codes
    document.getElementById("icon").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[0].weather[0].icon+".png";
    document.getElementById("icon1").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[1].weather[0].icon+".png";
    document.getElementById("icon2").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[2].weather[0].icon+".png";
    document.getElementById("icon3").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[3].weather[0].icon+".png";
    document.getElementById("icon4").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[4].weather[0].icon+".png";
    document.getElementById("icon5").src = "https://openweathermap.org/img/wn/"+cityWeather.daily[5].weather[0].icon+".png";

    

    
    //there are no stored values in local storage (first search) so create a new array
    if(!storedWeather){
        storedWeather = new Array();
        storedCities = new Array();
    }

    var repeated = false;
    var j;
    //for loop to check if this city has been stored before in local storage to avoid redundancy
    for (j=0;j<storedWeather.length;j++){
        if(storedCities[j].name == cityData.name){
            repeated = true;
            break;
        }
    }
    //the city is not repeated so store the value in locak storage on top of old values, if any
    if(!repeated){
        storedWeather.push(cityWeather);
    storedCities.push(cityData);
    //store values into local storage
    localStorage.setItem("WeatherSearch",JSON.stringify(storedWeather));
    localStorage.setItem("CityNames",JSON.stringify(storedCities));
    }
    

}
//add event listener to search button to start the whole process
document.getElementById("searchBtn").addEventListener("click",function(){
    var cityName = document.getElementById("cityInput").value;
    getCityWeatherFromName(cityName);
})



