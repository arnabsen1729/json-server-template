var faker = require('faker')

const TOTAL=10

function generateUsers () {
  var users = []
  for (var id = 0; id < TOTAL; id++) {

    // enter your field here
    
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()


    users.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }
  return { "users": users }
}
module.exports = generateUsers