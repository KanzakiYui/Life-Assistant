import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const defaultButtonStyles = makeStyles(theme => ({
    root: {
        'paddingTop': theme.spacing(0.5),
        'paddingBottom': theme.spacing(0.5),
        'paddingLeft': theme.spacing(4),
        'paddingRight': theme.spacing(4),
        'minWidth': theme.typography.fontSize * 12,
        'boxShadow': '0px 0px 10px 2px rgba(255, 255, 255, 0.4)',
        '&:hover': {
            boxShadow: '0px 0px 10px 2px rgba(255, 255, 255, 0.6)'
        }
    },
    label: {
        color: theme.palette.common.whiteLight
    }
}))

const Button = props => {
    const classes = defaultButtonStyles()
    return (
        <MuiButton
            classes={classes}
            variant='contained'
            color='primary'
            {...props}
        />
    )
}

export default Button
