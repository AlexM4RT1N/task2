const {signUp, signIn} = require('./auth')

const auth = document.getElementById('auth')
const email = auth.querySelector('#email')
const pass = auth.querySelector('#password')
const sign_up = auth.querySelector('#sign_up')
const sign_in = auth.querySelector('#sign_in')


function isValid() {return !(pass.checkValidity() && email.checkValidity())}


auth.addEventListener('click', (e) =>{
  const user = {
    email: email.value,
    password: pass.value
  }
  
  e.preventDefault()
  if (e.target === sign_up) signUp(user)    
  if (e.target === sign_in) signIn(user) 
})



email.addEventListener('input', (e) => { 
  email.style.borderColor = email.checkValidity() ?'#060':'red';
  sign_in.disabled = isValid()
  sign_up.disabled = isValid()
})
pass.addEventListener('input', (e) => {
  pass.style.borderColor = pass.checkValidity() ?'#060':'red';
  sign_in.disabled = isValid()
  sign_up.disabled = isValid()
})

