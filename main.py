# A 2D array defines the leds to turn on/off with a letter for the colour to use.
# 
# This is then automagically passed and the zip tile colours set accordingly
i = 0
j = 0
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
# Binary number as a string
ledMap = ["111r1", "1r001", "10101", "10011", "11111"]
test = ledMap.index("111r1")
colourOrder = ["r", "b", "g", "1", "0"]
colours = [Kitronik_Zip_Tile.colors(ZipLedColors.RED),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLUE),
    Kitronik_Zip_Tile.colors(ZipLedColors.GREEN)]
numRows = len(ledMap)
numColumns = len(ledMap[0])
while i <= numRows - 1:
    while j <= numColumns - 1:
        colourIndex = colourOrder.index(ledMap[i][j])
        # if ledMap[i][j] == "1":
        if colourIndex == 0:
            led.plot(j, i)
            tileDisplay.set_matrix_color(0, 0, colours[colourIndex])
        j += 1
    j = 0
    i += 1

def on_forever():
    pass
basic.forever(on_forever)
