const express = require('express');
const router = express.Router();

const cadastroController = require('./controllers/cadastroController');

router.get('/listar', cadastroController.listarEmpresas); 
router.get('/listar/:idCadastroEmpresa', cadastroController.buscarId); 
router.get('/buscar/:cnpj', cadastroController.buscarCnpj); 
router.post('/cadastrar', cadastroController.cadastrarEmpresas);
router.put('/atualizar/:idCadastroEmpresa',cadastroController.alterarEmpresas);
router.delete('/excluir/:idCadastroEmpresa',cadastroController.excluirEmpresas);

module.exports =router;