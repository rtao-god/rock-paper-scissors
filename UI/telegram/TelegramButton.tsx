import React, { useState, useEffect } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import styles from './telegramButton.module.css'

export default function Buttons() {
    const [buttonArr, setButtonArr] = useState({ telegram: true, wallet: false })

    const Telegram = () => {
        return (
            <div>
                <a className={styles.aTegTelegramButton} href='#'>
                    <TelegramLoginButton
                        botName="RtaoTestTelegramBot"
                        dataOnauth={(user: TelegramUser) => console.log(user)}
                        buttonSize="small"
                        className={styles.telegramLoginButton}
                        style={{ display: "none" }}
                    />
                </a>
            </div>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            const iframe: HTMLElement | null = document.querySelector("iframe")
            const buttonTelegram: HTMLElement | null = document.querySelector(".btn")
            if (iframe) {
                iframe.removeAttribute('style')
                iframe.setAttribute("width", "200px")
                iframe.setAttribute("height", "200px")
            }
            if (buttonTelegram) {
                buttonTelegram.setAttribute("fontSize", "200px")
            }
        }, 1000)
    }, [])

    const handleSuccessfulLogin = (user: TelegramUser) => {
        console.log(user)
    }

    return (
        <div>
            {buttonArr.telegram &&
                <Telegram />
            }
            {/* <button onClick={() => buttonBool()}> true </button> */}
        </div>
    )
}