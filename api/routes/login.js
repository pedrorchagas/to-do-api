/**
 * @module routes/login
 * @description
 * Rota responsável por autenticar usuários. Exporta um express.Router que expõe
 * um endpoint POST '/' que delega a lógica de autenticação ao controller
 * {@link ../controllers/login.login|controllers/login.login}.
 *
 * Comportamento esperado:
 * - Recebe credenciais no corpo da requisição (ex.: email e senha).
 * - Em caso de sucesso, o controller deve responder com status 200 e os dados
 *   de autenticação (por exemplo, token e/ou dados do usuário).
 * - Em caso de erro controlado (validação, credenciais inválidas, etc.), o
 *   controller ou a rota retorna o status apropriado (por exemplo 400 ou 401)
 *   e um JSON com a chave "message".
 * - Em caso de erro não tratado, a rota captura a exceção e responde com o
 *   código presente em `error.code` (se existir) ou 500, e `{ message: error.message }`.
 *
 * @example
 * // montagem típica no app
 * const loginRouter = require('./api/routes/login');
 * app.use('/login', loginRouter);
 *
 * @route POST /
 * @param {import("express").Request} req - Objeto de requisição do Express.
 *   Espera-se no corpo (req.body) pelo menos:
 *   - {string} email - Email do usuário.
 *   - {string} password - Senha do usuário.
 *
 * @param {import("express").Response} res - Objeto de resposta do Express.
 *   Respostas típicas:
 *   - 200: Autenticação bem-sucedida (ex.: { token: "...", user: { ... } }).
 *   - 400: Requisição inválida / parâmetros ausentes.
 *   - 401: Credenciais inválidas.
 *   - 500: Erro interno do servidor ({ message: string }).
 *
 * @throws {Object} error - Em erros lançados pela execução do controller, a rota
 *   captura a exceção e encaminha um JSON contendo `message`. Se o erro incluir
 *   `code`, esse valor será usado como status da resposta.
 */
const express = require('express');

const router = express.Router();
const login = require('../controllers/login');

router.post('/', async (req, res) => {
  try {
    await login.login(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

module.exports = router;
