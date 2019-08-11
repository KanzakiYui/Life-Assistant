import React from 'react'
import { Grid, Box } from '@material-ui/core'

import { Link } from 'mui/components'

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
                <Link href='https://www.google.ca'>Default Link</Link>
            </Grid>
            <Grid item xs={3}>
                <Link color='primary'>Primary Link</Link>
            </Grid>
            <Grid item xs={3}>
                <Link color='secondary'>Secondary Link</Link>
            </Grid>
            <Grid item xs={3}>
                <Link color='error'>Error Link</Link>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
