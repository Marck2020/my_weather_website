// ONCLICK FUNCTION AND MAIN VARIABLES //
button.onclick = function showWeather() {
    require('dotenv').config();
    let apiKey = process.env.SECRET_KEY;
 

 var city = document.getElementById("weather-search").value;


let uri =  "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey;
console.log(document.getElementById("city-name"));
console.log(uri);





var request = new XMLHttpRequest();

request.open("GET", uri, true);

// JSON REQUEST OK //

request.onload = function(){
    if ( request.status >= 200 && request.status < 400 ){
        var data = JSON.parse(this.response);
        var weather = data.weather[0].main;
        console.log(weather);
        var temp = data.main.temp; 
        var tempMin = data.main.temp_min;
        var tempMax = data.main.temp_max;
        tempMax = parseInt(tempMax) - 273.15;
        tempMax = Math.ceil(tempMax);
        tempMin = parseInt(tempMin) - 273.15;
        tempMin = Math.floor(tempMin);
        temp = parseInt(temp) - 273;

        var feels_like = data.main.feels_like;
        feels_like = parseInt(feels_like) - 273.15;
        feels_like = Math.ceil(feels_like);
        var countryCity = data.sys.country;

        var windiz = data.wind.speed;
        document.getElementById("mycity-container").style.display = "block";
        document.getElementById("container1").style.display = "block";  
        document.getElementById("container2").style.display = "block";
        document.getElementById("container3").style.display = "block";
        document.getElementById("container4").style.display = "block";
        
        document.getElementById("message").style.display = "none";
        
        document.getElementById("weather-search").style.backgroundColor = "rgba(0, 0, 0, 0.267)";

        
        // SET DIFFERENT WEATHER CONDITIONS //

        if ( weather == "Clear" ){
            weather =  "Sunny";
            var sunnyIcon = document.getElementById("weather-icon");
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src = "./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            sunnyIcon.src = "./sunnyIcon.png";
            sunnyIcon.style.setProperty('width','80px');
            sunnyIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./sunny-background1.jpg')";

    

            
                        
        } else if ( weather == "Rain" ) {
            weather = "Rain";
            var rainyIcon = document.getElementById("weather-icon");
            
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.style.setProperty('margin-left', '10px');
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('hieght','30px');
            rainyIcon.src = "./white-clouds.png";
            document.body.style.backgroundImage = "url('./rainy-background.jpg')";
            rainyIcon.style.setProperty('width','80px');
            rainyIcon.style.setProperty('margin-left','65px');


        } else if ( weather == "Mist" ) {
            weather = "Light Fog";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            locationpointer.style.setProperty('height','30px');
            var mistyIcon = document.getElementById("weather-icon");
            mistyIcon.src= "./mistyIcon.png";
            mistyIcon.style.setProperty('width','80px');
            mistyIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./foggy-background.jpg')";
                 

        } else if ( weather == "Fog" ) {
            weather = "Heavy Fog";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var foggyIcon = document.getElementById("weather-icon");
            foggyIcon.src= "./foggy-icon.png";
            foggyIcon.style.setProperty('width','80px');
            foggyIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./foggy-background.jpg')";
            
        
        } else if ( weather == "Clouds" ) {      
            weather = "Cloudy";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var cloudsIcon = document.getElementById("weather-icon");
            cloudsIcon.src= "./cloudyIcon.png";
            document.body.style.backgroundImage = "url('./clouds-background.jpg')";
            cloudsIcon.style.setProperty('width','80px');
            cloudsIcon.style.setProperty('margin-left','65px');
        
        
        } else if ( weather == "Snow" ) {
            weather = "Snow";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var snowyIcon = document.getElementById("weather-icon");
            snowyIcon.src= "./snowyIcon.png";
            document.body.style.backgroundImage = "url('./darkbackground-snow.jpg')";
            snowyIcon.style.setProperty('width','80px');
            snowyIcon.style.setProperty('margin-left','65px');

        } else if ( weather == "Thunderstorm" ) {
            weather = "Thunderstorm";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var thunderstormIcon = document.getElementById("weather-icon");
            thunderstormIcon.src="./thunderstorm-icon.png";
            thunderstormIcon.style.setProperty('width','80px');
            thunderstormIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./thunder-background.jpg')"

        } else if ( weather == "Drizzle" ) {
            weather = "Light rain";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var drizzleIcon =document.getElementById("weather-icon");
            drizzleIcon.src="./drizzle-icon.png";
            drizzleIcon.style.setProperty('width','80px');
            drizzleIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./drizzle1.jpg')";
        
        } else if ( weather == "Dust" ) {            
            weather = "Dust";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="./icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            foggyIcon = document.getElementById("weather-icon");
            foggyIcon.src= "./foggy-icon.png";
            foggyIcon.style.setProperty('width','80px');
            fpggyIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('./foggy-background.jpg')";


        } else if ( weather == "Tornado" ) {            
            weather = "Tornado";
            var locationpointer = document.getElementById("locationpointer");
            locationpointer.src="../icon-geo.png";
            locationpointer.style.setProperty('width','30px');
            locationpointer.style.setProperty('height','30px');
            locationpointer.style.setProperty('margin-left', '10px');
            var tornadoIcon = document.getElementById("weather-icon");
            tornadoIcon.src= "../tornado-icon.png";
            tornadoIcon.style.setProperty('width','80px');
            tornadoIcon.style.setProperty('margin-left','65px');
            document.body.style.backgroundImage = "url('../tornado-background2.jpg')";
        
        } else { weather = "Tempest";
        
        }
  // SHOW CONDITIONS ON THE SCREEN - VARIABLES //

        document.getElementById("my-city").innerHTML = city + ', ' + countryCity; 

        document.getElementById("degrees2").innerHTML = temp + "<span>&#8451;</span>";

        document.getElementById("feels-like1").innerHTML = " Feels like ";
        
        document.getElementById("feels-like2").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + feels_like + "<span>&#8451;</span>";

        document.getElementById("weather-conditions").innerHTML = weather;

       // document.getElementById("time1").innerHTML = timeOfToday;
               
        //document.getElementById("date1").innerHTML = showDay;

        document.getElementById("wind-speed").innerHTML = windiz + " km/h. ";

        document.getElementById("min-temp1").innerHTML = " Low. Temp ";

        document.getElementById("min-temp2").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + tempMin + "<span>&#8451;</span>";

        document.getElementById("max-temp1").innerHTML = " High. Temp ";

        document.getElementById("max-temp2").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + tempMax + "<span>&#8451;</span>";
    
        
    }else {

        document.getElementById("mycity-container").style.display = "none";
        document.getElementById("container1").style.display = "none";  
        document.getElementById("container2").style.display = "none";
        document.getElementById("container3").style.display = "none";
        document.getElementById("container4").style.display = "none";
        document.getElementById("weather-search").style.background="rgba(163, 0, 0, 0.55)";
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerHTML = "Please type a proper city or town!";
    }
};

request.send();
};