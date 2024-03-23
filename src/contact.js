const contactPage = function() { 
    // const content = document.getElementById("content")

    const contactInfo = document.createElement("div");
    contactInfo.innerHTML = "Please do not contact Magicdoggo's magicpizza. Thank you!";
    contactInfo.classList.add("contact-info");
    content.appendChild(contactInfo);
}

export {contactPage}