j = 0
# A 2D array defines the leds to turn on/off with a letter for the colour to use.
# 
# This is then automagically passed and the zip tile colours set accordingly
i = 0
tileDisplay = Kitronik_Zip_Tile.create_zip_tile_display(1, 1, Kitronik_Zip_Tile.UBitLocations.HIDDEN)
tileDisplay.clear()
tileDisplay.show()
#control.wait_micros(1000000)
# Binary number as a string
ledMapZay = [
    "bppppppp",
    "pppppppp",
    "pppppppp",
    "pbbppppp",
    "pppbpppp",
    "pppppppp",
    "bppppppb",
    "bppppppp"]

ledMapEve1 = [
    "pppppppp",
    "piiiiiip",
    "pibbbbip",
    "pibggbip",
    "pibggbip",
    "pibbbbip",
    "piiiiiip",
    "pppppppp"]

ledMap = [
    "roygbvpw",
    "roygbvpw",
    "roygbvpw",
    "roygbvpw",
    "roygbvpw",
    "roygbvpw",
    "roygbvpw",
    "roygbvpw"]

ledMapSky = ["vvvvvvvv",
    "vrrrrrrv",
    "vrvrvvrv",
    "vrvvvvrv",
    "vrvvvvrv",
    "vvrvvrvv",
    "vvvrrvvv",
    "vvvvvvvv"]
colourOrder = ["r", "b", "g", "w", "0", "i", "o", "p", "v", "y"]
colours = [Kitronik_Zip_Tile.colors(ZipLedColors.RED),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLUE),
    Kitronik_Zip_Tile.colors(ZipLedColors.GREEN),
    Kitronik_Zip_Tile.colors(ZipLedColors.WHITE),
    Kitronik_Zip_Tile.colors(ZipLedColors.BLACK),
    Kitronik_Zip_Tile.colors(ZipLedColors.INDIGO),
    Kitronik_Zip_Tile.colors(ZipLedColors.ORANGE),
    Kitronik_Zip_Tile.colors(ZipLedColors.PURPLE),
    Kitronik_Zip_Tile.colors(ZipLedColors.VIOLET),
    Kitronik_Zip_Tile.colors(ZipLedColors.YELLOW)]
numRows = len(ledMap)
numColumns = len(ledMap[0])
while i <= numRows - 1:
    while j <= numColumns - 1:
        colourIndex = colourOrder.index(ledMap[i][j])
        # if ledMap[i][j] == "1":
        # if colourIndex == 0:
        # led.plot(j, i)
        tileDisplay.set_matrix_color(j, i, colours[colourIndex])
        j += 1
    j = 0
    i += 1
tileDisplay.set_brightness(30)
tileDisplay.show()

def on_forever():
    pass
basic.forever(on_forever)
