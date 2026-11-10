import home from "./home.js"
import contact from "./contact.js"


const initNavbar = (()=>{
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const contactButton = document.querySelector(".contact");  
    const container = document.querySelector("#content");
    
    homeButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        container.className = "homeContainer"
        home();
    })
    menuButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        home();
    })
    contactButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        contact();
    })
    
})();




