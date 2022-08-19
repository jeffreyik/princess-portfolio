const greetingEl = document.querySelector(".greeting")
const hamburgerBtn = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".menu-items")
const body = document.querySelector("body")


body.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-btn")) {
        hamburgerBtn.classList.toggle("open")
        menuItems.classList.toggle("open")
    } else {
        menuItems.classList.remove("open")
        hamburgerBtn.classList.remove("open")
    }
})

const greetings = ["Hello", "Hi", "Hola", "Ciao"]

setInterval(() => {
    const rand = Math.floor(Math.random() * greetings.length)
    greetingEl.innerHTML = greetings[rand] + ","
}, 5000)