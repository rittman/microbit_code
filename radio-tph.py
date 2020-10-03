def on_button_pressed_a():
    radio.send_string("degrees")

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_string("press")

input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    radio.send_string("humid")

input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_gesture_shake():
    radio.send_string("sun")
input.on_gesture(Gesture.Shake, on_gesture_shake)

radio.set_group(1)

def on_received_string(receivedString):
    basic.show_string(receivedString)

radio.on_received_string(on_received_string)
