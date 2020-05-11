// employees.js
var faker = require('faker')
function generateEmployees () {
  var employees = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
	 var phoneNumber = faker.phone.phoneNumberFormat()
    employees.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
		"phone_number" : phoneNumber
    })
  }
  return { "employees": employees }
}
module.exports = generateEmployees
