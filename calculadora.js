// const textoOperacaoAnterior = document.querySelector("#operacao_anterior");
// const textoOperacaoAtual = document.querySelector("#operacao_atual");

// const botoes = document.querySelectorAll(".botao");
// // console.log(botoes);

// // class calculador {
// //     constructor (textoOperacaoAnterior, textoOperacaoAtual){
// //         this.textoOperacaoAnterior = textoOperacaoAnterior
// //         this.textoOperacaoAtual = textoOperacaoAtual
// //         this.operacaoAtual = ""
// //     }

// //     //adiciona o dígito teclado na tela
// //     adicionaDigito(digito){

// //         //verifica se já existe uma vírgula no número
// //         if(digito ==="," && this.textoOperacaoAtual.innerText.includes(",")){
// //             return
// //         }

// //         this.operacaoAtual = digito;
// //         this.atualizatela();
// //     }

// //     //trabalha com as operações
// //     operacoes(operacao){
// //         //pega os valores atual e anterior
// //         let valorOperacao
// //         let anterior = +this.textoOperacaoAnterior.innerText;
// //         let atual = +this.textoOperacaoAtual.innerText;

// //         switch (operacao) {
// //             case "+":
// //                 valorOperacao = anterior + atual
// //                 this.atualizatela(valorOperacao, operacao, anterior, atual)
// //                 break
// //             default:
// //                 return;
// //         }
// //     }

// //     atualizatela(valorOperacao = null, operacao = null, anterior = null, atual = null){
// //         if(valorOperacao === null){
// //         this.textoOperacaoAtual.innerText += this.operacaoAtual;
// //         } else {
// //             //checar se o valo é zero. se for, só adicionar o valor atual
// //             if(anterior===0){
// //                 operacao = atual
// //             }

// //             //adicionar o valor atual ao anterior
// //             this.textoOperacaoAnterior.innerText = `${valorOperacao}${operacao}`;
// //             this.textoOperacaoAtual.innerText = "";
// //         }
// //     }

    
// // };

// // const calc = new calculador(textoOperacaoAnterior, textoOperacaoAtual)

// botoes.forEach((botao) => {
//     botao.addEventListener("click",(evento) =>{
//         const valor = evento.target.innerText;

//         if(+valor >=0 || valor ==","){
//             calc.adicionaDigito(valor)
//         }else{
//             calc.operacoes(valor)
//         };
//     })
// });

window.calculator = new CalcController();
