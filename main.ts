let colourIndex: number;
//  A 2D array defines the leds to turn on/off with a letter for the colour to use.
//  
//  This is then automagically passed and the zip tile colours set accordingly
let i = 0
let j = 0
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
//  Binary number as a string
let ledMap = ["11r1rrr", "1r0rrr01", "10101rrr", "100rrr11", "1rrr1111", "111rrrr1", "1r0biv01", "1010gbo1", "100ooo11", "o111y11o"]
// test = ledMap.index("111r1")
let colourOrder = ["k", "b", "g", "i", "o", "p", "r", "v", "w", "y", "0", "1"]
let colours = [Kitronik_Zip_Tile.colors(ZipLedColors.Black), Kitronik_Zip_Tile.colors(ZipLedColors.Blue), Kitronik_Zip_Tile.colors(ZipLedColors.Green), Kitronik_Zip_Tile.colors(ZipLedColors.Indigo), Kitronik_Zip_Tile.colors(ZipLedColors.Orange), Kitronik_Zip_Tile.colors(ZipLedColors.Purple), Kitronik_Zip_Tile.colors(ZipLedColors.Red), Kitronik_Zip_Tile.colors(ZipLedColors.Violet), Kitronik_Zip_Tile.colors(ZipLedColors.White), Kitronik_Zip_Tile.colors(ZipLedColors.Yellow), Kitronik_Zip_Tile.colors(ZipLedColors.Black), Kitronik_Zip_Tile.colors(ZipLedColors.White)]
let numRows = ledMap.length
let numColumns = ledMap[0].length
while (i <= numRows - 1) {
    while (j <= numColumns - 1) {
        colourIndex = _py.py_array_index(colourOrder, ledMap[i][j])
        //  if ledMap[i][j] == "1":
        if (colourIndex == _py.py_array_index(colourOrder, "r")) {
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
basic.forever(function on_forever() {
    
})
