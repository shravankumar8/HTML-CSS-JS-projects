
document.querySelector(".error").style.display = "none";

async function checkWeather(city){


  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5f565e72e1c5c405f8331b9eb430e9f=metric`
  );
    if (response.status === 404) {
      error=document.querySelector(".error")
      error.innerHTML="please enter a valid city name";
       error.style.display = "block";
        document.querySelector(".weather").style.display = "none";
        
      }
      else if (response.status === 400) {
        error=document.querySelector(".error")
        error.innerHTML ="please enter a value";
        error.style.display="block";
        document.querySelector(".weather").style.display = "none";
    }else{

  document.querySelector(".error").style.display = "none";
    }
    

    let data=await response.json();
  console.log((data));
  document.querySelector(".city").innerHTML = data.name ;
  document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr";
  document.querySelector(".weather").style.display = "block";
    if (data.weather[0].main == "Clouds") {
      img = document.querySelector(".weather-icon");
      img.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
      img = document.querySelector(".weather-icon");
      img.src = "images/clear.png";
    }
   else if (data.weather[0].main == "Drizzle") {
      img=document.querySelector(".weather-icon")
      img.src="images/drizzle.png"
    }
   else if (data.weather[0].main == "Mist") {
      img = document.querySelector(".weather-icon");
      img.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
      img=document.querySelector(".weather-icon")
      img.src="images/rain.png"
    }
   else if (data.weather[0].main == "Snow") {
      img=document.querySelector(".weather-icon")
      img.src="images/snow.png"
    }
   
}


  document.querySelector(".search button").addEventListener("click",()=>{

    let city = document.querySelector(".search input").value
    checkWeather(city);

  }) 
  document.querySelector(".weather").style.display = "none"
  window.onload = ()=>{
  }


  


