let toastbox = document.querySelector("#Toastbox");
Success = `<i class="fa-solid fa-circle-check"></i> submitted successfully`;
let error=`<i class="fa-solid fa-circle-xmark"></i>error details not found`
let Invalid = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input please check `;
function showtoast(msg){
    let toast=document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = msg;
    toastbox.appendChild(toast)
    if (msg.includes("error")) {
        toast.classList.add("error");
        
    }else if (msg.includes("Invalid")){
        toast.classList.add("Invalid");
    }
    setTimeout(() => {
        toast.remove("div")
    }, 3000);

}