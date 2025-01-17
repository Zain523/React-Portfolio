import React from 'react'

const Button = () => {

    const linkStyle = {
        backgroundColor: '#FC6736',
        color: 'white',
        border: 'none',
        padding: '10px 14px',
        borderRadius: '7px',
        fontSize: 'medium',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        transition: 'all 0.1s ease-in',
        cursor: 'pointer',
        textDecoration: 'none'
    }

    const iconStyle = {
        color: 'white',
        width: '10px',
        height: '10px',
        marginBottom: '3px'
    }
    return (
        <a href='#Contact' style={linkStyle}>
            <i style={iconStyle}
                className="fa fa-envelope-o"
                aria-hidden="true"></i>
            Hire Me
        </a>
    )
}

export default Button
