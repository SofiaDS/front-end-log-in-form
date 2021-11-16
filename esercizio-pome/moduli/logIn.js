export function logIn(){
    arrUtenti.ForEach(function(item){
        if(inputEmail2.value == item.email && inputPassword2.value == item.password){
            var emailUtenteLoggato = inputEmail2.value;
            var PassUtenteLoggato = inputPassword2.value;
            location.assign('../area-personale.html')
            utenteEsistente = true;
        }
        if(utenteEsistente == false){
            var errorMessage = document.createElement('div');
            errorMessage.innerHTML = '* Inserisci email o password corretti';
            errorMessage.style.color = 'red';
            parent.appendChild(errorMessage);
        }
    })
}
