let mspeed = 0
input.onButtonPressed(Button.A, function () {
    MotorRun(1, 200)
})
input.onButtonPressed(Button.AB, function () {
    MotorRun(2, 0)
})
input.onButtonPressed(Button.B, function () {
    let i2cbuf = pins.createBuffer(3);
    let mspeed = 50
    i2cbuf[0] = 0
    i2cbuf[1] = 1
    i2cbuf[2] = mspeed
    pins.i2cWriteBuffer(0x10, i2cbuf)
})
function MotorRun (Motot_ID: number, Motot_Speed: number) {
    let i2cbuf2 = pins.createBuffer(3);
    if (Motot_ID == 0) {
        i2cbuf2[0] = 0x00
        i2cbuf2[1] = Motot_Speed >> 8
        i2cbuf2[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf2)
    }
    if (Motot_ID == 1) {
        i2cbuf2[0] = 0x02
        i2cbuf2[1] = Motot_Speed >> 8
        i2cbuf2[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf2)
    }
    if (Motot_ID == 2) {
        i2cbuf2[0] = 0
        i2cbuf2[1] = Motot_Speed >> 8
        i2cbuf2[2] = Motot_Speed
        pins.i2cWriteBuffer(0x10, i2cbuf2)
i2cbuf2[0] = 2
        pins.i2cWriteBuffer(0x10, i2cbuf2)
    }
}
