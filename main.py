def on_button_pressed_a():
    global temp
    temp = envirobit.get_temperature()
    basic.show_string("" + str(temp) + "degrees")
input.on_button_pressed(Button.A, on_button_pressed_a)

def light_dark():
    global ld
    if envirobit.get_light() < 50:
        ld = "DARK"
        basic.show_string(ld)
    else:
        ld = "LIGHT"
        basic.show_string(ld)
envirobit.on_clap(light_dark)

def on_button_pressed_ab():
    global humid
    humid = envirobit.get_temperature()
    basic.show_string("" + str(humid) + "percent")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global press
    press = envirobit.get_pressure()
    basic.show_string("" + str(press) + "Pa")
input.on_button_pressed(Button.B, on_button_pressed_b)

press = 0
humid = 0
temp = 0
ld = ""
envirobit.set_clap_sensitivity(10)
radio.set_group(1)

def on_received_string(receivedString):
    if receivedString == "degrees":
        global temp
        temp = envirobit.get_temperature()
        radio.send_string(str(temp) + "degrees")

    if receivedString == "humid":
        global humid
        humid = envirobit.get_temperature()
        radio.send_string(str(humid) + "percent")

    if receivedString == "press":
        global press
        press = envirobit.get_pressure()

        radio.send_string(str(press) + "Pa")

    if receivedString == "sun":
        global ld
        if envirobit.get_light() < 50:
            ld = "DARK"
            basic.show_string(ld)
        else:
            ld = "LIGHT"
            basic.show_string(ld)

radio.on_received_string(on_received_string)
