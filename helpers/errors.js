const ERRORS = {
    cantConnectToDatabase: {message: 'Não foi possível acessar o banco de dados', code: 500},
    cantCreateUser: {message: 'Não foi possível criar o usuário', code: 500},
    userNotFound: {message: 'Este usuário não foi encontrado! ', code: 500}
}

module.exports = ERRORS