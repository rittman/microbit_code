def button_a():
    temp = envirobit.get_temperature()
    basic.show_string(str(temp) + "degrees")

temp = input.on_button_pressed(Button.A, button_a)

def button_b():
    press = envirobit.get_pressure()
    basic.show_string(str(press) + "Pa")

input.on_button_pressed(Button.B, button_b)

def button_ab():
    humid = envirobit.get_temperature()
    basic.show_string(str(humid) + "percent")

input.on_button_pressed(Button.AB, button_ab)
