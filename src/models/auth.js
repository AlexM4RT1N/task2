const {req, messHandl} = require('./methods')

const rootUrl = 'http://142.93.134.108:1111'

if (localStorage.getItem('acc_token')) {
  req.get(rootUrl + '/me', {'Authorization': `Bearer ${localStorage.acc_token}`})        
  .then(data => {
    document.getElementById('auth').innerHTML = `
    <h2 class="authorization__title"></h2>
    <button class="logout__btn" id="logout">logout</button>`
    if(!messHandl(data)) refresh(localStorage.ref_token)                   
  })
} else {
  document.getElementById('auth').innerHTML = `<h2 class="authorization__title">Authorization</h2>
  <div class="authorization__email"><input type="email" name="email" id="email" required/></div>
  <div class="authorization__password"><input type="password" name="password" id="password" minlength="8" required/></div>
  <div class="authorization__signin"><button id="sign_in" disabled>sign in</button></div>
  <div class="authorization__signup"><button id="sign_up" disabled>sign up</button></div>`

}

function signUp(user) {
  req.post(rootUrl + '/sign_up', user)
  .then(data => {
    messHandl(data)
  })
}

function signIn(user) {
  let url = new URL(rootUrl + '/login')
  
  for (const key in user) url.searchParams.set(key, user[key])
  
  req.post(url)
  
  .then(data => {
    if(data.hasOwnProperty("body")) {
      if(data.body.hasOwnProperty("access_token")) {
        localStorage.acc_token = data.body.access_token;
        localStorage.ref_token = data.body.refresh_token;
        
        req.get(rootUrl + '/me', {'Authorization': `Bearer ${localStorage.acc_token}`}) 
        
        .then(data => {
          location.reload()                 
        })
      } else messHandl(data)      
    } else messHandl(data)
  })
}


function refresh(ref_token) {
  req.post(rootUrl + '/refresh', null, {'Authorization': `Bearer ${ref_token}`})          
          
  .then(data => {
    if(data.hasOwnProperty("body")) {
      if(data.body.hasOwnProperty("access_token")) {
        localStorage.acc_token = data.body.access_token
        location.reload()
      } else {
        localStorage.removeItem('acc_token')
        messHandl(data)
        location.reload()
      }      
    } else {
      localStorage.removeItem('acc_token')
        messHandl(data)
        location.reload()
    }
  })
}
    
module.exports = {signUp, signIn}   
    