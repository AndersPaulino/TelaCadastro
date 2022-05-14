let nome = document.querySelector('#nome');
var senha = document.querySelector('#senha');
var confirma = document.querySelector('#confirma');
var email = document.querySelector('#email');
let listaUser = [];


let labelNome = document.querySelector('#labelNome');
var labelSenha = document.querySelector('#labelSenha');
var labelConfirma = document.querySelector('#labelConfirma');
var labelEmail = document.querySelector('#labelEmail');

var validNome = false;
var validEmail = false;
var validSenha = false;
var validConfirma = false;

email.addEventListener('keyup', ()=>{   
    if(!email.checkValidity() == true){
        email.setAttribute('style', 'border: 2px solid red; color: red;')
        labelEmail.setAttribute('style', 'color: red;')
        labelEmail.innerHTML = 'E-mail invalido*'
        validEmail = false;
    } else {
        email.setAttribute('style','border: 2px solid green; color: green')
        labelEmail.setAttribute('style','color: white')
        labelEmail.innerHTML = 'E-mail'
        validEmail = true;
    }
})

listaUser = JSON.parse(localStorage.getItem('listaUser'))

nome.addEventListener('keyup', ()=>{
    if(nome.value.length < 3){
        nome.setAttribute('style', 'border: 2px solid red; color: red;')
        labelNome.setAttribute('style','color: red')
        labelNome.innerHTML = 'Minimo de 3 caracteres*'
        validNome = false;
    
    }   else  {
        nome.setAttribute('style', 'border: 2px solid green; color: green')
        labelNome.setAttribute('style','color: white')            
        labelNome.innerHTML = 'Nome'
        validNome = true;
    }
})
senha.addEventListener('keyup', ()=>{
    if(senha.value.length < 8){
        senha.setAttribute('style', 'border: 2px solid red; color: red')
        labelSenha.setAttribute('style','color: red')
        labelSenha.innerHTML = 'Senha deve ter 8 caracteres*'
        validSenha = false;
        
    } else {
        senha.setAttribute('style', 'border: 2px solid green; color: green')
        labelSenha.setAttribute('style','color: white')
        labelSenha.innerHTML = 'Senha'
        validSenha = true;
    }
})

confirma.addEventListener('keyup', ()=>{

    if(confirma.value == senha.value && confirma.value.length == 8){
        confirma.setAttribute('style', 'border: 2px solid green; color: green')
        labelConfirma.setAttribute('style', 'color: white')
        labelConfirma.innerHTML = 'Confirme sua senha'
        validConfirma = true;
    }
    if(confirma.value != senha.value){
        confirma.setAttribute('style', 'border: 2px solid red; color: red')
        labelConfirma.setAttribute('style', 'color: red')
        labelConfirma.innerHTML = '<p>Senha Incorreta*</p>'
        validConfirma = false;
    }
    if(confirma.value.length <8){
        confirma.setAttribute('style', 'border: 2px solid red; color: red')
        labelConfirma.setAttribute('style', 'color: red')
        labelConfirma.innerHTML = '<p>Minimo de 8 caracteres*</p>'
        validConfirma = false;
    }
        
})


function checkInputs(inputs) {

    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  
  var inputs = document.querySelectorAll("input");
  var button = document.querySelector("button");
  
  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
  
        if(checkInputs(inputs)) {
            if(validEmail == true && validConfirma == true && validSenha ==  true && validNome == true){
            
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

                
                listaUser.push({

                    nomeCadastro: nome.value,
                    emailCadastro: email.value,
                    senhaCadastro: senha.value
                })
            

                setTimeout(()=>{localStorage.setItem('listaUser', JSON.stringify(listaUser))}, 1000)     
                button.disabled = false;
                button.setAttribute('style', 'color: white; background: rgb(48, 82, 185);')
            } else {
                button.disabled = true;
                button.setAttribute('style', 'color:rgb(91, 89, 89);')
            }
        }
        else {
            button.disabled = true;
            button.setAttribute('style', 'color:rgb(91, 89, 89);')
        }
        
    });
  
  });
function f5(){
      setTimeout(()=>{window.location.href = './index.html'}, 0500)
}