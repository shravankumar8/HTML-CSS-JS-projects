document.querySelector(".calculatebtn").addEventListener("click", () => {
  let inputbox = document.querySelector(".inputbox input");
  currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth+1();
  var day = currentDate.getDate();

  let yar = new Date(inputbox.value);
  let birthyear = yar.getFullYear();
  let birthmonth = yar.getMonth+1();
  let birthday = yar.getDate();
  birthyeardiff = year - birthyear;
  birthmonthdiff = month - birthmonth;
  birthdaydiff = day - birthday;
  console.log(birthdaydiff);

  document.querySelector(".gandu").innerHTML=`you are ${birthyeardiff}years ${birthmonthdiff}Months ${birthdaydiff}Days `;
});
