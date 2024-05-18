// A 2D array defines the leds to turn on/off with a letter for the colour to use.
// 
// This is then automagically passed and the zip tile colours set accordingly
let i = 0
let j = 0
let colourIndex: number;
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
// Binary number as a string
let ledMap = [
"111r1",
"1r001",
"10101",
"10011",
"11111"
]
let test = _py.py_array_index(ledMap, "111r1")
let colourOrder = [
"r",
"b",
"g",
"1",
"0"
]
let colours = [Kitronik_Zip_Tile.colors(ZipLedColors.Red), Kitronik_Zip_Tile.colors(ZipLedColors.Blue), Kitronik_Zip_Tile.colors(ZipLedColors.Green)]
let numRows = ledMap.length
let numColumns = ledMap[0].length
while (i <= numRows - 1) {
    while (j <= numColumns - 1) {
        colourIndex = _py.py_array_index(colourOrder, ledMap[i][j])
// if ledMap[i][j] == "1":
        if (colourIndex == 0) {
            led.plot(j, i)
            tileDisplay.setMatrixColor(0, 0, colours[colourIndex])
        }
        j += 1
    }
    j = 0
    i += 1
}
tileDisplay.show()
tileDisplay.setBrightness(50)
basic.forever(function () {
	
})
