input.onButtonPressed(Button.A, function () {
    seconds += 10
    basic.showNumber(seconds)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    seconds += 30
    basic.showNumber(seconds)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    seconds += 1
    basic.showNumber(seconds)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    while (seconds > 0) {
        basic.showNumber(seconds)
        basic.pause(1000)
        seconds += 0 - 1
    }
    music.playMelody("C D C D C D C D ", 120)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.temperature())
})
let seconds = 0
seconds = 0
