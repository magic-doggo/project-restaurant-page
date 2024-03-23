const menuPage = function() {
    // const content = document.getElementById("content") //can this be put somewhere else, so it is not repeated in each tab

    const menuItem = document.createElement("div")
    menuItem.innerHTML = "Our menu consists of pizza, pizza and more pizza! That's all you need to know."
    menuItem.classList.add("menu-item")
    content.appendChild(menuItem)
}

export {menuPage}