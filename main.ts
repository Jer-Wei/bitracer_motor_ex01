input.onButtonPressed(Button.A, function () {
    Motor(2, 0, 200)
})
function Motor (ID: number, Dir: number, Speed: number) {
    let i2cbuf = pins.createBuffer(3)
    i2cbuf[0] = ID
    i2cbuf[1] = Dir
    i2cbuf[2] = Speed
    pins.i2cWriteBuffer(0x10, i2cbuf)
}
