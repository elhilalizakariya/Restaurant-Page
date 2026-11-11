import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"



const initNavbar = (()=>{
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact");  
    const container = document.querySelector("#content");
    home();

    homeButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        home();
    })
    menuButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        menu();
    })
    contactButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        contact();
    })


    
})();




