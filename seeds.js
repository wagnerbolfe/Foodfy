const User = require('./src/app/models/User')

async function addAdmin () {
  await User.create({
    name: 'Teste de Usuário',
    email: 'test1@live.com',
    is_admin: true
  })
}

addAdmin()
