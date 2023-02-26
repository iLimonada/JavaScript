//Escrevendo a mesma mensagem 6 vezes

// Maneira bruta (Não eficiente)

console.log("Olá, tudo bem?")
console.log("Olá, tudo bem?")
console.log("Olá, tudo bem?")
console.log("Olá, tudo bem?")
console.log("Olá, tudo bem?")
console.log("Olá, tudo bem?")

// Usando while

let contador1 = 0

console.log("\nUsando While")
while (contador1 <= 6) {
    console.log("Olá, tudo bem?")
    contador1++
}

//  Usando do while

let contador2 = 0

console.log("\nUsando Do While")
do {
    console.log("Olá, tudo bem?")
    contador2++
}while(contador2 <= 6)