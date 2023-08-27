let searchBtn = document.querySelector(".wrapper button");
let countryinp = document.querySelector(".wrapper input");
let replacableDiv = document.querySelector(".replaceble");
 let favcon1=document.querySelector("#favcon");
searchBtn.addEventListener("click", () => {
  let finalurl = `https://restcountries.com/v3.1/name/${countryinp.value}?fullText=true`;

  fetch(finalurl)
    .then((response) => response.json())
    .then((data) => {
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", ")
        );
          favcon1.setAttribute("href", data[0].flags.png);
          console.log(favcon1)
          replacableDiv.innerHTML = `
           <div class="information">
            <img class="nationalFlag" src="${data[0].flags.png}" alt="">
            <h1 class="nationName">${data[0].name.common}</h1>
        </div>
        <div class="nationDetails">
            <p><span class="nameHeaders">Capital</span> : ${
              data[0].capital[0]
            }</p>
            <p><span class="nameHeaders">Continent</span>: ${
              data[0].continents[0]
            }</p>
            <p><span class="nameHeaders">Population</span> : ${
              data[0].population
            }</p>
            <p><span class="nameHeaders">Currency </span>: ${
              data[0].currencies[Object.keys(data[0].currencies)].name
            }</p>
            <p><span class="nameHeaders">Spoken Languages</span> : ${Object.values(
              data[0].languages
            )
              .toString()
              .split(",")
              .join(", ")}</p>
            
        
        </div>
        `;
      
    }).catch(()=>{ 
        if (countryinp.value.length==0) {
            replacableDiv.innerHTML =`
            <h4 class="error">The input field cannot be empty</h4>`
        }else{
            replacableDiv.innerHTML = `
            <h4 class="error">Please enter a valid country name.</h4>`;

        }
    });
});
