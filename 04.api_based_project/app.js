let textbtn = document.getElementById("textbtn");
textbtn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/message.txt", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = xhr.responseText;
      // console.log(data)
      displaydata(data);
    }
  };
});
function displaydata(data) {
  let textcard = document.getElementById("textcard");
  textcard.innerHTML = `<h3>${data}</h3>`;
}

//json data display function

jsonbtn = document.getElementById("jsonbtn");
jsonbtn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/messages.json", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = xhr.responseText;
      data1 = JSON.parse(data);
      displayjsondata(data1);
    }
  };
});
function displayjsondata(data1) {
  textcard2 = document.getElementById("textcard2");
  textcard2.innerHTML = `<ul class=jsondataul>
        <li class="jsondatali">name:${data1.name}</li>
        <li class="jsondatali">age:${data1.age}</li>
        <li class="jsondatali">gender : ${data1.gender}</li>
        <li class="jsondatali">company : ${data1.company}</li>
        <li class="jsondatali">email : ${data1.email}</li>
        <li class="jsondatali">phone : ${data1.phone}</li>
        <li class="jsondatali">address : ${data1.address}</li>
      
    </ul>`;
}
//display API data

apibtn = document.getElementById("apibtn");
apibtn.addEventListener("click", () => {
  xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      users=JSON.parse(data)
      console.log(users);
      displayapidata(users)
    }
  };
});

function displayapidata(users) {
  let htmlelement = "";
  for (let user of users) {
    htmlelement += `<ul>
            <li>id:${user.id}</li>
            <li>name : ${user.name}</li>
            <li>username : ${user.username}</li>
            <li>email : ${user.email}</li>
            <li>street : ${user.address.street}</li>
            <li>${user.address.city}</li>
        </ul>`;
  }

  let apicard = document.getElementById("textcard3");
  apicard.innerHTML=htmlelement
}

      
let reset=document.getElementById("reset")
reset.addEventListener("click",()=>{
    let apicard = document.getElementById("textcard3");
    apicard.innerHTML =""
     textcard2 = document.getElementById("textcard2");
     textcard2.innerHTML=""
      let textcard = document.getElementById("textcard");
      textcard.innerHTML=""
})