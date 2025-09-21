import {estudoSemanal} from  '../data/cronograma.js'

export function addEstudo(materia,conteudo,dia,data,tempo){
    estudoSemanal.push({dia : dia, data : data, materia : materia, conteudo : conteudo, tempo : tempo, status : 'pendente'})
    return console.log("✅ Novo estudo adicionado com sucesso!");
}

export function editarMateria(materiaDig){
    let encontrado = estudoSemanal.find(item => item.materia.toLowerCase() === materiaDig.toLowerCase())
    if(encontrado){
        let materiaNova = question('Digite a nova materia para esse estudo: ')
        encontrado.materia = materiaNova
        return console.log('✏️ Materia atualizada com sucesso!');
    }else{
        return console.log('❌ Matéria nao encontrada. Tente novamente.');
    }
}

export function editarDia(diaDig){
    let encontrado = estudoSemanal.find(item => item.materia.toLowerCase() === diaDig.toLowerCase())
    if(encontrado){
        let diaNovo = question('Digite o novo dia da semana para esse estudo: ')
        encontrado.dia = diaNovo
        return console.log('✏️ Dia da semana atualizado com sucesso!');
    }else{
        return console.log('❌ Materia nao encontrada. Tente novamente.');
    }
}

export function editarData(dataDig){
    let encontrado = estudoSemanal.find(item => item.materia.toLowerCase() === dataDig.toLowerCase())
    if(encontrado){
        let dataNova = question('Digite a nova data para esse estudo: ')
        encontrado.data = dataNova
        return console.log('✏️ Data atualizada com sucesso!');
    }else{
        return console.log('❌ Materia nao encontrada. Tente novamente.');
    }
}

export function editarTempo(tempoDig){
    let encontrado = estudoSemanal.find(item => item.materia.toLowerCase() === tempoDig.toLowerCase())
    if(encontrado){
        let tempoNovo = question('Digite o novo tempo de estudo: ')
        encontrado.tempo = tempoNovo
        return console.log('✏️ Tempo de estudo atualizado com sucesso!');
    }else{
        return console.log('❌ Materia nao encontrada. Tente novamente.');
    }
}

export function filtroConteudo(materia){
    let encontrado = estudoSemanal.filter(item => item.materia.toLowerCase() === materia.toLowerCase())
    if(encontrado.length > 0){
        console.log(`📚 Conteudos da materia de ${materia}: `)
        encontrado.forEach(item => {
            console.log(`- Conteúdo: ${item.conteudo} | Status: ${item.status}`)
        })
        let conteudoConcluido = question('\nDigite o conteudo que deseja marcar como concluido: ')
        let contEncontrado = encontrado.find(item => item.conteudo.toLowerCase() === conteudoConcluido.toLowerCase())
        if(contEncontrado){
            contEncontrado.status = 'concluido'
            return console.log('✅ Conteudo marcado como concluido!');
        }else{
            return console.log('❌ Conteudo nao encontrado. Tente novamente.');
        }
    }else{
        return console.log('❌ Nenhum conteudo encontrado para essa materia.');
    }
}

export function filtroData(dataBuscada){
    let dataEncontrado = estudoSemanal.filter(item => item.data === dataBuscada)
    if(dataEncontrado.length > 0){
        console.log(`📅 Estudos do dia ${dataBuscada}: `)
        dataEncontrado.forEach(item => {
            console.log(`- Materia: ${item.materia} | Conteudo: ${item.conteudo} | Tempo: ${item.tempo} | Status: ${item.status}`)
        })
    }else{
        return console.log('❌ Nenhum estudo encontrado para essa data.');
    }
}

export function concluidos(){
    let concluidos = estudoSemanal.filter(item => item.status.toLowerCase() === 'concluido')
    if(concluidos.length > 0){
        console.log("✅ Estudos concluidos:")
        concluidos.forEach(item => {
            console.log(`- Materia: ${item.materia} | Conteudo: ${item.conteudo} | Dia: ${item.dia} | Data: ${item.data}`)
        })
    }else{
        return console.log('⚠️ Nenhum estudo concluido ate o momento.');
    }
}

export function pendentes(){
    let pendente = estudoSemanal.filter(item => item.status.toLowerCase() === 'pendente')
    if(pendente.length > 0){
        console.log("⌛ Estudos pendentes:")
        pendente.forEach(item => {
            console.log(`- Materia: ${item.materia} | Conteudo: ${item.conteudo} | Dia: ${item.dia} | Data: ${item.data}`)
        })
    }else{
        return console.log('🎉 Nenhum estudo pendente!');
    }
}

export function cronograma(){
    console.log("📖 Cronograma de Estudos da Semana:\n")
    estudoSemanal.forEach(item =>{
        console.log(`- Dia: ${item.dia} | Data: ${item.data} | Materia: ${item.materia} | Conteudo: ${item.conteudo} | Tempo: ${item.tempo} | Status: ${item.status}`)
    })
}