import React from 'react'

const SocialAccounts = (props) => {

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'baseline',
        width: 'fit-content'
    }
    const style = {
        fontSize: '18px',
    }
    const ulStyle = {
        display: 'flex',
        gap: '15px'
    }

    return (
        <div style={wrapperStyle} >
            <span style={style}>
                Follow Me:
            </span>
            <ul className='accounts' style={ulStyle}>
                <i style={props ? props.customStyle : style} className="fab fa-github" aria-hidden='true'></i>
                <i style={props ? props.customStyle : style} className="fab fa-facebook" aria-hidden='true'></i>
                <i style={props ? props.customStyle : style} className="fab fa-linkedin" aria-hidden='true'></i>
                <i style={props ? props.customStyle : style} className="fab fa-twitter" aria-hidden='true'></i>
            </ul>
        </div>
    )
}

export default SocialAccounts
