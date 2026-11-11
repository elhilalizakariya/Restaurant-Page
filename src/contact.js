import "./style.css";
import "./contact.css"

export default function(){
    const container = document.querySelector("#content");
    container.className = "contactContainer";

    const form = document.createElement("form");
    form.setAttribute("method","post");


    const nameDiv = document.createElement("div");
    const name = document.createElement("input");
    const nameLabel = document.createElement("label");
    name.setAttribute("type","text");
    name.setAttribute("id","name");
    name.setAttribute("name","name");
    nameLabel.setAttribute("for","name");
    nameLabel.textContent = "Name:";
    nameDiv.classList.add("nameDiv");
    nameDiv.append(nameLabel,name);

    const emailDiv = document.createElement("div");
    const email = document.createElement("input");
    const emailLabel = document.createElement("label");
    email.setAttribute("type","text");
    email.setAttribute("id","email");
    email.setAttribute("name","email");
    emailLabel.setAttribute("for","email");
    emailLabel.textContent = "Email:";
    emailDiv.classList.add("emailDiv");
    emailDiv.append(emailLabel,email);

    const commentDiv = document.createElement("div");
    const comment = document.createElement("textarea");
    const commentLabel = document.createElement("label");
    comment.setAttribute("id","comment");
    comment.setAttribute("name","comment");
    comment.setAttribute("rows","3");
    comment.setAttribute("cols","33");
    commentLabel.setAttribute("for","comment");
    commentLabel.textContent = "Comment:";
    commentDiv.classList.add("commentDiv");
    commentDiv.append(commentLabel,comment);

    const submit = document.createElement("button");
    submit.textContent="Send";
    submit.className = "button-92"
    submit.setAttribute("type","button");


    form.append(nameDiv,emailDiv,commentDiv,submit);

    container.appendChild(form);

    



}

