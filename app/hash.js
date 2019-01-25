const bcrypt = require('bcrypt');
const salt = "$2b$10$71a572gQNwnao9er1mIk8O"


function newUser(username, plaintextPW) {
    const hash = bcrypt.hashSync(plaintextPW, salt);
    console.log(username)
    console.log(plaintextPW)
    console.log(hash)
}

// const checkUser = async () => {
//     const match = await bcrypt.compare("someOtherPlaintextPassword", hash)

//     console.log(match)
// }


module.exports = newUser
