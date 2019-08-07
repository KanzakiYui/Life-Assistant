import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'
import spacing from './spacing'

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    breakpoints,
    palette,
    typography,
    spacing
})

export default theme
