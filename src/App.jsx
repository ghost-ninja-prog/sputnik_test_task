import React, { useState } from 'react'
import Modal from './components/Modal/Modal.jsx'
import Button from './components/Button/Button.jsx'
import ButtonWave from './components/ButtonWave/ButtonWave.jsx'

export default function App() {

    const [autorizationIsOpen, setAutorizationIsOpen] = useState(false)
    const [registerIsOpen, setRegisterIsOpen] = useState(false)
    const [iForgetIsOpen, setIForgetIsOpen] = useState(false)


    const clickAutorizationBtn = () => {
        setAutorizationIsOpen(true)
    }

    const clickIForgetLink = () => {
        setAutorizationIsOpen(false)
        setIForgetIsOpen(true)
    }

    const clickRegisterLink = () => {
        setAutorizationIsOpen(false)
        setRegisterIsOpen(true)
    }

    const submitAuthHandler = (event, text) => {
        event.preventDefault()
        alert(text)
    }

    return (
        <div className='center-XY wrapper'>
            <ButtonWave text={'авторизация'} clickHandler={clickAutorizationBtn} />

            <Modal isOpen={autorizationIsOpen} setIsOpen={setAutorizationIsOpen} submitHandler={submitAuthHandler} >
                <form className='modal__form' onSubmit={(event) => submitAuthHandler(event, 'Авторизация прошла успешно')}>
                    <h3 className='modal__form_subtitle'>
                        Войдите в свой профиль
                    </h3>
                    <div className='modal__form_inputItem'>
                        <label for='login'>Логин</label>
                        <input
                            type='email'
                            id='login'
                            placeholder='konst.konst.konst@yandex.ru'
                            required
                        />
                    </div>
                    <div className='modal__form_inputItem'>
                        <label>Пароль</label>
                        <input
                            type='password'
                            placeholder='konst.konst.konst@yandex.ru'
                            required
                        />
                    </div>
                    <Button type='submit' text='войти' />
                </form>
                <div className='modal__links'>
                    <a className='modal__link' onClick={clickIForgetLink} >Я забыл пароль</a>
                    <a className='modal__link' onClick={clickRegisterLink} >Регистрация</a>
                </div>
            </Modal>

            <Modal isOpen={iForgetIsOpen} setIsOpen={setIForgetIsOpen} >
                <form className='modal__form' onSubmit={(event) => submitAuthHandler(event, 'Мы вышлем ваш пароль на указанную почту')}>
                    <h3 className='modal__form_subtitle'>
                        Введите свою почту
                    </h3>
                    <div className='modal__form_inputItem'>
                        <label for='login'>Почта</label>
                        <input
                            type='email'
                            id='login'
                            placeholder='konst.konst.konst@yandex.ru'
                            required
                        />
                    </div>
                    <Button type='submit' text='отправить' />
                </form>
            </Modal>

            <Modal isOpen={registerIsOpen} setIsOpen={setRegisterIsOpen}>
                <form className='modal__form' onSubmit={(event) => submitAuthHandler(event, 'Регистрация прошла успешно')}>
                    <h3 className='modal__form_subtitle'>
                        Введите почту и пароль для регистрации
                    </h3>
                    <div className='modal__form_inputItem'>
                        <label for='login'>Почта</label>
                        <input
                            type='email'
                            id='login'
                            placeholder='konst.konst.konst@yandex.ru'
                            required
                        />
                    </div>
                    <div className='modal__form_inputItem'>
                        <label>Пароль</label>
                        <input
                            type='password'
                            placeholder='konst.konst.konst@yandex.ru'
                            required
                        />
                    </div>
                    <Button type='submit' text='зарегистрироваться' />
                </form>
            </Modal>
        </div>
    )
}