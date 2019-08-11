import React from 'react'
import PropType from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        'backgroundColor': ({ color }) => theme.palette[color].main,
        'padding': `${theme.spacing(0.5)}px ${theme.spacing(4)}px`,
        'minWidth': theme.typography.fontSize * 16,
        'boxShadow': ({ color }) =>
            `0px 0px 5px 1px ${theme.palette[color].main}`,
        '&>*:first-child': {
            color: ({ color }) =>
                color === 'error'
                    ? theme.palette.default.light
                    : theme.palette.common.dark
        },
        '&:hover': {
            backgroundColor: ({ color }) => theme.palette[color].light,
            boxShadow: ({ color }) =>
                `0px 0px 10px 2px ${theme.palette[color].main}`
        }
    },
    outlined: {
        'backgroundColor': 'transparent !important',
        'color': ({ color }) => theme.palette[color].main,
        'borderColor': ({ color }) => theme.palette[color].main,
        '&>*:first-child': {
            color: ({ color }) => theme.palette[color].main
        },
        '&:hover>*:first-child': {
            color: ({ color }) => theme.palette[color].light
        }
    },
    disabled: {
        'backgroundColor': `${theme.palette.grey[700]} !important`,
        'pointerEvents': 'auto !important',
        'boxShadow': '0px 0px 0px 0px transparent',
        'color': `${theme.palette.default.dark} !important`,
        '&:hover': {
            cursor: 'not-allowed',
            boxShadow: '0px 0px 0px 0px transparent !important'
        }
    }
}))

const Button = ({ outlined, color: color, ...others }) => {
    const ButtonColor = color || 'default'
    const classes = useStyles({ color: ButtonColor })
    const variant = outlined ? 'outlined' : 'contained'
    return <MuiButton classes={classes} variant={variant} {...others} />
}

Button.propTypes = {
    outlined: PropType.bool,
    color: PropType.string
}

export default Button
