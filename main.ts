input.onButtonPressed(Button.A, function () {
    MotorRun(0, 1000)
})
input.onButtonPressed(Button.AB, function () {
    MotorRun(2, 0)
})
input.onButtonPressed(Button.B, function () {
    MotorRun(1, -1000)
})
function MotorRun (Motot_ID: number, Motot_Speed: number) {
    let i2cbuf = pins.createBuffer(3);
if (Motot_ID == 0) {
        i2cbuf[0] = 0
        i2cbuf[1] = Motot_Speed >> 8
        serial.writeNumber(i2cbuf[1])
        i2cbuf[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf)
    }
    if (Motot_ID == 1) {
        i2cbuf[0] = 2
        i2cbuf[1] = Motot_Speed >> 8
        serial.writeNumber(i2cbuf[1])
        i2cbuf[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf)
    }
    if (Motot_ID == 2) {
        i2cbuf[0] = 0
        i2cbuf[1] = Motot_Speed >> 8
        i2cbuf[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf)
i2cbuf[0] = 2
        pins.i2cWriteBuffer(0x10, i2cbuf)
    }
}
serial.redirectToUSB()
