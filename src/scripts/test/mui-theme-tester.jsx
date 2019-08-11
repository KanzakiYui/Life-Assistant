import React from 'react'
import { Grid, Box } from '@material-ui/core'

import { Link, Tooltip } from 'mui/components'

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
                <Tooltip>
                    <Link color='secondary'>Default Link</Link>
                </Tooltip>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
