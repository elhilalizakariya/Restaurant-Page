import ramen from "../assets/kruntch-okinawasoba3.jpg"
import "./home.css";
import menu from "./menu.js";

export default function (){
    const container = document.querySelector("#content");

    container.className = "homeContainer";
    const h1 = document.createElement("h1");
    h1.innerHTML = 'Best Ramen Noodles </br> <section> In Town</section>';
    h1.classList.add('homeTitle');
    container.appendChild(h1);

    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";
    orderButton.className = "orderButton";
    container.appendChild(orderButton);
    orderButton.addEventListener("click",(e)=>{
        container.replaceChildren();
        menu();
    })


}
