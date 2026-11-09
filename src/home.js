import ramen from "../assets/kruntch-okinawasoba3.jpg"
import "./style.css";

export default function (){
    const container = document.querySelector("#content");

    const h1 = document.createElement("h1");
    h1.textContent = "Best Ramen Noodles In Town";
    container.appendChild(h1);

    const ramenImage = document.createElement("img");
    ramenImage.src = ramen;
    container.appendChild(ramenImage);

}
