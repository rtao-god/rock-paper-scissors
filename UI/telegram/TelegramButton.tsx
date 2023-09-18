import React, { useState, useEffect, useRef } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import styles from './telegramButton.module.css'
import telegramButton from '../../pages/screenshots/1920-1680px/telegram.png'

export default function Buttons() {
    const telegramLoginButtonRef = useRef()

    const [buttonArr, setButtonArr] = useState({ telegram: true, wallet: false })

    const Telegram = () => {
        return (
            <div>
                <a className={styles.aTegTelegramButton} href='#'>
                    <TelegramLoginButton
                        botName="YetAnotherRoshamBot"
                        dataOnauth={(user: TelegramUser) => console.log(user.hash)}
                        usePic={true}
                        cornerRadius={0}
                        buttonSize="small"
                        className={styles.telegramLoginButton}
                        refs={telegramLoginButtonRef}
                    />
                    {/* <img src={telegramButton.src} alt="" /> */}
                </a>
            </div>
        )
    }

    const handleSuccessfulLogin = (user: TelegramUser) => {
        console.log(user)
    }

    /*   function buttonBool() {
        setButtonArr({ telegram: true })
    
      } */

    useEffect(() => {
        const telegramButton = document.querySelector("iframe")
        console.log(telegramLoginButtonRef.current)
    }, [])

    return (
        <div>
            {buttonArr.telegram &&
                <Telegram />
            }
            {/* <button onClick={() => buttonBool()}> true </button> */}
        </div>
    )
}