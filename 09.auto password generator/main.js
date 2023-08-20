let passwordbox = document.querySelector("#Password");

const upperCase = "ABCFEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = `!@#$%^&*()-_=+[{]};:'"\|,<.>/?`;

const allchars = upperCase + LowerCase + Numbers + Symbols;
const lenght = 12;
function random() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Numbers[Math.floor(Math.random() * Numbers.length)];
  password += Symbols[Math.floor(Math.random() * Symbols.length)];
  while (password.length < lenght) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordbox.value = password;
}
let generatebtn = document.querySelector(".generate-btn");
generatebtn.addEventListener("click", () => {
  random();
});
let copybtn=document.querySelector(".copybtn");
copybtn.addEventListener("click",()=>{
  navigator.clipboard.writeText(passwordbox.value);
  if (passwordbox.value!=""){ alert("Password Copied")};
})