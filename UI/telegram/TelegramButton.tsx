import React, { useState, useEffect, useRef } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import styles from './telegramButton.module.css'

export default function Buttons() {
    // const telegramLoginButtonRef = useRef()

    const [buttonArr, setButtonArr] = useState({ telegram: true, wallet: false })

    const Telegram = () => {
        return (
            <div>
                <a className={styles.aTegTelegramButton} href='#'>
                    <TelegramLoginButton
                        botName="RtaoTestTelegramBot"
                        dataOnauth={(user: TelegramUser) => console.log(user.hash)}
                        usePic={true}
                        cornerRadius={0}
                        buttonSize="small"
                        label="lol"
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