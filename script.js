// Seleção de Elementos

const generatePasswordButton = document.querySelector('#generate-password')
const generatedPassword = document.querySelector('#generated-password')

// Funções

const getLetterLowerCase = () => {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
 }

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
 }
 
const getSymbol = () => {
    const symbols = "[]{}()!@#$%¨&*-+=|\/<>~^!?"
    return symbols[Math.floor(Math.random() * symbols.length)]
 }

// Função armazenando todas as funções anteriores como argumentos

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = 0

    const passwordLength = 10

    const generators = [
        getLetterLowerCase, 
        getLetterUpperCase, 
        getNumber, 
        getSymbol
    ]

/* Looping que irá percorrer as posições de password e as funções dentro do array e gerar valor aleatório 
 baseado nas posições do array de funções */

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }
        password = password.slice(0, passwordLength)
        
        generatedPassword.style.display = "block"
        generatedPassword.querySelector("h4").textContent = password
}


// Seleção de eventos

generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, 
        getLetterUpperCase, 
        getNumber, 
        getSymbol)
})