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
                <Button>Hello World</Button>
            </Grid>
            <Grid item xs={4}>
                <Button>Welcome</Button>
            </Grid>
            <Grid item xs={4}>
                <Button>Ok</Button>
            </Grid>
            <Grid item xs={4}>
                <Button>Test</Button>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
