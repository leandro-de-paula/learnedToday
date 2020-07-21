/**Desafio:
 * Criar um objeto carro com alguns atribulos
 * Converter ele em JSON
 * Gravar em um arquivo chamado carro.json
 * Recuperar esse objeto (JSON -> Obejto JS)
 * Alterar algum atributo
 * Salvar novamente no arquivo carro.js
 * Validar o arquivo carro.js
 */


const fs = require("fs")/**install lodash -->  npm i lodash */
const chalk = require("chalk")
var prompt = require('prompt')

/**Setup for Display style: */

 //Branco(Withe)
 const infoTitleWhite = chalk.bold.white.inverse
 const infoTitle2White = chalk.white.inverse
 const infoSpotlightWhite = chalk.bold.white
 const infoWhite = chalk.white

 //Cinza(Gray)
 const infoTitleGray = chalk.bold.gray.inverse
 const infoTitle2Gray = chalk.gray.inverse
 const infoSpotlightGray = chalk.bold.gray
 const infoGray = chalk.gray

 //Azul(Blue)
 const infoTitleBlue = chalk.bold.blue.inverse
 const infoTitle2Blue = chalk.blue.inverse
 const infoSpotlightBlue = chalk.bold.blue
 const infoBlue = chalk.blue

 //Verde(Green)
 const infoTitleGreen = chalk.bold.green.inverse
 const infoTitle2Green = chalk.green.inverse
 const infoSpotlightGreen = chalk.bold.green
 const infoGreen = chalk.green

 //Amalero(Yellow)
 const infoTitleYellow = chalk.bold.yellow.inverse
 const infoTitle2Yellow = chalk.yellow.inverse
 const infoSpotlightYellow = chalk.bold.yellow
 const infoYellow = chalk.yellow

 //Vermelho(Red)
 const infoTitleRed = chalk.bold.red.inverse
 const infoTitle2Red = chalk.red.inverse
 const infoSpotlightRed = chalk.bold.red
 const infoRed = chalk.red

 


 /**Saudação */
 console.log(infoTitleWhite  ("    Seja bem-vindo(a)!                     "))

   

  // Start the prompt
  //
  prompt.start();
 
  //
  // Get two properties from the user: Carro, Marca, Cor
  //
  prompt.get(['carro', 'marca', 'cor'], function (err, result) {
    //
    // Log the results.
    /*
    console.log('Command-line input received:');
    console.log('  carro: ' + result.carro);
    console.log('  marca: ' + result.marca);
    console.log('  cor: ' + result.cor);
    */

    console.log(infoTitleGreen  ('    Command-line input received:           '))
    console.log(infoTitle2Green ("    Carro:      ")+infoGreen(" "+ result.carro))
    console.log(infoTitle2Green ("    Marca:      ")+infoGreen(" "+ result.marca))
    console.log(infoTitle2Green ("    cor:        ")+infoGreen(" "+ result.cor))

    //Objeto criado
    const dadosObjeto = {
        carro: `${result.carro}`,
        marca: `${result.marca}`,
        cor: `${result.cor}`
    }

    //Converte objeto JS em JSON
    const gravarDadosJSON = JSON.stringify(dadosObjeto)

    //Gravar em um arquivo JSON o conteudo
    fs.writeFileSync("dados-gravados-carro.json", gravarDadosJSON)

    //Recuperar o conteudo no arquivo JSON
    const dadosContent = fs.readFileSync("dados-gravados-carro.json")

    /**Printa JSON
     * console.log(dadosContent.toString())
     * Printa Salvo em JSON
     */
    console.log(infoTitle2Blue("    Dados salvos em JSON com sucesso       "))



    /**Criar a condição para alterar os dados gravados*/

    //Converte JSON em Objeto JS
    const dadosDeVoltaComoObjeto = JSON.parse(dadosContent.toString())
    //dadosDeVoltaComoObjeto.carro = "Model X"

    /**Opção para apresentar os camandos */
    console.log(infoTitle2Gray ("    Deseja alterar os dados cadastrais?    "))
    //console.log(infoTitle2Gray ("    Do you want to view the commands?      "))
    console.log(infoTitleBlue  ("    yes or no?                             "))
    prompt.start()
    prompt.get(['resposta',], function (err, result) {
       /** 
        * 
        * Log the results.
        * 
        * console.log('Command-line input received:')
        * console.log('  Resposta: ' + result.resposta)
        * 
        */
   
       /**Parâmentros da resposta */
       const resposta2Positiva = "yes".toUpperCase()
       const resposta2Negativa = "no".toUpperCase()
       var resposta2 = result.resposta.toUpperCase()
   
       /**Verificar os parâmetros no LOG
        console.log(infoTitleYellow(resposta2Positiva))
        console.log(infoTitleYellow(resposta2Negativa))
        console.log(infoTitleYellow(resposta))
        */
   
   
       /**Estrutura de comparação para validar a respota do usuario*/
       if(resposta2 != resposta2Negativa && resposta2 != resposta2Positiva) {
           console.log(infoSpotlightRed("The reported value is invalid!"))
           console.log(infoRed("O valor informado é invalido!"))
       }else if (resposta2 == resposta2Negativa) {
           console.log(infoTitle2White         ("    Programa encerrado,volte sempre!       "))
       }else if (resposta2 == resposta2Positiva) {
           
          console.log(infoTitle2Gray("    Dados Cadastrados:                     "))
          console.log(dadosDeVoltaComoObjeto)

           /**Alteração do dados */
           prompt.get(['carro', 'marca', 'cor'], function (err, result) {

               dadosDeVoltaComoObjeto.carro = result.carro
               dadosDeVoltaComoObjeto.marca = result.marca
               dadosDeVoltaComoObjeto.cor = result.cor

               console.log(infoTitle2Green         ("    Dados alterados com sucesso            "))
               console.log(dadosDeVoltaComoObjeto)


               //Converte objeto JS em JSON
               const gravarDadosJSON = JSON.stringify(dadosDeVoltaComoObjeto)

               //Gravar em um arquivo o conteudo
               fs.writeFileSync("dados-gravados-carro.json", gravarDadosJSON)

               //Recuperar o conteudo no arquivo JSON
               const dadosContent = fs.readFileSync("dados-gravados-carro.json")

               /**Printa JSON
                * console.log(dadosContent.toString())
                * Printa Salvo em JSON
                */
               console.log(infoTitle2Blue          ("    Dados salvos em JSON com sucesso       "))
               console.log(infoTitle2White         ("    Programa encerrado,volte sempre!       "))
           })




       }
   
       
    })

    
  });

