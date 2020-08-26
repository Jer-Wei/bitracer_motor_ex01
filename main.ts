input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function MotorRun (Motot_ID: number, Motot_Speed: number) {
    let i2cbuf = pins.createBuffer(3);
    if (Motot_ID == 0) {
        i2cbuf[0] = 0x00;
        i2cbuf[1] = Motot_Speed >> 8;
        i2cbuf[2] = Motot_Speed;
        ㄋㄛ
    } 
    if (Motot_ID == 1){
        i2cbuf[0] = 0x02;
        i2cbuf[1] = Motot_Speed >> 8;
        i2cbuf[2] = Motot_Speed;

    } 
    if (Motot_ID == 2) {
        i2cbuf[0] = 0x00;
        i2cbuf[1] = Motot_Speed >> 8;
        i2cbuf[2] = Motot_Speed;

    }
    i2cbuf[1] = Dir
    i2cbuf[2] = Motot_Speed
    pins.i2cWriteBuffer(0x10, i2cbuf);
}
