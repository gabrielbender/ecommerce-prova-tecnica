let mobileMenu = document.querySelector(".main-nav");
let mobileMenuIcon = document.querySelector(".menu-icon");

let elmClose = document.createElement("DIV");
elmClose.classList.add('close-menu');
mobileMenu.appendChild(elmClose);

mobileMenuIcon.addEventListener("click", function(){
    if(!mobileMenu.classList.contains("active-menu")){
        mobileMenu.classList.add("active-menu");
    } else {
        mobileMenu.classList.remove("active-menu");
    }  
});

elmClose.addEventListener('click', function(){
    mobileMenu.classList.remove("active-menu");
});

