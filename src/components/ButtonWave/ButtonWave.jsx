import React from 'react'

import styles from './ButtonWave.module.css'

function ButtonWave({ text, clickHandler }) {
  return (
    <a href='#' className={styles.wave__btn} onClick={clickHandler} >
        <span className={styles.wave__btn_text}>{text}</span>
        <span className={styles.wave__btn_waves}></span>
    </a>
  )
}

export default ButtonWave