import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import styles from './telegramButton.module.css'
interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}
interface TelegramButtonProps {
    setButtonArrValue: Dispatch<SetStateAction<IValueForButtons>>;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ setButtonArrValue }) => {
    const Telegram = () => {
        return (
            <div>
                <a className={styles.aTegTelegramButton} href='#'>
                    <TelegramLoginButton
                        botName="RtaoTestTelegramBot"
                        dataOnauth={(user: TelegramUser) => user ? setButtonArrValue({ telegram: false, wallet: true, play: false }) : setButtonArrValue({ telegram: true, wallet: false, play: false })}
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

    return (
        <Telegram />
    )
}

export default TelegramButton