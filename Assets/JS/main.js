var cityData;
var cityWeather;

function getCityWeatherFromName(name){
    //construct request URL to get city coordinates from name
    var requestCityCoordinates = "http://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=022816ce4f8542d4f9f3d06e40efbb54";
    //call the server API to get city coordinates from name
    fetch(requestCityCoordinates)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    cityData = data;
    //get the weather data using coordinates obtained
    //console.log(cityData);
    getCityWeather(cityData.coord.lat, cityData.coord.lon);
    });
}

function getCityWeather(lat, lon){
    //if it's not a null city
    //if(cityData){
        ////construct request URL to get city weather info from coordinates
        //var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+cityData.coord.lat+"&lon="+cityData.coord.lon+"&appid=022816ce4f8542d4f9f3d06e40efbb54";    
        var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=022816ce4f8542d4f9f3d06e40efbb54&units=metric";    
        fetch(requestCityWeather)
        .then(function (response){
            return response.json();
        })
        .then(function(weather){
            cityWeather = weather;
            //next should be calling a function to update the GUI with the cityWeather
            displayWeather();

        });
}

function displayWeather(){
    console.log(cityWeather)
    //var displayContainer = document.getElementById("results");
    var title = document.createElement('h1');
    title.textContent = cityData.name;
    //displayContainer.append(title);
    // var temp = document.createElement('p');
    // var humidity = document.createElement('p');
    // var wind = document.createElement('p');
    // var uv = document.createElement('p');
    var temp = document.getElementById("temp");
    var humidity = document.getElementById("humidity");
    var wind = document.getElementById("wind");
    var uv = document.getElementById("uv");
    temp.textContent = "Temperature: "+cityWeather.current.temp;
    humidity.textContent = "Humidity: "+cityWeather.current.humidity;
    wind.textContent = "Wind Speed: "+cityWeather.current.wind_speed;
    uv.textContent = "UV Index: "+cityWeather.current.uvi;
    // displayContainer.append(temp);
    // displayContainer.append(humidity);
    // displayContainer.append(wind);
    // displayContainer.append(uv);
    // displayContainer.appendChild(temp);
    // displayContainer.appendChild(humidity);
    // displayContainer.appendChild(wind);
    // displayContainer.appendChild(uv);
    console.log(new Date(cityWeather.daily[0].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[1].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[2].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[3].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[4].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[5].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[6].dt*1000).toDateString());
    console.log(new Date(cityWeather.daily[7].dt*1000).toDateString());
}

document.getElementById("searchBtn").addEventListener("click",function(){
    var cityName = document.getElementById("cityInput").value;
    getCityWeatherFromName(cityName);
})



