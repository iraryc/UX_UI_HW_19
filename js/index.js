resume = document.querySelector(".resume");
        
resume.onclick = function (){
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Success!";
        this.style = "background: #CCA2A2; color: white; pointer-events: none";
    }, 2000);
}

