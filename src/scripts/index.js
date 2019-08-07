import React from 'react'
import { render } from 'react-dom'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import theme from 'mui/theme'
import Application from 'components'

render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Application />
    </ThemeProvider>,
    document.getElementById('react-root')
)
