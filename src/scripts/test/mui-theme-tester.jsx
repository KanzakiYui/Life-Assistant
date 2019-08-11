import React from 'react'
import { Grid, Box } from '@material-ui/core'

import { Button } from 'mui/components'

const MUIThemeTester = () => {
    return (
        <Box
            component={Grid}
            py={2}
            px={4}
            container
            alignItems='center'
            justify='center'
            wrap='wrap'
            spacing={4}
        >
            <Grid item xs={4}>
                <Button>Primary Contained</Button>
            </Grid>
            <Grid item xs={4}>
                <Button color='secondary'>Secondary Contained</Button>
            </Grid>
            <Grid item xs={4}>
                <Button color='error'>Error Contained</Button>
            </Grid>
            <Grid item xs={4}>
                <Button outlined>Primary Outlined</Button>
            </Grid>
            <Grid item xs={4}>
                <Button outlined color='secondary'>
                    Secondary Outlined
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button outlined color='error'>
                    Error Outlined
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button disabled>Test</Button>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
