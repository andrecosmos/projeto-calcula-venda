/*let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let confirmarSenha = document.querySelector('#confirmarSenha');
let btnCadastrar = document.querySelector('#btnCadastrar');
let msg = document.querySelector('#msg');
let form = document.querySelector('#form');
let usuarios = [];
let usuario = {};
let usuarioLogado = {};
let usuarioLogadoIndex = -1;
let usuarioLogadoEmail = '';
let usuarioLogadoSenha = '';


function cadastrarUsuario() {
    usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    }
    
}*/



const btn = document.querySelector('#submitbtn')
const header = document.querySelector('h2')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value
    const mymail = document.querySelector('#mymail').value
    const birthdate = document.querySelector('#birthdate').value

    console.table([name,surname,mymail,birthdate])

    header.innerHTML = "Cadastro de " + name + " " + surname + " realizado com sucesso!"
})
