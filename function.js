const apikey="5f1c31d2c1f850dc452f63f9f2dc6b51";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{

        var data=await response.json();
    
        
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ " °C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        }
       else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png";
        }
       else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
}

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
