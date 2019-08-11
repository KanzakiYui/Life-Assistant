import React, { useEffect, useRef } from 'react'
import PropType from 'prop-types'
import { Box } from '@material-ui/core'

const Tooltip = ({ pos, title, children, ...others }) => {
    const elementRef = useRef(null)
    const tooltipRef = useRef(null)
    const tooltipElement =
        <Box
            ref={tooltipRef}
            position='absolute'
            zIndex='tooltip'
            px={1}
            py={0.5}
            bgcolor='default.main'
            color='common.black'
            borderRadius='borderRadius'
            width={200}
        >
            {title}
        </Box>

    const onMouseMove = event => {
        const x = event.clientX
        const y = event.clientY
        console.log('x', x, 'y', y)
    }
    useEffect(() => {
        const childElement = elementRef.current.querySelector('*')
        childElement.addEventListener('mousemove', onMouseMove)
        return () => childElement.removeEventListener('mousemove', onMouseMove)
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
            {tooltipElement}
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
    children: PropType.any
}

export default Tooltip
