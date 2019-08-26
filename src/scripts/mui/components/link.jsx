import React from 'react'
import PropType from 'prop-types'
import { Link as MuiLink } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { scaler } from 'mui/theme/constants'

const useStyles = makeStyles(theme => ({
    root: {
        'color': ({ color }) => theme.palette[color].main,
        'fontSize': `${scaler}rem`,
        '&:hover': {
            color: ({ color }) => theme.palette[color].light,
            cursor: 'pointer'
        }
    }
}))

const Link = ({ color, ...others }) => {
    const linkColor = color || 'default'
    const classes = useStyles({ color: linkColor })
    return (
        <MuiLink target='_blank' rel='noopener' underline='always' classes={classes} {...others} />
    )
}

Link.propTypes = {
    color: PropType.string
}

export default Link
