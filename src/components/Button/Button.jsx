import React from 'react'

import styles from './Button.module.css'

function Button({ text, clickHandler, type }) {
  return (
    <button 
      className={styles.btn}
      onClick={clickHandler}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button