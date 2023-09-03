function BinarydrawBinary (column: number, decimal: number) {
    if (decimal == 1) {
        led.plot(column, 4)
    } else if (decimal == 2) {
        led.plot(column, 3)
    } else if (decimal == 3) {
        led.plot(column, 3)
        led.plot(column, 4)
    } else if (decimal == 4) {
        led.plot(column, 2)
    } else if (decimal == 5) {
        led.plot(column, 2)
        led.plot(column, 4)
    } else if (decimal == 6) {
        led.plot(column, 2)
        led.plot(column, 3)
    } else if (decimal == 7) {
        led.plot(column, 2)
        led.plot(column, 3)
        led.plot(column, 4)
    } else if (decimal == 8) {
        led.plot(column, 1)
    } else if (decimal == 9) {
        led.plot(column, 1)
        led.plot(column, 4)
    }
}
