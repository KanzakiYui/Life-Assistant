import React, { useState, useEffect, useRef } from 'react'
import PropType from 'prop-types'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { scaler } from 'mui/theme/constants'

const arrowHalfBaseSize = 10
const arrowHalfScaledSize = arrowHalfBaseSize * scaler
const arrowOffset = arrowHalfScaledSize * 1.5

const arrowStylesBasic = {
    // eslint-disable-next-line quotes
    content: "''",
    position: 'absolute',
    width: 0,
    height: 0
}

const borderNone = `${arrowHalfScaledSize}px solid transparent`

const useStyles = makeStyles(theme => ({
    top: {
        'transform': 'translateY(-100%)',
        'top': -arrowOffset,
        '&::before': {
            ...arrowStylesBasic,
            transform: 'translateX(-50%)',
            left: '50%',
            bottom: -arrowHalfScaledSize,
            borderLeft: borderNone,
            borderRight: borderNone,
            borderTop: `${arrowHalfScaledSize}px solid ${theme.palette.default.main}`
        }
    },
    bottom: {
        'transform': `translateY(${arrowOffset}px)`,
        '&::before': {
            ...arrowStylesBasic,
            transform: 'translateX(-50%)',
            left: '50%',
            top: -arrowHalfScaledSize,
            borderLeft: borderNone,
            borderRight: borderNone,
            borderBottom: `${arrowHalfScaledSize}px solid ${theme.palette.default.main}`
        }
    },
    left: {
        'transform': 'translateX(-100%)',
        'left': -arrowOffset,
        '&::before': {
            ...arrowStylesBasic,
            transform: 'translateY(-50%)',
            top: '50%',
            right: -arrowHalfScaledSize,
            borderTop: borderNone,
            borderBottom: borderNone,
            borderLeft: `${arrowHalfScaledSize}px solid ${theme.palette.default.main}`
        }
    },
    right: {
        'transform': 'translateX(100%)',
        'right': -arrowOffset,
        '&::before': {
            ...arrowStylesBasic,
            transform: 'translateY(-50%)',
            top: '50%',
            left: -arrowHalfScaledSize,
            borderTop: borderNone,
            borderBottom: borderNone,
            borderRight: `${arrowHalfScaledSize}px solid ${theme.palette.default.main}`
        }
    }
}))

const Tooltip = ({ pos = 'bottom', title, width, children, ...others }) => {
    const [ isVisible, setVisibility ] = useState(false)
    const elementRef = useRef(null)
    const tooltipRef = useRef(null)
    const classes = useStyles()
    const tooltipElement =
        <Box
            className={classes[pos]}
            ref={tooltipRef}
            position='absolute'
            zIndex='tooltip'
            px={1}
            py={0.5}
            bgcolor='default.main'
            color='common.black'
            borderRadius='borderRadius'
            minWidth={1}
            width={width || 'auto'}
        >
            {title}
        </Box>


    let targetElement = null

    const onMouseEnter = () => {
        setVisibility(true)
        const contentRect = targetElement.getBoundingClientRect()
        const tooltipEle = tooltipRef.current
        const tooltipRec = tooltipEle.getBoundingClientRect()
        if (pos === 'bottom' || pos === 'top') {
            const difference = (contentRect.width - tooltipRec.width) / 2
            if (difference) tooltipEle.style.left = `${difference}px`
        } else {
            const offset =
                (contentRect.height + tooltipRec.height) / 2 - arrowOffset
            tooltipEle.style.top = `-${offset}px`
        }
    }
    const onMouseLeave = () => setVisibility(false)

    useEffect(() => {
        targetElement = elementRef.current.querySelector('*')
        targetElement.addEventListener('mouseenter', onMouseEnter)
        targetElement.addEventListener('mouseleave', onMouseLeave)
        return () => {
            targetElement.removeEventListener('mouseenter', onMouseEnter)
            targetElement.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])
    return (
        <Box
            ref={elementRef}
            display='inline'
            position='relative'
            {...others}
            overflow='visible'
        >
            {children}
            {isVisible && tooltipElement}
        </Box>
    )
}

Tooltip.propTypes = {
    pos: PropType.string,
    title: PropType.oneOfType([
        PropType.string,
        PropType.element,
        PropType.node
    ]),
    children: PropType.any,
    width: PropType.number
}

export default Tooltip
