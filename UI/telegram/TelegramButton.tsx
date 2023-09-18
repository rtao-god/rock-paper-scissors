import React, { useState, useEffect, useRef } from 'react'
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
                        dataOnauth={(user: TelegramUser) => console.log(user.hash)}
                        usePic={true}
                        cornerRadius={5000}
                        buttonSize="small"
                        className={styles.telegramLoginButton}
                        style={{ display: "block" }}
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
                console.log(iframe)
            }
        }, 100)
    }, [])

    const handleSuccessfulLogin = (user: TelegramUser) => {
        console.log(user)
    }

    return (
        <div>
            {buttonArr.telegram &&
                <Telegram />
            }
            <div style={{width: "100px", height: "100px", borderRadius: "1009px", background: "red"}}>lol</div>
            {/* <button onClick={() => buttonBool()}> true </button> */}
        </div>
    )
}