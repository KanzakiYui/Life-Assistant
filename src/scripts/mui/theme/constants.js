const resolutionArray = [
    320, 640, 960, 1280, 1440, 1680, 1920, 2160, 2560, 2880, 3840, 4096, 5120, 6400, 7680, 8192
]

export const baseHTMLFontSize = 16 // real font size
export const baseSpacing = baseHTMLFontSize / 2
export const baseFontSize = 14

export const scaler = (() => {
    const pixelDensity = window.screen.width / window.devicePixelRatio
    const scaleFactor = resolutionArray.findIndex(value => value > pixelDensity)
    return (
        (scaleFactor > -1 ? scaleFactor : resolutionArray.length) * 0.125 + 0.75
    )
})()
