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
            <Grid item xs={3}>
                <Button>Default Contained</Button>
            </Grid>
            <Grid item xs={3}>
                <Button color='primary'>Primary Contained</Button>
            </Grid>
            <Grid item xs={3}>
                <Button color='secondary'>Secondary Contained</Button>
            </Grid>
            <Grid item xs={3}>
                <Button color='error'>Error Contained</Button>
            </Grid>
            <Grid item xs={3}>
                <Button outlined>Default Outlined</Button>
            </Grid>
            <Grid item xs={3}>
                <Button outlined color='primary'>
                    Primary Outlined
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button outlined color='secondary'>
                    Secondary Outlined
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button outlined color='error'>
                    Error Outlined
                </Button>
            </Grid>
            <Grid item xs={3}>
                <Button disabled>Disabled</Button>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
