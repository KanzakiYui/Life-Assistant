import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { baseSpacing, baseHTMLFontSize, scaler } from 'mui/theme/constants'

const MUIThemeTester = () => {
    return (
        <Grid container spacing={1} alignItems='center' justify='center'>
            <Box
                component={Grid}
                item
                xs={12}
                md={6}
                lg={4}
                color='primary.light'
            >
                Current Spacing: {baseSpacing * scaler}
            </Box>
            <Box
                component={Grid}
                item
                xs={12}
                md={6}
                lg={4}
                color='secondary.dark'
            >
                Current Font Size: {baseHTMLFontSize * scaler}
            </Box>
            <Box component={Grid} item xs={12} md={6} lg={4} color='error.main'>
                Scaler: {scaler}
            </Box>
        </Grid>
    )
}

export default MUIThemeTester
