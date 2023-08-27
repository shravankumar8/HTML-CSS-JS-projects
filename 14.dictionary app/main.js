const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const results = document.querySelector(".results");
const searchbtn = document.querySelector(".search-box button");
let input_word = document.querySelector(".search-box input");
let audibtn = document.querySelector(".audioread");
let sound = document.querySelector("#audioPlayer")



searchbtn.addEventListener("click",()=>{
    let inpWord = input_word.value
if (inpWord==""){
    alert("Please enter")
    
}else{
    
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        
        results.style.display = "block";
        console.log(data);

      
    //   sound.setAttribute("src", "https:$(data[0]. phonetics[0].audio)"
      results.innerHTML = `
      
      <div class="word">
      <h1>${inpWord}</h1>
      
      </div>
      <div
            class="details">
            <p class="pos">${data[0].meanings[0].partOfSpeech}</p>
            <p class="sample">${data[0].phonetic}</p>
        
        </div>
        <div class="word-info">
            <p class="word-meaning">${
              data[0].meanings[0].definitions[0].definition
            }</p>
            <p class="word-example">${
              data[0].meanings[0].definitions[0].example ||
              data[0].meanings[0].definitions[1].example ||
              data[0].meanings[0].definitions[2].example
            }</p>
        </div>
        </div>
`;
    });

}

})
window.onload=()=>{
    results.style.display="none";
}