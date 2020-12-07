const User = require('./src/app/models/User')

async function addAdmin () {
<<<<<<< HEAD
  await User.createAdmin({
    name: 'Admin',
    email: 'foodfy@gmail.com',
=======
  await User.create({
    name: 'Teste de Usuário',
    email: 'test1@live.com',
>>>>>>> 1a845f4adcb3b62dbf103976933f56bda87e5efa
    is_admin: true
  })
}

addAdmin()
