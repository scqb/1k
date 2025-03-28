makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 200)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 200)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 200)
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 200)
})
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
