
const fetch = require('node-fetch');

module.exports = async function buscaCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()

    return json
}













// const fetch = require('node-fetch');
// const { default: ModelManager } = require('sequelize/types/lib/model-manager');

// module.exports = async function buscaCep(cep){
//     if (cep.length == 8){
//         let url =`https://viacep.com.br/ws/${cep}/json/`
//         const response =await fetch(url);
//         const data = await response.json()
//         return data;


//     }

// }



// module.exports =router;













// {
//     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     const json = await response.json()

//     return json
// }