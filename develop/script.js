 var searchBox=document.getElementById("searchBox");
 var city=searchBox.value;
//var searchButton=document.getElementById(searchButton);
//searchButton.addEventListener('click', fetchWeather);
   var currentDate=document.getElementById('currentDate');
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
   var cityUrl='http://api.openweathermap.org/geo/1.0/direct?q=Orlando&limit=5&appid=' + apikey;
   
   
      function fetchWeather(){

        
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
         tempText.textContent='Temperature: ' + tempEl; 
         windText.textContent='Wind: ' + windEl;
         humidityText.textContent='Humidity: ' + humidityEl;
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

         var temp1El=data.daily[1].temp.day;
         var temp2El=data.daily[2].temp.day;
         var temp3El=data.daily[3].temp.day;
         var temp4El=data.daily[4].temp.day;
         var temp5El=data.daily[5].temp.day;

         temp1.textContent='Temperature: '+ temp1El;
         temp2.textContent='Temperature: '+ temp2El;
         temp3.textContent='Temperature: '+ temp3El;
         temp4.textContent='Temperature: '+ temp4El;
         temp5.textContent='Temperature: '+ temp5El;

         var wind1El=data.daily[1].wind_speed;
         var wind2El=data.daily[2].wind_speed;
         var wind3El=data.daily[3].wind_speed;
         var wind4El=data.daily[4].wind_speed;
         var wind5El=data.daily[5].wind_speed;

         wind1.textContent='Wind: '+ wind1El;
         wind2.textContent='Wind: '+ wind2El;
         wind3.textContent='Wind: '+ wind3El;
         wind4.textContent='Wind: '+ wind4El;
         wind5.textContent='Wind: '+ wind5El;

         var humid1El=data.daily[1].humidity;
         var humid2El=data.daily[2].humidity;
         var humid3El=data.daily[3].humidity;
         var humid4El=data.daily[4].humidity;
         var humid5El=data.daily[5].humidity;

         humid1.textContent='Humidity: '+ humid1El;
         humid2.textContent='Humidity: '+ humid2El;
         humid3.textContent='Humidity: '+ humid3El;
         humid4.textContent='Humidity: '+ humid4El;
         humid5.textContent='Humidity: '+ humid5El;



      

      })
            }
            )};
   
   

   
         
 
 
     
    //  function search(){
    //      this.fetchWeather(document.querySelector("#city").value)
    //  }
      
fetchWeather();