 var searchBox=document.getElementById("searchBox");
var searchButton=document.getElementById('searchButton');
   var currentDate=document.getElementById('currentDate');
   var cityName=document.getElementById('cityName');
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
   var currentDateEl=moment().format('MMMM Do, YYYY');  
   var weatherIcon=document.getElementById('weatherIcon'); 


   var apikey='041f42dffbaa5c5ba881461d212efe79'

   
      function fetchWeather(){
         var city=searchBox.value;
         console.log(city);
         cityName.textContent='City: '+city;
      
      
         var cityUrl='http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&limit=5&appid=' + apikey;
      
            fetch(cityUrl)
            .then((response) =>{
               return response.json();
            })
            .then((data) => {
               console.log(data);
               var latEl=data[0].lat;
               var lonEl=data[0].lon;   
               console.log(latEl);
               console.log(lonEl);
            
         

         var apiUrl='https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl+ '&lon=' +lonEl+ '&exclude=minutely,hourly&appid=' + apikey + '&units=imperial'

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
         var iconID=data.current.weather[0].icon;
         weatherIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' +iconID+ '@2x.png');
         var uvIndexEl=data.current.uvi;

         if (uvIndexEl < 3){
            uvIndex.setAttribute('class', 'low')
         }
         else if (uvIndexEl < 7) {
            uvIndex.setAttribute('class', 'medium')
         }
         else {
            uvIndex.setAttribute('class', 'high')
         }
         console.log(latEl);
         console.log(lonEl);   

         console.log(tempEl);
         console.log(windEl);
         console.log(humidityEl);
         console.log(conditionsEl);
         console.log(uvIndexEl);

         currentDate.textContent='Date: ' + currentDateEl;
         tempText.textContent='Temperature: ' + tempEl + '??F';
         windText.textContent='Wind: ' + windEl + 'MPH';
         humidityText.textContent='Humidity: ' + humidityEl + '%';
         conditionsText.textContent='Conditions: ' + conditionsEl;
         uvIndex.textContent='UV Index: ' + uvIndexEl;


         var date1El=moment().add(1, 'days').format('MMMM Do, YYYY');
         var date2El=moment().add(2, 'days').format('MMMM Do, YYYY');
         var date3El=moment().add(3, 'days').format('MMMM Do, YYYY');
         var date4El=moment().add(4, 'days').format('MMMM Do, YYYY');
         var date5El=moment().add(5, 'days').format('MMMM Do, YYYY');

         date1.textContent=date1El;
         date2.textContent=date2El;
         date3.textContent=date3El;
         date4.textContent=date4El;
         date5.textContent=date5El;

          var weatherIcon1=document.getElementById('weatherIcon1');
         var weatherIcon2=document.getElementById('weatherIcon2');
         var weatherIcon3=document.getElementById('weatherIcon3');
         var weatherIcon4=document.getElementById('weatherIcon4');
         var weatherIcon5=document.getElementById('weatherIcon5');

         var weatherIcon1El=data.daily[1].weather[0].icon;
         weatherIcon1.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weatherIcon1El+ '@2x.png')
         var weatherIcon2El=data.daily[2].weather[0].icon;
         weatherIcon2.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weatherIcon2El+ '@2x.png')
         var weatherIcon3El=data.daily[3].weather[0].icon;
         weatherIcon3.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weatherIcon3El+ '@2x.png')
         var weatherIcon4El=data.daily[4].weather[0].icon;
         weatherIcon4.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weatherIcon4El+ '@2x.png')
         var weatherIcon5El=data.daily[5].weather[0].icon;
         weatherIcon5.setAttribute('src', 'http://openweathermap.org/img/wn/'+ weatherIcon5El+ '@2x.png')


         var temp1El=data.daily[1].temp.day;
         var temp2El=data.daily[2].temp.day;
         var temp3El=data.daily[3].temp.day;
         var temp4El=data.daily[4].temp.day;
         var temp5El=data.daily[5].temp.day;

         temp1.textContent='Temperature: '+ temp1El+'??F';
         temp2.textContent='Temperature: '+ temp2El+'??F';
         temp3.textContent='Temperature: '+ temp3El+'??F';
         temp4.textContent='Temperature: '+ temp4El+'??F';
         temp5.textContent='Temperature: '+ temp5El+'??F';

         var wind1El=data.daily[1].wind_speed;
         var wind2El=data.daily[2].wind_speed;
         var wind3El=data.daily[3].wind_speed;
         var wind4El=data.daily[4].wind_speed;
         var wind5El=data.daily[5].wind_speed;

         wind1.textContent='Wind: '+ wind1El+ 'MPH';
         wind2.textContent='Wind: '+ wind2El+ 'MPH';
         wind3.textContent='Wind: '+ wind3El+'MPH';
         wind4.textContent='Wind: '+ wind4El+'MPH';
         wind5.textContent='Wind: '+ wind5El+'MPH';

         var humid1El=data.daily[1].humidity;
         var humid2El=data.daily[2].humidity;
         var humid3El=data.daily[3].humidity;
         var humid4El=data.daily[4].humidity;
         var humid5El=data.daily[5].humidity;

         humid1.textContent='Humidity: '+ humid1El+ '%';
         humid2.textContent='Humidity: '+ humid2El+ '%';
         humid3.textContent='Humidity: '+ humid3El+ '%';
         humid4.textContent='Humidity: '+ humid4El+ '%';
         humid5.textContent='Humidity: '+ humid5El+ '%';


            


      
            

      var searchHistory=document.getElementById('searchHistory');

      localStorage.setItem('City', JSON.stringify(city))
      var searchedCity=document.createElement("button");
         searchedCity.setAttribute('class', 'history-button');
         searchedCity.innerHTML=city
         searchHistory.append(searchedCity);
         searchedCity.addEventListener('click', fetchWeather);

      })
   }
   )};

            searchButton.addEventListener('click',fetchWeather);

      
