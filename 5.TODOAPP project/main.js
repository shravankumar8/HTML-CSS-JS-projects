const  addbtn = document.querySelector(".addbtn");
const  input=document.querySelector(".input");
const  closebtn=document.querySelector(".closebtn");
const  checkbox=document.querySelector(".checkbox");
const  forms=document.querySelector(".addcontainer") ;
const inputfield=document.querySelector(".inputtext")

let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

forms.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputvalue = inputfield.value
    if(inputvalue==""){
        return
    }
    const task={
        id:new Date().getTime(),
        name:inputvalue,
        iscompleted:false,
    }
     
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    createtask(task)
 forms.reset()
 inputfield.focus()
})

function createtask(task){
    const task

     
}