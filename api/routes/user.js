/**
 * @module api/routes/user
 * @description
 * Router responsável pelas operações relacionadas ao usuário.
 * Atualmente expõe 3 endpoints na raiz do roteador:
 *  - GET    /    -> Retorna informações do usuário autenticado
 *  - DELETE /    -> Deleta o registro do usuário autenticado
 *  - PUT    /    -> Edita informações do usuário autenticado
 *
 * Observação: o caminho base (ex.: /user ou /users) depende de onde este roteador for
 * montado na aplicação principal.
 *
 * GET / (obter informações do usuário)
 * -----------------------------------
 * @summary Retorna os dados do usuário autenticado.
 * @description
 * Recupera e envia as informações do usuário vinculado à requisição
 * (por exemplo, via token de autenticação).
 * Deve validar autenticação/autorizações antes de devolver dados sensíveis.
 *
 * Requisição
 * @param {Object} req - Express request object.
 * @param {Object} req.headers - Cabeçalhos HTTP, espera-se header Authorization
 * (Bearer token) quando aplicável.
 * @param {Object} [req.user] - Objeto do usuário injetado por middleware de autenticação
 * (opcional, conforme implementação).
 *
 * Resposta (sucesso)
 * @param {Object} res - Express response object.
 * @returns {200} {Object} user - Objeto com os dados do usuário.
 * @example
 * // Corpo de resposta esperado
 * {
 *   "id": "123",
 *   "name": "Fulano de Tal",
 *   "email": "fulano@example.com",
 *   "createdAt": "2024-01-01T12:00:00.000Z"
 * }
 *
 * Possíveis códigos de erro
 * @throws {401} Unauthorized - Quando não houver credenciais válidas.
 * @throws {403} Forbidden - Quando o usuário não tem permissão para acessar o recurso.
 * @throws {404} NotFound - Quando o usuário não for encontrado.
 * @throws {500} InternalServerError - Em caso de erro interno/exceção não tratada.
 *
 * DELETE / (excluir usuário)
 * --------------------------
 * @summary Remove o usuário autenticado da base de dados.
 * @description Deve haver confirmação/validação apropriada antes da remoção irreversível.
 * @returns {204} No Content - Em caso de sucesso na exclusão.
 * @throws {401|403|500}
 *
 * PUT / (editar usuário)
 * ----------------------
 * @summary Atualiza campos do usuário autenticado.
 * @param {Object} req.body - Dados a serem atualizados (ex.: name, email, password).
 * @returns {200} {Object} user - Usuário atualizado.
 * @throws {400} BadRequest - Dados inválidos na requisição.
 * @throws {401|403|500}
 *
 * Exemplo de uso
 * @example
 * // Montagem típica no app principal:
 * const userRouter = require('./api/routes/user');
 * app.use('/user', userRouter);
 */
const express = require('express');

const router = express.Router();
const user = require('../controllers/user');

// Puxa a informação sobre o usuário
router.get('/', async (req, res) => {
  try {
    await user.getUser(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

// Deleta o registro do usuário
router.delete('/', async (req, res) => {
  try {
    await user.deleteUser(req, res);
  } catch (error) {
    res.status(error.code || 500).send({ message: error.message });
  }
});

// Edita informações sobre o usuário
router.put('/', async (req, res) => {
  await user.editUser(req, res);
});

module.exports = router;
