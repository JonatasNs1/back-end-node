const cadastroService = require('../services/cadastroService');

module.exports = {
    listarEmpresas: async (req, res) =>{
        let json = {error:'', result:[]}

        let empresas = await cadastroService.listarEmpresas();

        for(let i in empresas){
            json.result.push({
                idCadastroEmpresa: empresas[i].idCadastroEmpresa,
                nome: empresas[i].nome,
                email: empresas[i].email,
                senha: empresas[i].senha,
                cep: empresas[i].cep,
                rua: empresas[i].rua,
                numero: empresas[i].numero,
                bairro: empresas[i].bairro,
                cidade: empresas[i].cidade,
                estado: empresas[i].estado,
                telefone: empresas[i].telefone,
                numeroEmpresa: empresas[i].numeroEmpresa,
                cnpj: empresas[i].cnpj,
                nomeEmpresa: empresas[i].nomeEmpresa
            })
        }
        res.json(json);
    },
    buscarCnpj: async(req, res) => {
        let json = {error:'', result:{}};
        
        let cnpj = req.params.cnpj;
        let teste = await cadastroService.buscarCnpj(cnpj);

        if(teste){
            json.result = teste;
        }
       res.json(json)
    },
    buscarId: async(req, res) => {
        let json = {error:'', result:{}};
        
        let idCadastroEmpresa = req.params.idCadastroEmpresa;
        let teste = await cadastroService.buscarId(idCadastroEmpresa);

        if(teste){
            json.result = teste;
        }
       res.json(json)
    },
    cadastrarEmpresas: async(req, res) => {
        let json = {error:'', result:{}};
        
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let telefone = req.body.telefone;
        let numeroEmpresa = req.body.numeroEmpresa; 
        let cnpj = req.body.cnpj; 
        let nomeEmpresa = req.body.nomeEmpresa;
        // console.log(cnpj)
        if (
            nome !== undefined &&
            email !== undefined &&
            senha !== undefined &&
            cep !== undefined &&
            rua !== undefined &&
            numero !== undefined &&
            bairro !== undefined &&
            cidade !== undefined &&
            estado !== undefined &&
            telefone !== undefined &&
            numeroEmpresa !== undefined &&
            cnpj !== undefined &&
            nomeEmpresa !== undefined &&
            nome !== "" &&
            email !== "" &&
            senha !== "" &&
            cep !== "" &&
            rua !== "" &&
            numero !== "" &&
            bairro !== "" &&
            cidade !== "" &&
            estado !== "" &&
            telefone !== "" &&
            numeroEmpresa !== "" &&
            cnpj !== "" &&
            nomeEmpresa !== ""
          ){
            let Cadastros = await cadastroService.cadastrarEmpresas(nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa);
           
            json.result = {
                idCadastroEmpresa: Cadastros,
                nome,
                email,
                senha,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                telefone,
                numeroEmpresa,
                cnpj,
                nomeEmpresa,
            };

            
        } else {
            json.error = "Campos não foram enviados ou estão vazios";
            console.log(json.error);
        }

       res.json(json)
    },


    alterarEmpresas: async(req, res) => {
        let json = {error:'', result:{}};
        
        
        let idCadastroEmpresa = req.params.idCadastroEmpresa;
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let telefone = req.body.telefone;
        let numeroEmpresa = req.body.numeroEmpresa; 
        let cnpj = req.body.cnpj; 
        let nomeEmpresa = req.body.nomeEmpresa;
       
        // const updatedData = req.body;
        // console.log(updatedData)
        

        if(idCadastroEmpresa && nome && email && senha && cep && rua && numero && bairro && cidade && estado && telefone && numeroEmpresa && cnpj && nomeEmpresa){
             await cadastroService.alterarEmpresas(idCadastroEmpresa,nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa);
            json.result = {
                idCadastroEmpresa,
                nome,
                email,
                senha,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                telefone,
                numeroEmpresa,
                cnpj,
                nomeEmpresa
            };
        }else{
            json.error= "Não foi possivel alterar";
            console.log(json.error);
        }

       res.json(json)
    },

    excluirEmpresas: async(req, res) =>{
        let json = {error:'', result:{}};

        await cadastroService.excluirEmpresas(req.params.idCadastroEmpresa);
        
        res.json(json);
    }
}
