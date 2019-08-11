import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

import { Link, Tooltip, Button } from 'mui/components'

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
                <Tooltip pos='bottom' title='This is a plain text tooltip'>
                    <Link color='primary'>Primary Link</Link>
                </Tooltip>
            </Grid>
            <Grid item xs={3}>
                <Tooltip
                    pos='top'
                    title={
                        <React.Fragment>
                            <Typography>
                                This is a html tooltip with button
                            </Typography>
                            <Button color='error'>Error Button</Button>
                        </React.Fragment>
                    }
                >
                    <Link color='secondary'>Default Link</Link>
                </Tooltip>
            </Grid>
        </Box>
    )
}

export default MUIThemeTester
