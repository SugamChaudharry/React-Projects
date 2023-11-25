import React from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
} , ref) {
    return <h1>Test</h1>
} )  

export default Input