
    
async function checkWeather(city){


  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=863242cfb2b1d357e6093d9a4df19a4b&units=metric`
  );
  let data=await response.json();
    console.log((data));
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr";
    if (data.weather[0].main == "Clouds") {
      img = document.querySelector(".weather-icon");
      img.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      img = document.querySelector(".weather-icon");
      img.src = "images/clear.png";
    }
    if (data.weather[0].main == "Drizzle") {
      img=document.querySelector(".weather-icon")
      img.src="images/drizzle.png"
    }
    if (data.weather[0].main == "Mist") {
      img = document.querySelector(".weather-icon");
      img.src = "images/mist.png";
    }
    if (data.weather[0].main == "Rain") {
      img=document.querySelector(".weather-icon")
      img.src="images/rain.png"
    }
    if (data.weather[0].main == "Snow") {
      img=document.querySelector(".weather-icon")
      img.src="images/snow.png"
    }
}

function searchstart(){
  document.querySelector(".search button").addEventListener("click",()=>{

    let city = document.querySelector(".search input").value
    checkWeather(city);
    console.log("city");
  })
  
}
    searchstart()


