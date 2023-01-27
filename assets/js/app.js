let Aatrox = document.getElementById("Aatrox");
let Aatroxclicks = 0;
let boxMenu = document.querySelector(".header-box-menu-content");
let links = document.querySelectorAll(".link-item");

function AatroxIcon() {
    Aatroxclicks = Aatroxclicks + 1;
    if (Aatroxclicks % 2 != 0) {
        Aatrox.setAttribute("src", "assets/js/icon-menu-close.svg");
        boxMenu.classList.add("active");
    }else{
        Aatrox.setAttribute("src", "assets/js/icon-menu.svg");
        boxMenu.classList.remove("active");
    }
}

Aatrox.addEventListener("click",AatroxIcon)

links.forEach((item)=>{
    item.addEventListener("click",AatroxIcon);
});
