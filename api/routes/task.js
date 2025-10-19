/**
 * @module routes/task
 * @description
 * Roteador Express responsável pelas operações CRUD de "tasks" (tarefas) associadas ao usuário.
 *
 * Rotas disponíveis:
 *
 * GET /
 *   - Descrição: Recupera todas as tasks do usuário autenticado.
 *   - Parâmetros:
 *       - req: {express.Request} - requisição (usuário autenticado disponível em req.user).
 *       - res: {express.Response}
 *   - Respostas:
 *       - 200: Array de objetos de task.
 *       - 500: Erro interno do servidor.
 *
 * GET /:id
 *   - Descrição: Recupera uma task específica pelo seu identificador.
 *   - Parâmetros:
 *       - req.params.id: {string} - ID da task a ser obtida.
 *       - req: {express.Request}
 *       - res: {express.Response}
 *   - Respostas:
 *       - 200: Objeto da task solicitada.
 *       - 404: Task não encontrada.
 *       - 400: ID inválido.
 *       - 500: Erro interno do servidor.
 *
 * POST /:id
 *   - Descrição: Cria uma nova task. (Observação: o código atual registra a rota como POST('/:id');
 * normalmente a criação é feita em POST / — ajustar conforme a intenção.)
 *   - Parâmetros:
 *       - req.body: {Object} - dados da nova task.
 *           - title: {string} (obrigatório) - título da task.
 *           - description: {string} (opcional) - descrição detalhada.
 *           - completed: {boolean} (opcional, padrão: false) - estado de conclusão.
 *           - dueDate: {string|Date} (opcional) - data de vencimento.
 *       - req.params.id: {string} (conforme implementação atual; pode ser ignorado se criação não
 * requer id na URL)
 *       - req: {express.Request}
 *       - res: {express.Response}
 *   - Respostas:
 *       - 201: Task criada com sucesso (retorna a task criada).
 *       - 400: Dados inválidos/missing.
 *       - 500: Erro interno do servidor.
 *
 * PUT /:id
 *   - Descrição: Atualiza uma task existente identificada por ID.
 *   - Parâmetros:
 *       - req.params.id: {string} - ID da task a ser atualizada.
 *       - req.body: {Object} - campos a serem atualizados (mesma estrutura de POST).
 *       - req: {express.Request}
 *       - res: {express.Response}
 *   - Respostas:
 *       - 200: Task atualizada (retorna a task atualizada).
 *       - 400: Dados inválidos.
 *       - 404: Task não encontrada.
 *       - 500: Erro interno do servidor.
 *
 * DELETE /:id
 *   - Descrição: Remove uma task pelo ID.
 *   - Parâmetros:
 *       - req.params.id: {string} - ID da task a ser deletada.
 *       - req: {express.Request}
 *       - res: {express.Response}
 *   - Respostas:
 *       - 204: Remoção bem-sucedida (sem conteúdo).
 *       - 404: Task não encontrada.
 *       - 500: Erro interno do servidor.
 *
 * Observações gerais:
 *   - Autenticação/Autorização: pressupõe-se controle de acesso no nível do middleware
 * (ex.: req.user).
 *   - Validação: deve ser aplicada validação dos campos de entrada para POST/PUT.
 *   - Erros: retorne mensagens e códigos HTTP apropriados (400 para input inválido, 404
 * para não encontrado, 500 para erros inesperados).
 *
 * @exports {express.Router} router - Router configurado com as rotas acima.
 */
const express = require('express');

const router = express.Router();

// Puxa todos as task associadas ao usuário
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Puxa a task específica
router.get('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Edita uma task específica
router.put('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Deleta uma task
router.delete('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Cria uma nova task
router.post('/:id', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
