let email = document.querySelector('.email');
let submit = document.querySelector('.submit-btn')
let error = document.querySelector('#error')


submit.addEventListener('click',e=>{
    e.preventDefault()
    const expRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;   
    let isValid=expRegex.test(email.value)
    if(isValid){
        email.style.border = '2px solid hsl(223, 100%, 88%)'
        error.style.display = 'none'
        alert('Gracias por registrarte')

    }else {
        email.style.border = '2px solid #ff0000'
        error.style.display = 'inline'
    }
})