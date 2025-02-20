let number = 2
const array = []

while(number!=0){
    number = Number(prompt("Digite o número: "))
    if(number != 0){
        array.push(number)
    }
}

console.log(`Quantidade de números digitados: ${array.length}`)

console.log(`Maior número digitado: ${Math.max(...array)}`)

console.log(`Média dos números: ${array.reduce((soma, num) => soma + num, 0)/array.length }`)

console.log(`Menor Número Ímpar: ${array.reduce((menor, numero)=>{
    return numero%2!=0 && numero < menor ? numero : menor
}, Infinity)}`)

const objectCont = array.reduce((objAux, number) => {
    objAux[number] = (objAux[number]||0) + 1
    return objAux
}, {})

console.log(Object.entries(objectCont).map(([num, qtd]) => {
    return `O número ${num} apareceu ${qtd} vez(es)`
}).join('\n'))
