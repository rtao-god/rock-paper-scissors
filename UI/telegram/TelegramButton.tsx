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
                        dataOnauth={(user: TelegramUser) => user ? console.log("ttt") : console.log("no")}
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
            if (iframe) {
                iframe.removeAttribute('style')
                iframe.setAttribute("width", "200px")
                iframe.setAttribute("height", "200px")
            }
        }, 1000)
    }, [])

    const handleSuccessfulLogin = (user: TelegramUser) => {
        console.log(user)
        user ? console.log("yes") : console.log("no")
    }

    return (
        <div>
            {buttonArr.telegram &&
                <Telegram />
            }
            <button onClick={() => handleSuccessfulLogin}> true </button>
        </div>
    )
}