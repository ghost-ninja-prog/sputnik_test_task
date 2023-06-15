import React from 'react'

import Button from '../Button/Button.jsx'

import styles from './Modal.module.css'

function Modal({isOpen, setIsOpen, children}) {

  

  return (
    <div 
      className={isOpen ? [styles.modal, styles.modal__active].join(' ') : styles.modal} 
      onClick={() => setIsOpen(false)} 
    >
      <div className={isOpen ? [styles.modal__content, styles.modal__content_active].join(' ') : styles.modal__content} onClick={event => event.stopPropagation()}>

        <h2 className={styles.modal__title}>
          Web 
          <span className={[styles.modal__title, styles.modal__title_thin].join(' ')}>
            App
          </span>
        </h2>
        <button className={styles.modal__close_btn} onClick={() => setIsOpen(false)} ></button>

          {children}
        
        <a
          href='mailto:mail_to@inbox.ru'
          className={styles.modal__link_email}
        >
          &#128386; 
          Написать в поддержку
        </a>

      </div>
    </div>
  )
}

export default Modal