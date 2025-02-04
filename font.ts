
namespace neopixel {

    //copy from microbit-dal\inc\core\MicroBitFont.h
    export const MICROBIT_FONT_WIDTH = 5
    export const MICROBIT_FONT_HEIGHT = 5
    const MICROBIT_FONT_ASCII_START = 32
    const MICROBIT_FONT_ASCII_END = 126

    //copy from microbit-dal\source\core\MicroBitFont.cpp
    const font = Buffer.fromArray([0x0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x8, 0x8, 0x0, 0x8, 0xa, 0x4a, 0x40, 0x0, 0x0, 0xa, 0x5f, 0xea, 0x5f, 0xea, 0xe, 0xd9, 0x2e, 0xd3, 0x6e, 0x19, 0x32, 0x44, 0x89, 0x33, 0xc, 0x92, 0x4c, 0x92, 0x4d, 0x8, 0x8, 0x0, 0x0, 0x0, 0x4, 0x88, 0x8, 0x8, 0x4, 0x8, 0x4, 0x84, 0x84, 0x88, 0x0, 0xa, 0x44, 0x8a, 0x40, 0x0, 0x4, 0x8e, 0xc4, 0x80, 0x0, 0x0, 0x0, 0x4, 0x88, 0x0, 0x0, 0xe, 0xc0, 0x0, 0x0, 0x0, 0x0, 0x8, 0x0, 0x1, 0x22, 0x44, 0x88, 0x10, 
        //original font 0 ~3, 4-pixel-width already
        0xc, 0x92, 0x52, 0x52, 0x4c, 0x4, 0x8c, 0x84, 0x84, 0x8e, 0x1c, 0x82, 0x4c, 0x90, 0x1e, 0x1e, 0xc2, 0x44, 0x92, 0x4c, 
        // original font 4~9
        // 0x6, 0xca, 0x52, 0x5f, 0xe2, 0x1f, 0xf0, 0x1e, 0xc1, 0x3e, 0x2, 0x44, 0x8e, 0xd1, 0x2e, 0x1f, 0xe2, 0x44, 0x88, 0x10, 0xe, 0xd1, 0x2e, 0xd1, 0x2e, 0xe, 0xd1, 0x2e, 0xc4, 0x88, 
        // replaced with my custom 4-pixel-width-font of numbers 4~9
        4, 12, 20, 30, 4, 30, 16, 28, 2, 28, 12, 16, 28, 18, 12, 30, 2, 4, 8, 16, 12, 18, 12, 18, 12, 12, 18, 14, 2, 12,
        // reset fonts ...
        0x0, 0x8, 0x0, 0x8, 0x0, 0x0, 0x4, 0x80, 0x4, 0x88, 0x2, 0x44, 0x88, 0x4, 0x82, 0x0, 0xe, 0xc0, 0xe, 0xc0, 0x8, 0x4, 0x82, 0x44, 0x88, 0xe, 0xd1, 0x26, 0xc0, 0x4, 0xe, 0xd1, 0x35, 0xb3, 0x6c, 0xc, 0x92, 0x5e, 0xd2, 0x52, 0x1c, 0x92, 0x5c, 0x92, 0x5c, 0xe, 0xd0, 0x10, 0x10, 0xe, 0x1c, 0x92, 0x52, 0x52, 0x5c, 0x1e, 0xd0, 0x1c, 0x90, 0x1e, 0x1e, 0xd0, 0x1c, 0x90, 0x10, 0xe, 0xd0, 0x13, 0x71, 0x2e, 0x12, 0x52, 0x5e, 0xd2, 0x52, 0x1c, 0x88, 0x8, 0x8, 0x1c, 0x1f, 0xe2, 0x42, 0x52, 0x4c, 0x12, 0x54, 0x98, 0x14, 0x92, 0x10, 0x10, 0x10, 0x10, 0x1e, 0x11, 0x3b, 0x75, 0xb1, 0x31, 0x11, 0x39, 0x35, 0xb3, 0x71, 0xc, 0x92, 0x52, 0x52, 0x4c, 0x1c, 0x92, 0x5c, 0x90, 0x10, 0xc, 0x92, 0x52, 0x4c, 0x86, 0x1c, 0x92, 0x5c, 0x92, 0x51, 0xe, 0xd0, 0xc, 0x82, 0x5c, 0x1f, 0xe4, 0x84, 0x84, 0x84, 0x12, 0x52, 0x52, 0x52, 0x4c, 0x11, 0x31, 0x31, 0x2a, 0x44, 0x11, 0x31, 0x35, 0xbb, 0x71, 0x12, 0x52, 0x4c, 0x92, 0x52, 0x11, 0x2a, 0x44, 0x84, 0x84, 0x1e, 0xc4, 0x88, 0x10, 0x1e, 0xe, 0xc8, 0x8, 0x8, 0xe, 0x10, 0x8, 0x4, 0x82, 0x41, 0xe, 0xc2, 0x42, 0x42, 0x4e, 0x4, 0x8a, 0x40, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1f, 0x8, 0x4, 0x80, 0x0, 0x0, 0x0, 0xe, 0xd2, 0x52, 0x4f, 0x10, 0x10, 0x1c, 0x92, 0x5c, 0x0, 0xe, 0xd0, 0x10, 0xe, 0x2, 0x42, 0x4e, 0xd2, 0x4e, 0xc, 0x92, 0x5c, 0x90, 0xe, 0x6, 0xc8, 0x1c, 0x88, 0x8, 0xe, 0xd2, 0x4e, 0xc2, 0x4c, 0x10, 0x10, 0x1c, 0x92, 0x52, 0x8, 0x0, 0x8, 0x8, 0x8, 0x2, 0x40, 0x2, 0x42, 0x4c, 0x10, 0x14, 0x98, 0x14, 0x92, 0x8, 0x8, 0x8, 0x8, 0x6, 0x0, 0x1b, 0x75, 0xb1, 0x31, 0x0, 0x1c, 0x92, 0x52, 0x52, 0x0, 0xc, 0x92, 0x52, 0x4c, 0x0, 0x1c, 0x92, 0x5c, 0x90, 0x0, 0xe, 0xd2, 0x4e, 0xc2, 0x0, 0xe, 0xd0, 0x10, 0x10, 0x0, 0x6, 0xc8, 0x4, 0x98, 0x8, 0x8, 0xe, 0xc8, 0x7, 0x0, 0x12, 0x52, 0x52, 0x4f, 0x0, 0x11, 0x31, 0x2a, 0x44, 0x0, 0x11, 0x31, 0x35, 0xbb, 0x0, 0x12, 0x4c, 0x8c, 0x92, 0x0, 0x11, 0x2a, 0x44, 0x98, 0x0, 0x1e, 0xc4, 0x88, 0x1e, 0x6, 0xc4, 0x8c, 0x84, 0x86, 0x8, 0x8, 0x8, 0x8, 0x8, 0x18, 0x8, 0xc, 0x88, 0x18, 0x0, 0x0, 0xc, 0x83, 0x60])

    export function plotCharFont(char: string, onPlot:(x:number, y:number)=>void) {
        if (char.length < 1) return

        const index = (char.charCodeAt(0) - MICROBIT_FONT_ASCII_START) * MICROBIT_FONT_HEIGHT
        for (let y = 0; y < 5; y++) {
            let row = font.getUint8(index + y)
            for (let x = 0; x < 5; x++) {
                if (row & (1 << (MICROBIT_FONT_WIDTH-1))) {
                    onPlot(x,y)
                }
                row <<= 1
            }
        }
    }

    /**
     * get a image of a char from defualt font.
     * return the font of first letter if there's multi letter in parameter 'char'
     * or return empty image if char is empty
     * @param char string with one letter which font will be in returned image
     */
    //% blockId="neopixel_get_char_image" block="get image of |%char from font"
    //% weight=85 blockGap=8
    //% parts="neopixel"
    export function getCharImage(char: string): Image {
        const img = images.createImage('')
        plotCharFont(char, (x,y)=>{
            img.setPixel(x, y, true)
        })
        return img
    }
}

//tool, for reference
namespace fontGenerate{
    //font 4~9
    let fontImages = [
        images.createImage(`
    . . # . .
    . # # . .
    # . # . .
    # # # # .
    . . # . .
    `),
        images.createImage(`
    # # # # .
    # . . . .
    # # # . .
    . . . # .
    # # # . .
    `),
        images.createImage(`
    . # # . .
    # . . . .
    # # # . .
    # . . # .
    . # # . .
    `),
        images.createImage(`
    # # # # .
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    `),
        images.createImage(`
    . # # . .
    # . . # .
    . # # . .
    # . . # .
    . # # . .
    `),
        images.createImage(`
    . # # . .
    # . . # .
    . # # # .
    . . . # .
    . # # . .
    `)
    ]

    const font = []
    for (let i = 0; i < fontImages.length; i++) {
        let fontImg = fontImages[i]
        for (let y = 0; y < 5; y++) {
            let row = 0
            for (let x = 0; x < 5; x++) {
                row <<= 1
                if (fontImages[i].pixel(x, y))
                    row |= 1
            }
            font.push(row)
        }
    }
    console.log(font.join(", "))
    //result:
    //4, 12, 20, 30, 4, 30, 16, 28, 2, 28, 12, 16, 28, 18, 12, 30, 2, 4, 8, 16, 12, 18, 12, 18, 12, 12, 18, 14, 2, 12

}