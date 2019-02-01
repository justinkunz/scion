var bcrypt = require('bcrypt');
var salt = "$2b$10$71a572gQNwnao9er1mIk8O";

function hashThis(pw) {
    const hash = bcrypt.hashSync(pw, salt);
    return hash
}

function compareHash(plainTxt, hash) {
    return bcrypt.compare("someOtherPlaintextPassword", hash)
}

module.exports = { hashThis, compareHash }
