const db = require ('./db')

const Post = db.sequelize.define('tbl_de_pedidos',{

    cod_pedido:{
        type: db.Sequelize.INTEGER
    },

    nome_produto:{
        type: db.Sequelize.STRING
        

    },
    quantidade_produto:{
        type: db.Sequelize.STRING

    },    
    sobrenome:{
        type: db.Sequelize.STRING

    },     
      
    assunto:{
       type: db.Sequelize.STRING
    
    },  
        
    mensagem:{
        type: db.Sequelize.STRING

        
        
        


        
    }
})

module.exports = Post

