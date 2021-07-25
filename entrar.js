

//Meu cadastro//
let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');

let email = document.getElementById('email');
let labelEmail = document.getElementById('labelEmail');

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');

let confSenha = document.getElementById('confSenha');
let labelConfSenha = document.getElementById('labelConfSenha');

let validando = false;

//Validando meus campos
nome.addEventListener('keyup', () => { 
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '<strong>Insira no mínimo 3 caracteres</strong>';
        nome.setAttribute('style', 'border-color: red');
        validando = false;

    } else {
        labelNome.setAttribute('style', 'color: green');
        labelNome.innerHTML = '<strong>Nome</strong>'
        nome.setAttribute('style', 'border-color: green');
        validando = true;

    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length < 4) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '<strong>Insira no mínimo 4 caracteres</strong>';
        senha.setAttribute('style', 'border-color: red');
        validando = false;

    } else {
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = '<strong>Senha</strong>'
        senha.setAttribute('style', 'border-color: green');
        validando = true;
        
    }
})

confSenha.addEventListener('keyup', () => {
    if(senha.value == confSenha.value) {
        labelConfSenha.setAttribute('style', 'color: green');
        labelConfSenha.innerHTML = '<strong>Confirmar senha</strong>'
        confSenha.setAttribute('style', 'border-color: green');
        validando = true;

    } else {
        labelConfSenha.setAttribute('style', 'color: red');
        labelConfSenha.innerHTML = '<strong>Senhas diferentes!</strong>';
        confSenha.setAttribute('style', 'border-color: red');
        validando = false;
        
    }
})


//Envio de dados//
botaoCadastro.addEventListener('click', () => {
    if(validando == true) {
        let listUsuario = JSON.parse(localStorage.getItem('listUsuario') || '[]');

        listUsuario.push({ 
            nomeCadastrado: nome.value,
            emailCadastrado: email.value,
            senhaCadastrado: senha.value
        })

        localStorage.setItem('listUsuario', JSON.stringify(listUsuario));

        setTimeout(() => {
            alert('Guardando seus dados :).... Clique aqui para entrar em nosso site!');
            window.location.href = 'index.html';
        }, 1000)

    } else {
        alert('Erro ao enviar os dados');
    }
})


//Tela de login//
function logar() {
    let email = document.getElementById('email');
    let labelEmail = document.getElementById('labelEmail');

    let senha = document.getElementById('senha');
    let labelSenha = document.getElementById('labelSenha');

    let listUsuario = []; 
    let userValid = {
        email: '',  
        senha: ''
    }

    listUsuario = JSON.parse(localStorage.getItem('listUsuario'));

    listUsuario.forEach((item) => {
        if(email.value == item.emailCadastrado && senha.value == item.senhaCadastrado) {

            userValid = {
                email: item.emailCadastrado,
                senha: item.senhaCadastrado
            }
        } 
    })

    if(email.value == userValid.email && senha.value == userValid.senha){
        window.location.href = "./landing-pages/pages.html"; 
    } else {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red'); 
        email.focus(); 
    }
    
}