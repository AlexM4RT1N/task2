const req = {
  get(url,headers = {}) {
    return fetch(url,{headers: {...headers}}).then(res => res.json())
  },
  
  post(url, body = null, headers = {}) {
    return fetch(url,{
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json',
      ...headers
    }
    }).then(res => res.json())
  }
}

const messHandl = (data = {}) => {
  let status, mess, color;
  if (data.hasOwnProperty("body")) {
    status = data.body.status.toLowerCase()
    mess = data.body.message 
  } else {
    status = data.status.toLowerCase();
    mess = data.message 
  }
  status = status === 'ok' ? true : false;
  color = status ? 'green' : 'red'
  veiwMess(mess, color)
  return status
}

function veiwMess(mess, col) {
  const authTitle = document.querySelector('.authorization__title')

  authTitle.innerText = mess
  authTitle.style.color = col
  
  setTimeout(() => {
    authTitle.innerText = 'Authorization'
    authTitle.style.color = '#060'
  }, 5000);
}

module.exports = {req, messHandl}