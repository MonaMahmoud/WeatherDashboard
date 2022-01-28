var cityData;
var cityWeather;
// var cityName;

function getCityWeatherFromName(name){
    // cityName = name;
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
    getCityWeather(cityData.coord.lat, cityData.coord.lon);
    });
}

function getCityWeather(lat, lon){
    //if it's not a null city
        var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=022816ce4f8542d4f9f3d06e40efbb54&units=metric";    
        fetch(requestCityWeather)
        .then(function (response){
            return response.json();
        })
        .then(function(weather){
            cityWeather = weather;
            //update the GUI with the cityWeather
            displayWeather();
        });
}

function displayWeather(){
    console.log(cityWeather)

    const nodeList = document.querySelectorAll(".weatherInfo");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.display = "block";
}

    document.getElementById("city").textContent = cityData.name;
    document.getElementById("temp").textContent = "Temperature: "+cityWeather.current.temp;
    document.getElementById("wind").textContent = "Wind Speed: "+cityWeather.current.wind_speed;
    document.getElementById("humidity").textContent = "Humidity: "+cityWeather.current.humidity;
    document.getElementById("uv").textContent = "UV Index: "+cityWeather.current.uvi;
    document.getElementById("date").textContent = new Date(cityWeather.daily[0].dt*1000).toDateString();

    document.getElementById("city1").textContent = cityData.name;
    document.getElementById("temp1").textContent = "Temperature: "+cityWeather.daily[1].temp.day;
    document.getElementById("wind1").textContent = "Wind Speed: "+cityWeather.daily[1].wind_speed;
    document.getElementById("humidity1").textContent = "UV Index: "+cityWeather.daily[1].humidity;
    document.getElementById("uv1").textContent = cityWeather.daily[1].uvi;
    document.getElementById("date1").textContent = new Date(cityWeather.daily[1].dt*1000).toDateString();


    document.getElementById("city2").textContent = cityData.name;
    document.getElementById("temp2").textContent = "Temperature: "+cityWeather.daily[2].temp.day;
    document.getElementById("wind2").textContent = "Wind Speed: "+cityWeather.daily[2].wind_speed;
    document.getElementById("humidity2").textContent = "Humidity: "+cityWeather.daily[2].humidity;
    document.getElementById("uv2").textContent = "UV Index: "+cityWeather.daily[2].uvi;
    document.getElementById("date2").textContent = new Date(cityWeather.daily[2].dt*1000).toDateString();


    document.getElementById("city3").textContent = cityData.name;
    document.getElementById("temp3").textContent = "Temperature: "+cityWeather.daily[3].temp.day;
    document.getElementById("wind3").textContent = "Wind Speed: "+cityWeather.daily[3].wind_speed;
    document.getElementById("humidity3").textContent ="Humidity: "+ cityWeather.daily[3].humidity;
    document.getElementById("uv3").textContent = "UV Index: "+cityWeather.daily[3].uvi;
    document.getElementById("date3").textContent = new Date(cityWeather.daily[3].dt*1000).toDateString();

    document.getElementById("city4").textContent = cityData.name;
    document.getElementById("temp4").textContent = "Temperature: "+cityWeather.daily[4].temp.day;
    document.getElementById("wind4").textContent = cityWeather.daily[4].wind_speed;
    document.getElementById("humidity4").textContent ="Humidity: "+ cityWeather.daily[4].humidity;
    document.getElementById("uv4").textContent = "UV Index: "+cityWeather.daily[4].uvi;
    document.getElementById("date4").textContent = new Date(cityWeather.daily[4].dt*1000).toDateString();

    document.getElementById("city5").textContent = cityData.name;
    document.getElementById("temp5").textContent = "Temperature: "+cityWeather.daily[5].temp.day;
    document.getElementById("wind5").textContent = "Wind Speed: "+cityWeather.daily[5].wind_speed;
    document.getElementById("humidity5").textContent ="Humidity: "+ cityWeather.daily[5].humidity;
    document.getElementById("uv5").textContent = "UV Index: "+cityWeather.daily[5].uvi;
    document.getElementById("date5").textContent = new Date(cityWeather.daily[5].dt*1000).toDateString();


    // if(parseFloat(cityWeather.daily[5].uvi)>11)
    // getElementById("UVI5").src = "./Assets/images/ultraviolet.jfif";

    
    document.getElementById("icon").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[0].weather[0].icon+".png";
    document.getElementById("icon1").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[1].weather[0].icon+".png";
    document.getElementById("icon2").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[2].weather[0].icon+".png";
    document.getElementById("icon3").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[3].weather[0].icon+".png";
    document.getElementById("icon4").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[4].weather[0].icon+".png";
    document.getElementById("icon5").src = "http://openweathermap.org/img/wn/"+cityWeather.daily[5].weather[0].icon+".png";

}

document.getElementById("searchBtn").addEventListener("click",function(){
    var cityName = document.getElementById("cityInput").value;
    getCityWeatherFromName(cityName);
})



