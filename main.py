# A 2D array defines the leds to turn on/off with a letter for the colour to use.
# 
# This is then automagically passed and the zip tile colours set accordingly
i = 0
j = 0
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.clear()
# Binary number as a string
ledMap = ["11r1rrr",
    "1r0rrr01",
    "10101rrr",
    "100rrr11",
    "1rrr1111",
    "111rrrr1",
    "1r0biv01",
    "1010gbo1",
    "100ooo11",
    "o111y11o"]
#test = ledMap.index("111r1")

colourOrder = ["k", "b", "g", "i", "o", "p", "r", "v", "w", "y", "0", "1"]

colours = [Kitronik_Zip_Tile.colors(ZipLedColors.BLACK),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLUE),
    Kitronik_Zip_Tile.colors(ZipLedColors.GREEN),
    Kitronik_Zip_Tile.colors(ZipLedColors.INDIGO),
    Kitronik_Zip_Tile.colors(ZipLedColors.ORANGE),
    Kitronik_Zip_Tile.colors(ZipLedColors.PURPLE),
    Kitronik_Zip_Tile.colors(ZipLedColors.RED),
    Kitronik_Zip_Tile.colors(ZipLedColors.VIOLET),
    Kitronik_Zip_Tile.colors(ZipLedColors.WHITE),
    Kitronik_Zip_Tile.colors(ZipLedColors.YELLOW),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLACK),
    Kitronik_Zip_Tile.colors(ZipLedColors.WHITE),
    ]
    
numRows = len(ledMap)
numColumns = len(ledMap[0])
while i <= numRows - 1:
    while j <= numColumns - 1:
        colourIndex = colourOrder.index(ledMap[i][j])
        # if ledMap[i][j] == "1":
        if colourIndex == colourOrder.index("r"):
            led.plot(j, i)
            tileDisplay.set_matrix_color(0, 0, colours[colourIndex])
        j += 1
    j = 0
    i += 1
tileDisplay.show()
tileDisplay.set_brightness(50)

def on_forever():
    pass
basic.forever(on_forever)
