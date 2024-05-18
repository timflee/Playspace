/** Iterate over each digit in the binary number */
let i = 0
let j = 0
//  Binary number as a string
let ledMap = ["11111", "11001", "10101", "10011", "11111"]
//  Get the length of the binary number
//  len(ledMap)
let numRows = ledMap.length
let numColumns = ledMap[0].length
while (i <= numRows - 1) {
    while (j <= numColumns - 1) {
        //  Check if the digit is '1'
        if (ledMap[i][j] == "1") {
            led.plot(j, i)
        }
        
        j += 1
    }
    j = 0
    i += 1
}
basic.forever(function on_forever() {
    
})
