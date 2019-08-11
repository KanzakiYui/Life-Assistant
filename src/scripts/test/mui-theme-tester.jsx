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
        >
            <Grid item xs={3}>
                <Button>Default Button</Button>
            </Grid>
            <Grid item xs={3}>
                <Button scale='sm'>Small Button</Button>
            </Grid>
            <Grid item xs={3}>
                <Button scale='lg'>Large Button</Button>
            </Grid>
            <Grid item xs={3}>
                <Button scale={0.5}>Arbitrary Sized Button</Button>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
