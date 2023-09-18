import React, { useState } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import styles from './telegramButton.module.css'

export default function Buttons() {

    const [buttonArr, setButtonArr] = useState({ telegram: true, wallet: false })

    const Telegram = () => {
        return <TelegramLoginButton
            botName="RtaoTestTelegramBot"
            dataOnauth={(user: TelegramUser) => console.log(user)}
            className={styles.telegramLoginButton}
        />
    }

    const handleSuccessfulLogin = (user: TelegramUser) => {
        console.log(user)
    }


    /*   function buttonBool() {
        setButtonArr({ telegram: true })
    
      } */

    return (
        <div>
            {buttonArr.telegram &&
                <Telegram />
            }
            {/* <button onClick={() => buttonBool()}> true </button> */}
        </div>
    )
}
