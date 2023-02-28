input.onButtonPressed(Button.A, function () {
    basic.showNumber(Temperatura_max)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Temperatura_min)
})
let Temperatura_min = 0
let Temperatura_max = 0
let Temperatura = input.temperature()
Temperatura_max = Temperatura
Temperatura_min = Temperatura
basic.forever(function () {
    basic.showString(".")
    Temperatura = input.temperature()
    if (Temperatura < Temperatura_min) {
        Temperatura_min = 0
    } else if (Temperatura > Temperatura_max) {
        Temperatura_max = Temperatura
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
