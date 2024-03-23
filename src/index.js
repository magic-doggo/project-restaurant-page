// import { pageLoad } from "./page-load";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

homePage()

// console.log("hello world")

let menuButton = document.getElementById("menu-button")
let homepageButton = document.getElementById("homepage-button")
let contactButton = document.getElementById("contact-button")

menuButton.addEventListener("click", openMenuPage)
homepageButton.addEventListener("click", openHomePage)
contactButton.addEventListener("click", openContactPage)

const content = document.getElementById("content")

function openMenuPage() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    menuPage()
}

function openContactPage() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    contactPage()
}

function openHomePage() {
    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    homePage()
}