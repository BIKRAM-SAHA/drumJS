function removetransition(e){
    if (e.propertyName!="transform") return;
    this.classList.remove("playing");
}

function playsound(e){
    let audio = document.querySelector(`audio[data-key="${e.code}"]`);
    let key = document.querySelector(`.key[data-key="${e.code}"]`)
     
    if(e.type=="keydown"){
        audio = document.querySelector(`audio[data-key="${e.code}"]`);
        key = document.querySelector(`.key[data-key="${e.code}"]`)
    }
    if(e.type=="click"){
        audio = document.querySelector(`audio[data-key="${this.getAttribute("data-key")}"]`);
        key = this;
    }

     // if(!audio) return;
     audio.currentTime=0;
     audio.play();
     key.classList.add("playing");
}

const keys=document.querySelectorAll(".key");
keys.forEach(key=>key.addEventListener("transitionend",removetransition))

window.addEventListener("keydown", playsound)
keys.forEach(key=>key.addEventListener('click',playsound))