
const btn = document.querySelector('#submitbtn')
const header = document.querySelector('h2')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value
    const mymail = document.querySelector('#mymail').value
    const birthdate = document.querySelector('#birthdate').value
    header.innerHTML = "Cadastro de " + name + " " + surname + " realizado com sucesso!"
})
