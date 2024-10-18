import React from 'react'
import styles from '../Stylesheet.module.css';

function Stylesheet({primary}) {
    const primaryClass = primary ? 'header1':'';
    const paraStyle = {fontSize: '2rem', color: 'red', fontStyle: "italic"}
    return (
    <div>
        <h1 className={`${primaryClass} font-xl`}>React Component Styling with External CSS</h1>
        <p className='para font-l'>This style is applied by passing multiple class names.</p>

        <p style={paraStyle}>This is the second paragraph styled using the inline styling for the component.</p>
        <p className={styles.error}> There was an error in the component. styled by css module error class</p>
    </div>
    )
}

export default Stylesheet