let speech = new SpeechSynthesisUtterance
let btn = document.querySelector(".btmitms button");
let datatoread=document.querySelector("textarea");
let voices = [];
let voiceselect=document.querySelector("select")
voiceselect.addEventListener("change", ()=>{
    speech.voice = voices[voiceselect.value]
})
btn.addEventListener("click",()=>{
    speech.text = datatoread.value;
    window.speechSynthesis.speak(speech)
    

    window.speechSynthesis.onvoiceschanged=()=>{
        voices=window.speechSynthesis.getVoices();
        speech.voice = voices[1]
        voices.forEach((voice,i)=>(voiceselect.options[i])=new Option(voice.name,i))
    }

    console.log(voices)
})
