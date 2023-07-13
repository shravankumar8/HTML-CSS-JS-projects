const inputbox=document.querySelector("#input-box");
const listcontainer=document.querySelector("#list-container");
const addbtn=document.querySelector("#addbtn");
addbtn.addEventListener("click",()=>{
    if(inputbox.value===""||inputbox.value===" "){
        alert("please enter a task")
    }else{
        let li=document.createElement("li");
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li);
        li.appendChild(span)
        savelocaldata();
    }
    inputbox.value=""
    inputbox.focus()
})
var count=0

var taskscompleted=0
listcontainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        count++
        console.log("tasks completed ="+count+". ID is ="+new Date().getTime())
        savelocaldata();
    }
       else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            taskscompleted++
            console.log("tasks cancelled ="+taskscompleted)
            savelocaldata();
            
        }
    },);
    function savelocaldata(){
        localStorage.setItem("data",listcontainer.innerHTML)
    }
    
    function displaydata(){
        listcontainer.innerHTML=localStorage.getItem("data");
    }
    displaydata()

