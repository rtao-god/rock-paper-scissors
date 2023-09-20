import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'
import '../../styles/globals.css'
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
            <TelegramLoginButton
                botName="RtaoTestTelegramBot"
                dataOnauth={(user: TelegramUser) => user && setButtonArrValue({ telegram: false, wallet: true, play: false })}
                buttonSize="small"
                className={styles.telegramLoginButton}
            />
        )
    }

    useEffect(() => {
        setTimeout(() => {
            const iframe: HTMLElement | null = document.querySelector("iframe")
            if (iframe) {
                iframe.removeAttribute('style')
                iframe.setAttribute("width", "170px")
                iframe.setAttribute("height", "170px")
            }
        }, 1000)
    }, [])

    return (
        <Telegram />
    )
}

export default TelegramButton