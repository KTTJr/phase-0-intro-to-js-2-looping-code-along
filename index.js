const names = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(names, surprise) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
    return messages
} 

let counter = 10

function countDown(counter) {
    while (counter >= 0) {
        console.log(counter--)
}
}