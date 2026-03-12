


const form = document.querySelector('#myform')
const header = document.querySelector('h2')

form.addEventListener("submit", function(event){

    event.preventDefault()

    const name = document.querySelector('#name').value.trim()
    const surname = document.querySelector('#surname').value.trim()
    const email = document.querySelector('#mymail').value.trim()

    if(name === "" || surname === "" || email === ""){
        alert("Preencha todos os campos obrigatórios.")
        return
    }

    header.innerHTML = `Cadastro de ${name} ${surname} realizado com sucesso!`

})