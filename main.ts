input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    temp = envirobit.getTemperature()
    basic.showString("" + ("" + temp) + "degrees")
})
envirobit.onClap(function light_dark() {
    if (envirobit.getLight() < 50) {
        basic.showString("DARK")
    } else {
        basic.showString("LIGHT")
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    humid = envirobit.getTemperature()
    basic.showString("" + ("" + humid) + "percent")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    press = envirobit.getPressure()
    basic.showString("" + ("" + press) + "Pa")
})
let press = 0
let humid = 0
let temp = 0
envirobit.setClapSensitivity(10)
radio.setGroup(1)
radio.onReceivedString(function on_received_string(receivedString: string) {
    if (receivedString == "degrees") {
        
        radio.sendNumber(temp)
    }
    
})
