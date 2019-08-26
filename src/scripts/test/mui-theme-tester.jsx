import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

import { Link, Tooltip, Button } from 'mui/components'

const Section = props =>
    <Box
        component={Grid}
        py={2}
        px={4}
        container
        alignItems='center'
        justify='center'
        wrap='wrap'
        {...props}
    />


console.log('github workflow test')
const MUIThemeTester = () => {
    return (
        <React.Fragment>
            <Section>
                <Grid item xs={4}>
                    <Tooltip pos='bottom' title='This is a plain text tooltip'>
                        <Link color='primary'>Example 01</Link>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip
                        pos='bottom'
                        width={400}
                        title='This is a plain text tooltip with custom width'
                    >
                        <Link color='primary'>Example 02</Link>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip
                        pos='bottom'
                        title={
                            <React.Fragment>
                                <Typography>
                                    This is a html tooltip with button
                                </Typography>
                                <Button color='error'>Error Button</Button>
                            </React.Fragment>
                        }
                    >
                        <Link color='secondary'>Example 03</Link>
                    </Tooltip>
                </Grid>
            </Section>
            <Section mt={16}>
                <Grid item xs={4}>
                    <Tooltip
                        pos='top'
                        title='tooltip on TOP with centered text'
                        tooltipTextAlign='center'
                    >
                        <Link color='primary'>Example 04</Link>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip
                        pos='left'
                        title='tooltip on LEFT but aligned right'
                        tooltipTextAlign='right'
                    >
                        <Link color='primary'>Example 05</Link>
                    </Tooltip>
                </Grid>
                <Grid item xs={4}>
                    <Tooltip
                        pos='right'
                        title='tooltip on RIGHT with very very very long text, and here are more...'
                    >
                        <Link color='primary'>Example 06</Link>
                    </Tooltip>
                </Grid>
            </Section>
        </React.Fragment>
    )
}

export default MUIThemeTester
