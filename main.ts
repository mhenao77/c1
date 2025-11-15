input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    basic.showString("HOLA A TODOS")
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        # . . . .
        # # # # #
        # . . . .
        . # . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(1000)
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(1000)
    basic.showArrow(ArrowNames.South)
    basic.pause(1000)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(1000)
    basic.showArrow(ArrowNames.West)
    basic.pause(1000)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(1000)
    basic.clearScreen()
})
