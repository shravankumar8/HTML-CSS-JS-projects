let generateButton = document.querySelector(".generate-image");
inputData = document.querySelector(".prompt-input");
var selectElement = document.querySelector(".image-quantity");
let generateForm = document.querySelector(".generate-form");
let imageGallery = document.querySelector(".image-gallery");
let openAPI = "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";
let sampleImage = document.querySelector(".sampleimages");
const updateImageCard = (imgDataArray)=>{
    console.log("updateImageCard")
    imgDataArray.forEach((imgObject,index)=>{
      const imgCard = imageGallery.querySelectorAll(".img-card")[index];
      const imgElement = imgCard.querySelector("img");
      // const imgElement = imgCard.querySelector("img");

const aiGeneratedImg = `data:image/jpeg;base64,${imgObject.b64_json}`;
  let downloadBtn = imgCard.querySelector(".download-btn");
      imgElement.src = aiGeneratedImg;
      imgElement.onload = () => {
        imgCard.classList.remove("loading");
       downloadBtn.setAttribute("href", `${aiGeneratedImg}`);
       downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
    

      };
    })
}
const generateAIimages = async (userInput, userImgQuantity) => {
  try {
    // Use fetch to make an HTTP request to the specified URL
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",{
        method :"POST",
        headers :{
            "content-Type": "application/json",
            "Authorization":`Bearer ${openAPI}`
        },body:JSON.stringify({
           prompt :userInput ,
           n:parseInt(userImgQuantity),
           size:"512x512",
           response_format :"b64_json"
        })
      });
      if(!response.ok)throw new Error("failed to generate images !please try again");
const {data}=await response.json();
console.log(data);
updateImageCard(data)

    
  } catch (error) {
    // Handle errors that occurred during the fetch operation

  }
};

// Call the async function (example)
generateAIimages("SomeInput", 3);

const handleFormSubmission = (e) => {
  e.preventDefault();
  // Get user imput and image quantity values from the form
  const userInput = e.srcElement[0].value;
  const userImgQuantity = e.srcElement[1].value;
  console.log(userInput, userImgQuantity);
  const imgCardMarkup = Array.from(
    { length: userImgQuantity },
    () =>
      `    <div class="img-card loading borders">
            <img src="./assets/loading.svg" alt="">
            <a href="#" class="download-btn"><img src="./assets/download-solid.svg" alt="download icon"></a>
        </div>`
  ).join("");
  imageGallery.innerHTML = imgCardMarkup;
  generateAIimages(userInput, userImgQuantity);
sampleImage.style.display = "none";

};

generateForm.addEventListener("submit", handleFormSubmission);
window.onload=()=>{

    sampleImage.style.display = "block";
}