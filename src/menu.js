import "./menu.css"
import ramen1 from "../assets/pngwing.com.png"
import ramen2 from "../assets/pngwing.com (2).png"
import ramen3 from "../assets/pngwing.com (3).png"
import ramen4 from "../assets/pngwing.com (4).png"
import ramen5 from "../assets/pngwing.com (5).png"
import ramen6 from "../assets/pngwing.com (6).png"
import ramen7 from "../assets/pngwing.com (7).png"
import ramen8 from "../assets/pngwing.com (8).png"
import ramen9 from "../assets/pngwing.com (9).png"






export default function (){
    const container = document.querySelector("#content");
    container.className = "menuContainer";


    const menuImage1 = document.createElement("img");
    menuImage1.src = ramen1;
    menuImage1.className= "menuImage";
    container.appendChild(menuImage1);


    const menuImage2 = document.createElement("img");
    menuImage2.src = ramen2;
    menuImage2.className= "menuImage";
    container.appendChild(menuImage2);


    const menuImage3 = document.createElement("img");
    menuImage3.src = ramen3;
    menuImage3.className= "menuImage";
    container.appendChild(menuImage3);


    const menuImage4 = document.createElement("img");
    menuImage4.src = ramen4;
    menuImage4.className= "menuImage";
    container.appendChild(menuImage4);


    const menuImage5 = document.createElement("img");
    menuImage5.src = ramen5;
    menuImage5.className= "menuImage";
    container.appendChild(menuImage5);

    const menuImage6 = document.createElement("img");
    menuImage6.src = ramen6;
    menuImage6.className= "menuImage";
    container.appendChild(menuImage6);

    const menuImage7 = document.createElement("img");
    menuImage7.src = ramen7;
    menuImage7.className= "menuImage";
    container.appendChild(menuImage7);

    const menuImage8 = document.createElement("img");
    menuImage8.src = ramen8;
    menuImage8.className= "menuImage";
    container.appendChild(menuImage8);

    const menuImage9 = document.createElement("img");
    menuImage9.src = ramen9;
    menuImage9.className= "menuImage";
    container.appendChild(menuImage9);


   

}