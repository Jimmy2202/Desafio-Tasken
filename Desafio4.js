const fs = require('fs');

function contarLetras(linha) {
    const vogais = (linha.match(/[aeiou]/gi) || []).length; //conto as ocorrências das vogais na linha passada no parâmetro 
    const consoantes = (linha.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length; //conto as ocorrências das consoantes na linha passada no parâmetro 
    return { vogais, consoantes }; //retorno o número de vogais e consoantes existentes da linha 
}

// Nome do arquivo passado como argumento no terminal
const arquivo = process.argv[2];

//Verifico erro na escrita do argumento 
if (!arquivo) {
    console.log("Argumento Errado do Arquivo...");
    process.exit(1);
}

// Leitura e verificação de erro do arquivo 
fs.readFile(arquivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err.message);
        return;
    }

    const linhas = data.split('\n'); //divido a string data por cada linha pulada e guardo em um array, tendo agora acesso a todas as linhas do txt

    const resultado = linhas.reduce((acc, linha) => {
        const { vogais, consoantes } = contarLetras(linha); //passo cada linha e verifico o número de vogais e consoantes dela

        if (vogais > acc.maisVogais.vogais)
              acc.maisVogais = { texto: linha, vogais }; //atualizo a cada iteração a linha com mais vogais 
        if (consoantes > acc.maisConsoantes.consoantes) acc.maisConsoantes = { texto: linha, consoantes }; //atualizo a cada iteração a linha com mais consoantes 

        return acc;
    }, { maisVogais: { texto: '', vogais: 0 }, maisConsoantes: { texto: '', consoantes: 0 } });

    console.log(`Linha com mais vogais: "${resultado.maisVogais.texto}" (${resultado.maisVogais.vogais} vogais)`);
    console.log(`Linha com mais consoantes: "${resultado.maisConsoantes.texto}" (${resultado.maisConsoantes.consoantes} consoantes)`);
});
