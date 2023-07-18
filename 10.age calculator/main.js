document.querySelector(".calculatebtn").addEventListener("click", () => {
  let inputbox = document.querySelector(".inputbox input");
  console.log(inputbox.value);
  if(inputbox==""){
    alert("please enter a valid date");
  }else{
  currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth()+1;
  var day = currentDate.getDate();

  let yar = new Date(inputbox.value);
  let birthyear = yar.getFullYear();
  let birthmonth = yar.getMonth()+1;
  let birthday = yar.getDate();
  birthyeardiff = year - birthyear;
  birthmonthdiff = month - birthmonth;
  birthdaydiff = day - birthday;

 
    if (isNaN(birthyeardiff)) {
      alert("Please enter a valid date");
    } else {
      let display = document.querySelector(".agefactors");
      display.innerHTML = `Age is ${birthyeardiff} years ${birthmonthdiff} months ${birthdaydiff} days`;
    }
}
});
// isNAN() is nan is a function which return true if a number is not a number 