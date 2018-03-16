### Expected behavior

Exectue these code on `file://index.html`

````
const { session } = require('electron').remote
session.defaultSession.clearStorageData({
  // without set origin options
  storages: ['localstorage', 'caches', 'indexdb']
})
````

All local data should be removed.

### Actual behavior

Local storage data will still exists. But caches and indexeddb are removed successfully.

If I set origin: `file://`, it works only for `file://` origin.