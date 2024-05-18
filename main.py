"""
Iterate over each digit in the binary number
"""
i = 0
j = 0

# Binary number as a string
ledMap = ["11111", "11001", "10101", "10011", "11111"]
# Get the length of the binary number

# len(ledMap)

numRows = len(ledMap)
numColumns = len(ledMap[0])

while i <= numRows - 1:
    while j <=numColumns - 1:
        # Check if the digit is '1'
        if ledMap[i][j] == "1":
            led.plot(j, i)
        j += 1
    j = 0
    i +=1

def on_forever():
    pass
basic.forever(on_forever)
