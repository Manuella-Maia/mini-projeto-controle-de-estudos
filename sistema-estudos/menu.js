import {filtroData,cronograma,concluidos,pendentes,addEstudo,editarMateria,editarDia, editarData,editarTempo,filtroConteudo} from './modules/functions.js'
import {estudoSemanal} from './data/cronograma.js'
import { question, questionInt } from "readline-sync";

// ===== MENU PRINCIPAL =====
let opcao =''
while(opcao != 6){
    console.log(`
========= Controle de Estudos =========
1 - Visualizar Cronograma Semanal
2 - Filtros
3 - Adicionar Novo Estudo
4 - Editar Estudo
5 - Marcar Conteúdo como Concluido
6 - Sair
`)
    opcao = questionInt('\nDigite o numero da opcao desejada: ')

    switch(opcao){
        case 1 :
            console.log('\n=== Cronograma Semanal ===\n')
            cronograma()
            break;

        case 2 :
            let escolha =''
            while(escolha!=4){
                console.log(`
=== Filtros do Cronograma ===
1 - Filtrar estudos por data
2 - Listar estudos concluídos
3 - Listar estudos pendentes
4 - Voltar
`)
                escolha = questionInt('Escolha a opcao desejada: ')
                switch(escolha){
                    case 1 :
                        console.log('\n=== Estudos por Data ===\n')
                        let dataBuscada = questionInt('Digite a data que deseja filtrar: ')
                        filtroData(dataBuscada)
                        break;
                    case 2 :
                        console.log('\n=== Estudos Concluidos ===\n')
                        concluidos()
                        break;
                    case 3 :
                        console.log('\n=== Estudos Pendentes ===\n')
                        pendentes()
                        break;
                    case 4 : break;
                    default : console.log('⚠️ Opcao invalida. Digite novamente.')
                }
            }
            break;

        case 3 :
            console.log('\n=== Adicionar Novo Estudo ===\n')
            let novoMateria = question('Digite a materia: ')
            let novoConteudo = question(`Digite o conteudo estudado da materia ${novoMateria}: `)
            let novoDia = question('Digite o dia da semana: ')
            let novaData = questionInt('Digite a data: ')
            let novoTempo = question('Digite o tempo de estudo: ')
            addEstudo(novoMateria,novoConteudo,novoDia,novaData,novoTempo)
            break;

        case 4 :
            let opc =''
            while(opc!=5){
                console.log(`
=== Editar Estudo ===
1 - Editar materia
2 - Editar dia da semana
3 - Editar data
4 - Editar tempo
5 - Voltar
`)
                opc = questionInt('Escolha a opcao: ')
                switch(opc){
                    case 1 :
                        console.log('\n=== Editar Materia ===\n')
                        estudoSemanal.forEach((item) => {
                            console.log(`Materia: ${item.materia}`)
                        })
                        let materiaEditar = question('Digite a materia que deseja editar: ')
                        editarMateria(materiaEditar)
                        break;
                    case 2 :
                        console.log('\n=== Editar Dia da Semana ===\n')
                        estudoSemanal.forEach((item) => {
                            console.log(`Materia: ${item.materia} | Dia: ${item.dia}`)
                        })
                        let diaEditar = question('Digite a materia correspondente: ')
                        editarDia(diaEditar)
                        break;
                    case 3 :
                        console.log('\n=== Editar Data ===\n')
                        estudoSemanal.forEach((item) => {
                            console.log(`Materia: ${item.materia} | Data: ${item.data}`)
                        })
                        let dataEditar = question('Digite a materia correspondente: ')
                        editarData(dataEditar)
                        break;
                    case 4 :
                        console.log('\n=== Editar Tempo ===\n')
                        estudoSemanal.forEach((item) => {
                            console.log(`Matéria: ${item.materia} | Tempo: ${item.tempo}`)
                        })
                        let tempoEditar = question('Digite a materia correspondente: ')
                        editarTempo(tempoEditar)
                        break;
                    case 5 : break;
                    default : console.log('⚠️ Opcao invalida. Digite novamente.')
                }
            }
            break;

        case 5 :
            console.log('\n=== Marcar Conteúdo como Concluido ===\n')
            let materiaSelecionada = question('Digite a matéria para listar seus conteudos: ')
            filtroConteudo(materiaSelecionada)
            break;

        case 6 :
            console.log('👋 Saindo... Ate a proxima!')
            break;

        default : console.log('⚠️ Opcao invalida. Digite novamente.')
    }
}
