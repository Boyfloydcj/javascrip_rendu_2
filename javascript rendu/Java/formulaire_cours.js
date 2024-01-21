let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('envoi du form detecter !')
})
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.querySelector('#email')
    if(email.value == '') {
        console.log("invalide")
    } else {
        email.classList.add('success')
    }

})

let errorContainer = document.querySelector('.message-error')
let errorList = document.querySelector('.message-error ul')

errorList.innerHTML = ""
errorContainer.classList.remove('visible')

let email = document.querySelector('#email')

if(email.value == '') {

    errorContainer.classList.add('visible')
    email.classList.remove('success')

let err = document.createElement('li')
err.innerText = "Le champ email ne peut pas être vide"

errorList.appendChild(err)
}else {
    email.classList.add('success')
}

let maintitle = document.querySelector('#main-title')
maintitle.addEventListener('click', function() {
    this.classList.add('red')
    console.log('classe ajoutée')
})

let pseudo = document.querySelector('#pseudo')

if(pseudo.value.length < 6) {

    errorContainer.classList.add('visible')
    pseudo.classList.remove('success')

    let err = document.createElement('li')
    err.innerText = "le champ pseudo doit contenir au moins 6 caractères"

    errorList.appendChild(err)
}else{
    pseudo.classList.add('success')
}