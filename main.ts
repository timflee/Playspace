let colourIndex: number;
//  A 2D array defines the leds to turn on/off with a letter for the colour to use.
//  
//  This is then automagically passed and the zip tile colours set accordingly
let i = 0
let j = 0
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
tileDisplay.clear()
tileDisplay.show()
//  control.wait_micros(1000000)
//  Binary number as a string
let ledMapZay = ["bppppppp", "pppppppp", "pppppppp", "pbbppppp", "pppbpppp", "pppppppp", "bppppppb", "bppppppp"]
let ledMapEve1 = ["pppppppp", "piiiiiip", "pibbbbip", "pibggbip", "pibggbip", "pibbbbip", "piiiiiip", "pppppppp"]
let ledMapEve2 = ["roygbvpw", "roygbvpw", "roygbvpw", "roygbvpw", "roygbvpw", "roygbvpw", "roygbvpw", "roygbvpw"]
let ledMap = ["b00r0000", "0b0r0000", "00br0000", "000i0000", "wwwpbwww", "000r0b00", "yyyoyygy", "000r000b"]
let ledMapSky = ["vvvvvvvv", "vrrrrrrv", "vrvrvvrv", "vrvvvvrv", "vrvvvvrv", "vvrvvrvv", "vvvrrvvv", "vvvvvvvv"]
let colourOrder = ["r", "b", "g", "w", "0", "i", "o", "p", "v", "y"]
let colours = [Kitronik_Zip_Tile.colors(ZipLedColors.Red), Kitronik_Zip_Tile.colors(ZipLedColors.Blue), Kitronik_Zip_Tile.colors(ZipLedColors.Green), Kitronik_Zip_Tile.colors(ZipLedColors.White), Kitronik_Zip_Tile.colors(ZipLedColors.Black), Kitronik_Zip_Tile.colors(ZipLedColors.Indigo), Kitronik_Zip_Tile.colors(ZipLedColors.Orange), Kitronik_Zip_Tile.colors(ZipLedColors.Purple), Kitronik_Zip_Tile.colors(ZipLedColors.Violet), Kitronik_Zip_Tile.colors(ZipLedColors.Yellow)]
let numRows = ledMap.length
let numColumns = ledMap[0].length
while (i <= numRows - 1) {
    while (j <= numColumns - 1) {
        colourIndex = _py.py_array_index(colourOrder, ledMap[i][j])
        //  if ledMap[i][j] == "1":
        //  if colourIndex == 0:
        //  led.plot(j, i)
        tileDisplay.setMatrixColor(j, i, colours[colourIndex])
        j += 1
    }
    j = 0
    i += 1
}
tileDisplay.setBrightness(30)
tileDisplay.show()
basic.forever(function on_forever() {
    
})
