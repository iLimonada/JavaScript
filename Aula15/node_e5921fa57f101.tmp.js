let num = [5,8,4]
num[3] = 6 // Atribuir um valor dentro de um array depois de setado
num.push(7) // Atribuir um valor ao array criando uma espaço sem identificar os numeros ja criados
let cont = 0
while (cont < num[cont]) {
    console.log(`Sequencia ${cont}° = ${num[cont]}`)
    cont++
}
for (let pos = 0; pos <= num.length; cont++) {
    console.log(num[pos])
}



console.log(num)
console.log(`O tamanho do vetor é ${num.length}`) // Para saber o tamanho do array 
console.log(`A ordem crescente do verto é ${num.sort()}`)
