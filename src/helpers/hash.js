const bcrypt = require('bcrypt');
const { HASHWORD, SALTROUNDS } = process.env; // Variable de entorno para agregar a la contraseña

// Función para hashear la contraseña
const hash = async (password) => {
    // Verificar si HASHWORD está definido y agregarlo
    if (HASHWORD) {
        password = password + HASHWORD;
    }
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    return hashedPassword;
}

// Función para comparar la contraseña en texto plano con el hash almacenado
const comparePasswords = async (password, hashedPassword) => {
    if (HASHWORD) {
        password = password + HASHWORD;
    }
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hash,
    comparePasswords
};
