const {req, messHandl} = require('./methods')

const rootUrl = 'http://142.93.134.108:1111'

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
        const acc_token = data.body.access_token
        const ref_token = data.body.refresh_token
        
        req.get(rootUrl + '/me', {'Authorization': `Bearer ${acc_token}`}) 
        
        .then(data => {
          document.getElementById('auth').innerHTML = `
          <h2 class="authorization__title"></h2>`
          if(!messHandl(data)) refresh(ref_token)                   
        })
      } else messHandl(data)      
    } else messHandl(data)
  })
}


function refresh(ref_token) {
  req.post(rootUrl + '/refresh', null, {'Authorization': `Bearer ${ref_token}`})          
          
  .then(data => {
    const new_token = data.body.access_token

    req.get(rootUrl + '/me', {'Authorization': `Bearer ${new_token}`})

    .then(data => {
      messHandl(data)
    })
  })
}
    
module.exports = {signUp, signIn}   
    