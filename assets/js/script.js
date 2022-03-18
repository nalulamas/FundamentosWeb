let nome = document.querySelector('#imput.nome')

let email = document.querySelector('#imput.email')

let assunto = document.querySelector('#imput.assunto')

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
    }
}
 function validaAssunto(){
     let txtAssunto = document.querySelector('#txtAssunto')
     if(assunto.value.length >= 100 ){
         txtAssunto.innerHTML = 'Texto muito grande'
     }
 }