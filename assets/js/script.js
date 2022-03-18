let nome = document.querySelector('#imput.nome')
let email = document.querySelector('#imput.email')
let assunto = document.querySelector('#imput.assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width= '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.ariaValueMax.length< 3){
       txt.innerHTML ="Nome inválido"
       txt.style.color = 'red'
    }else{
        txt.innerHTML ='Nome válido'
        txt.style.color ='green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.ariaValueMax.indexOf('@')==-1 || email.value.indexOf('.')){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color ='green'
        emailOk = true
    }
}
 function validaAssunto(){
     let txtAssunto = document.querySelector('#txtAssunto')
     if(assunto.value.length >= 100 ){
         txtAssunto.innerHTML = 'Tamanho inválido'
         txtAssunto.style.display = 'block'
     }else{
         txtAssunto.style.display = 'none'
         assuntoOk = true
     }
 }

 function enviar(){
     if(nome == true && emailOk && assunto ==true){
         alert ('Formulário enviado com sucesso!')
     }else{
         alert('Preencha o formulário corretamente antes de enviar...')
     }
 }