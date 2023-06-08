const feathers = require('@feathersjs/feathers')
const rest = require('@feathersjs/rest-client')
const auth = require('@feathersjs/authentication-client')

const app = feathers()

const restClient = rest('http://localhost:3030')

app.configure(restClient.fetch(window.fetch.bind(window)))

app.configure(auth({
  storage: window.localStorage,
  key: 'auth'
}))

export default app
