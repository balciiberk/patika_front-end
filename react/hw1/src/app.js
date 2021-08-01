import getData from './lib/service.js'

let data = getData(7)
.then( d => console.log(d))