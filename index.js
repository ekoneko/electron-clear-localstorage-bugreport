const { session } = require('electron').remote

window.setLocalStorage = () => {
  localStorage.setItem('test', 'test')
}

window.clearLocalStorage = () => {
  session.defaultSession.clearStorageData({
    storages: ['localstorage']
  })
}

window.countLocalStorage = () => {
  alert(Object.keys(localStorage).length)
}

window.clearLocalStorageWithOrigin = () => {
  session.defaultSession.clearStorageData({
    origin: 'file://',
    storages: ['localstorage']
  })
}