import React, { useEffect, useRef } from 'react'
import PropType from 'prop-types'
import { Box } from '@material-ui/core'

const Tooltip = ({ ...others }) => {
    const elementRef = useRef(null)
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
    return <Box ref={elementRef} display='inline' {...others} />
}

Tooltip.propTypes = {}

export default Tooltip
