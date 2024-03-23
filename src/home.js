const homePage = function() { //function loadPage() ?
    const content = document.getElementById("content")

    const title = document.createElement("h1");
    title.innerHTML = "Magicdoggo's magicpizza";
    title.classList.add("title");
    content.appendChild(title);

    const motto = document.createElement("h2");
    motto.innerHTML = "Our secret to a great pizza: is a secret! But I hear that a good dough, fresh tomato sauce and no smelly cheese goes a long way - chef Magicdoggo"
    motto.classList.add("motto")
    content.appendChild(motto)

    const filler = document.createElement("h3")
    filler.innerHTML = "Come enjoy the pizza adventure of your lifetime! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    filler.classList.add("filler")
    content.appendChild(filler)
}

export {homePage}