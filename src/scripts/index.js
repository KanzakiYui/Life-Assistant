import React from 'react'
import { render } from 'react-dom'

import { Box, Typography, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import theme from 'mui/theme'
import { baseSpacing, baseHTMLFontSize, scaler } from 'mui/theme/constants'

const Test = () =>
    <Box>
        <Box mb={1}>
            <Typography>Current Spacing: {baseSpacing * scaler}</Typography>
        </Box>
        <Box mb={1}>
            <Typography>
                Current Font Size: {baseHTMLFontSize * scaler}
            </Typography>
        </Box>
        <Box mb={1}>
            <Typography>Scaler: {scaler}</Typography>
        </Box>
    </Box>


render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Test />
    </ThemeProvider>,
    document.getElementById('react-root')
)
