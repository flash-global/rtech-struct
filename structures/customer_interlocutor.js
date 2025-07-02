const s = require('superstruct')
const { isEmail } = require('validator')

const Email = s.define('Email', isEmail)

const CustomerInterlocutor = s.object({
  firstname: s.optional(s.string()),
  lastname: s.optional(s.string()),
  email: Email
})

module.exports = {
  CustomerInterlocutor: CustomerInterlocutor
}
