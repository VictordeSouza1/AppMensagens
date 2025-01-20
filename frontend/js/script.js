// login elements 
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

const user = { id: "", name: "", color: ""}

const handleSubmit = (event) => {
    event.preventDefault()
    
    user.id = crypto.randomUUID()
    user.name = loginInput.value
}

loginForm.addEventListener("submit", () => {})