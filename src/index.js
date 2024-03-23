// import { pageLoad } from "./page-load";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

homePage()

// console.log("hello world")

let menuButton = document.getElementById("menu-button")
let homepageButton = document.getElementById("homepage-button")
let contactButton = document.getElementById("contact-button")

menuButton.addEventListener("click", menuPage)
homepageButton.addEventListener("click", homePage)
contactButton.addEventListener("click", contactPage)