import ramen from "../assets/kruntch-okinawasoba3.jpg"
import "./home.css";

export default function (){
    const container = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.innerHTML = 'Best Ramen Noodles </br> <section> In Town</section>';
    h1.classList.add('homeTitle');
    container.appendChild(h1);


}
