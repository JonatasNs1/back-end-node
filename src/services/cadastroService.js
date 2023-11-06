const db = require('../db/db');

module.exports ={
    listarEmpresas:()=>{
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM tblCadastroEmpresa', (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                else{
                    aceito(results);
                }
            })
        });
    },

    buscarCnpj:(cnpj)=>{
        return new Promise((aceito, rejeitado) =>{
            db.query("select * from tblCadastroEmpresa where cnpj= ?", [cnpj], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },
    buscarId:(idCadastroEmpresa)=>{
        return new Promise((aceito, rejeitado) =>{
            db.query("select * from tblCadastroEmpresa where idCadastroEmpresa= ?", [idCadastroEmpresa], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },
 
    cadastrarEmpresas: (nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('insert into tblCadastroEmpresa (nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa) values(?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [ nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    console.log(results.insertId); //insertId
                }
            );

           
        });
    },
    
    alterarEmpresas:(idCadastroEmpresa,nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa)=>{

        return new Promise((aceito, rejeitado) =>{
            db.query("update tblCadastroEmpresa set nome = ?, email = ?, senha = ?, cep = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, telefone = ?, numeroEmpresa = ?, cnpj = ?, nomeEmpresa = ? where idCadastroEmpresa = ?",
             [nome,email,senha,cep,rua,numero,bairro,cidade,estado,telefone,numeroEmpresa,cnpj, nomeEmpresa,idCadastroEmpresa], (error, results)=>{
                // console.log(results);
              if(error) {rejeitado(error); return}
              aceito(results);
            })
        })
    },
    excluirEmpresas:(idCadastroEmpresa)=>{
        return new Promise((aceito, rejeitado) =>{
            db.query('delete from tblCadastroEmpresa where idCadastroEmpresa = ?',[idCadastroEmpresa], (error, results) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            })
        });
    }
};


