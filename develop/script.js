// var city=document.getElementById("city");
// var searchButton=document.getElementById(searchButton);
// searchButton.addEventListener('click', fetchWeather);
   var tempText=document.getElementById('temp');
   var windText=document.getElementById('wind');
   var humidityText=document.getElementById('humidity');
   var conditionsText=document.getElementById('conditions');
   var uvIndex=document.getElementById('uvIndex');
   var date1=document.getElementById('date1');
   var date2=document.getElementById('date2');
   var date3=document.getElementById('date3');
   var date4=document.getElementById('date4');
   var date5=document.getElementById('date5');
   var temp1=document.getElementById('temp1');
   var temp2=document.getElementById('temp2');
   var temp3=document.getElementById('temp3');
   var temp4=document.getElementById('temp4');
   var temp5=document.getElementById('temp5');
   var wind1=document.getElementById('wind1');
   var wind2=document.getElementById('wind2');
   var wind3=document.getElementById('wind3');
   var wind4=document.getElementById('wind4');
   var wind5=document.getElementById('wind5');
   var humid1=document.getElementById('humid1');
   var humid2=document.getElementById('humid2');
   var humid3=document.getElementById('humid3');
   var humid4=document.getElementById('humid4');
   var humid5=document.getElementById('humid5');



   var apikey='041f42dffbaa5c5ba881461d212efe79'
   var apiUrl='https://api.openweathermap.org/data/2.5/onecall?lat=28.53&lon=-81.37&exclude=minutely,hourly&appid=' + apikey; + '&units=imperial'
    function fetchWeather(){
        fetch(apiUrl)
        .then((response) => {
           return response.json();
         })
        .then((data) => {
            console.log(data);
         var tempEl=data.current.temp;
         var windEl=data.current.wind_speed;
         var humidityEl=data.current.humidity;
         var conditionsEl=data.current.weather[0].description;
         var uvIndexEl=data.current.uvi;
         console.log(tempEl);
         console.log(windEl);
         console.log(humidityEl);
         console.log(conditionsEl);
         console.log(uvIndexEl);

         tempText.textContent='Temperature: ' + tempEl; 
         windText.textContent='Wind: ' + windEl;
         humidityText.textContent='Humidity: ' + humidityEl;
         conditionsText.textContent='Conditions: ' + conditionsEl;
         uvIndex.textContent='UV Index: ' + uvIndexEl;
      })
      };


         
 
 
     
    //  function search(){
    //      this.fetchWeather(document.querySelector("#city").value)
    //  }
      

fetchWeather();
