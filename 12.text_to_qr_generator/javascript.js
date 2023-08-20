document.addEventListener("DOMContentLoaded", () => {
  let gembutton = document.querySelector(".genbtn");
  let input = document.querySelector("#inputtext");
  let qrimage = document.querySelector(".qrimage");
  let apis = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

 gembutton.addEventListener("click", () => {
    if (input.value.length==0) {
        input.classList.add ( "error")
        setTimeout(() => {
            input.classList.remove("error");
        }, 350);
    }else{
   qrimage.src = apis + input.value;
   qrimage.style.display = "block";
    }
 });

});
 window.onload = () => {
   let qrimage = document.querySelector(".qrimage");
   qrimage.style.display = "none";
 };