/**
 * Rota: POST /signup
 * Controller responsável por realizar o cadastro (signup) de novos usuários.
 *
 * @module routes/signup
 *
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {Object} req.body - Corpo da requisição contendo os dados do usuário.
 * @param {string} req.body.name - Nome completo do usuário. Obrigatório.
 * @param {string} req.body.email - Email do usuário. Obrigatório, deve ser único e válido.
 * @param {string} req.body.password - Senha em texto plano. Obrigatório, será
 * hashada antes de persistir.
 *
 * @param {import('express').Response} res - Objeto de resposta do Express.
 *
 * @returns {Promise<void>} Envia a resposta HTTP apropriada conforme o resultado da operação.
 *
 * @example
 * // Requisição
 * // POST /signup
 * // Body:
 * // {
 * //   "name": "Maria Silva",
 * //   "email": "maria@example.com",
 * //   "password": "SenhaForte123!"
 * // }
 *
 * @success {201} - Usuário criado com sucesso.
 *        Corpo da resposta: { id: string, name: string, email: string, createdAt: string }
 *
 * @error {400} - Dados inválidos ou campos obrigatórios faltando.
 *        Ex.: { error: "Email inválido" } ou { error: "Password too short" }
 *
 * @error {409} - Conflito: email já cadastrado.
 *        Ex.: { error: "Email já cadastrado" }
 *
 * @error {500} - Erro interno no servidor ao criar o usuário.
 *
 * @notes
 * - A senha não deve ser retornada na resposta.
 * - Deve aplicar validação (formato do email, tamanho/complexidade da senha)
 * e normalização do email.
 * - Deve realizar hashing seguro da senha (ex.: bcrypt) antes de salvar no banco.
 * - Pode integrar verificação por e-mail ou envio de token de confirmação conforme
 * requisitos do sistema.
 */
const express = require('express');

const router = express.Router();
const signup = require('../controllers/signup');

router.post('/', async (req, res) => {
  try {
    await signup.create(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

module.exports = router;
