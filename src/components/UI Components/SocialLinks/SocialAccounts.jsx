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
                <a href="https://github.com/Zain523" target='_blank' rel="noreferrer">
                    <i style={props ? props.customStyle : style} className="fab fa-github" aria-hidden='true'></i>
                </a>
                {/* <a href="" target='_blank'>
                    <i style={props ? props.customStyle : style} className="fab fa-facebook" aria-hidden='true'></i>

                </a> */}
                <a href="https://www.linkedin.com/in/zain-ul-abdin-676a12277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer">
                    <i style={props ? props.customStyle : style} className="fab fa-linkedin" aria-hidden='true'></i>

                </a>
                {/* <a href="" target='_blank'>
                    <i style={props ? props.customStyle : style} className="fab fa-twitter" aria-hidden='true'></i>

                </a> */}
            </ul>
        </div>
    )
}

export default SocialAccounts
