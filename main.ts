input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Motor(2, 0, 200)
})
function MotorRun (ID: number,Dㄐㄛ Speed: number): void {
    let i2cbuf = pins.createBuffer(3);
    if (ID == 0) {
        i2cbuf[0] = 0x00;
    } else {
        i2cbuf[0] = 0x02;
    }
    if (Speed => 0) {
        i2cbuf[1] = 0;
    } else {
        i2cbuf[1] = 1;
    }
    if 
    i2cbuf[2] = Speed
    pins.i2cWriteBuffer(0x10, i2cbuf)
}

    export function motorRun(index: Motors, PWM: number): void {
        let i2cbuf = pins.createBuffer(3);
        if (index == 0) {
            i2cbuf[0] = 0x02;
            i2cbuf[1] = PWM >> 8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (index == 1) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = PWM >> 8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (index == 2) {	
            i2cbuf[0] = 0x00;
            i2cbuf[1] = PWM >> 8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
            i2cbuf[0] = 0x02;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
    }