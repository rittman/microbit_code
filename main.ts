input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    temp = envirobit.getTemperature()
    basic.showString("" + ("" + temp) + "degrees")
})
envirobit.onClap(function light_dark() {
    
    if (envirobit.getLight() < 50) {
        ld = "DARK"
        basic.showString(ld)
    } else {
        ld = "LIGHT"
        basic.showString(ld)
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
let ld = ""
envirobit.setClapSensitivity(10)
radio.setGroup(1)
radio.onReceivedString(function on_received_string(receivedString: string) {
    if (receivedString == "degrees") {
        
        temp = envirobit.getTemperature()
        radio.sendString("" + temp + "degrees")
    }
    
    if (receivedString == "humid") {
        
        humid = envirobit.getTemperature()
        radio.sendString("" + humid + "percent")
    }
    
    if (receivedString == "press") {
        
        press = envirobit.getPressure()
        radio.sendString("" + temp + "press")
    }
    
    if (receivedString == "sun") {
        
        if (envirobit.getLight() < 50) {
            ld = "DARK"
            basic.showString(ld)
        } else {
            ld = "LIGHT"
            basic.showString(ld)
        }
        
    }
    
})
