input.onButtonPressed(Button.A, function button_a() {
    let temp = envirobit.getTemperature()
    basic.showString("" + temp + "degrees")
})
input.onButtonPressed(Button.B, function button_b() {
    let press = envirobit.getPressure()
    basic.showString("" + press + "Pa")
})
input.onButtonPressed(Button.AB, function button_ab() {
    let humid = envirobit.getTemperature()
    basic.showString("" + humid + "percent")
})
envirobit.setClapSensitivity(10)
envirobit.onClap(function on_clap() {
    if (envirobit.getLight() < 50) {
        basic.showString("DARK")
    } else {
        basic.showString("LIGHT")
    }
    
})
