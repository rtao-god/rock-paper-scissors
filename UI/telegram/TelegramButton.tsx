/* import React, { useEffect, Dispatch, SetStateAction } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'

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
            const iframe = document.getElementById("telegram-login-RtaoTestTelegramBot")
            if (iframe) {

                const iframeTag = document.querySelector<HTMLIFrameElement>('#telegram-login-RtaoTestTelegramBot') || null

                if (iframeTag && iframeTag.contentWindow) {
                    const elmnt = iframeTag.contentWindow.document.getElementsByTagName("body")[0]
                    elmnt.style.height = "800px"
                    elmnt.style.width = "800px"
                    elmnt.style.backgroundColor = "red"
                    console.log(iframeTag, elmnt)
                }
            }
        }, 1000)
    }, [])

    return (
        <Telegram />
    )
}

export default TelegramButton */





/* import React, { useEffect, Dispatch, SetStateAction } from 'react'
import TelegramRedirectHandler from './TelegramRedirectHandler'
import styles from './telegramButton.module.css'
import { useRouter } from 'next/router';

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}
interface TelegramButtonProps {
    setButtonArrValue: Dispatch<SetStateAction<IValueForButtons>>;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ setButtonArrValue }) => {
    const handleLogin = () => {
        // setButtonArrValue({ telegram: false, wallet: true, play: false });
        const width = 400;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(
            `https://oauth.telegram.org/auth?bot_id=6626043922&origin=https://rock-paper-scissors-navy-eta.vercel.app/&request_access=write`,
            'TelegramAuth',
            `toolbar=no, location=no, directories=no, status=nobbbbbbbbbb, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    };

    return (
        <div>
            <div>
               
                <div id="telegram_login"
                    data-size="large"
                    data-radius="10"
                    data-auth-url="https://rock-paper-scissors-navy-eta.vercel.app/"
                    data-request-access="write_post,read_post">lol
                </div>
            </div>
            
            <script async
                src="https://telegram.org/js/telegram-widget.js?7"
                data-telegram-login="RtaoTestTelegramBot"
                data-size="large"
                data-radius="10"
                data-auth-url="https://rock-paper-scissors-navy-eta.vercel.app/"
                data-request-access="write_post,read_post">
            </script>
        </div>
    );
}

export default TelegramButton */

import Script from 'next/script';
import { useEffect } from 'react';
import styles from './telegramButton.module.css'

const TelegramLogin = () => {
    const handleLogin = () => {
        // setButtonArrValue({ telegram: false, wallet: true, play: false });
        const width = 400;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(
            `https://oauth.telegram.org/auth?bot_id=6626043922&origin=https://rock-paper-scissors-navy-eta.vercel.app/&request_access=write`,
            'TelegramAuth',
            `toolbar=no, location=no, directories=no, status=nobbbbbbbbbb, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    };

    useEffect(() => {
        // This function will handle the login event
        const handleTelegramResponse = (user: any) => {
            console.log(user, "lol"); // Here you will receive user data from Telegram
        };

        // Adding event listener for telegram login
        window.addEventListener('telegram_login', handleTelegramResponse, false);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('telegram_login', handleTelegramResponse, false);
        };
    }, []);

    return (
        <div>
            <div id="telegram_login"
                className={styles.telegramLoginButton}
                onClick={handleLogin}
                data-size="large"
                data-radius="10"
                data-auth-url="https://rock-paper-scissors-navy-eta.vercel.app"
                data-request-access="write_post,read_post">
            </div>

            <button onClick={handleLogin} className={styles.telegramLoginButton}>
            </button>

            <Script
                strategy="beforeInteractive"
                src="https://telegram.org/js/telegram-widget.js?7"
                data-telegram-login="RtaoTestTelegramBot"
                data-size="large"
                data-radius="10"
                data-auth-url="https://rock-paper-scissors-navy-eta.vercel.app"
                data-request-access="write_post,read_post">
            </Script>
        </div>
    );
}

export default TelegramLogin