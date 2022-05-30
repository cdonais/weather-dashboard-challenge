var city=document.getElementById("city");
var searchButton=document.getElementById(searchButton);
searchButton.addEventListener('click', fetchWeather);
   var apikey='041f42dffbaa5c5ba881461d212efe79'
    var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=041f42dffbaa5c5ba881461d212efe79&units=imperial'


    function fetchWeather(city){
        fetch(apiUrl
        )
        .then((response)=>response.json())
        .then((data)=>console.log(data));
     }
     function displayWeather(data){

     }

    //  function search(){
    //      this.fetchWeather(document.querySelector("#city").value)
    //  }
