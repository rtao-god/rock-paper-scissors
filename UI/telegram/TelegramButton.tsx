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





import React, { useEffect, Dispatch, SetStateAction } from 'react'
import TelegramRedirectHandler from './TelegramRedirectHandler'
import styles from './telegramButton.module.css'
import imgButtonTelegram from '../../pages/screenshots/1920-1680px/telegram.png'

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}
interface TelegramButtonProps {
    setButtonArrValue: Dispatch<SetStateAction<IValueForButtons>>;
}

const TelegramButton: React.FC<TelegramButtonProps> = ({ setButtonArrValue }) => {
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch("https://oauth.telegram.org/auth?bot_id=6626043922&origin=https://rock-paper-scissors-navy-eta.vercel.app/&request_access=write");
                const data = await response.json();

                if (data.isAuthenticated) {
                    // User is authenticated. Update the state or do any other tasks.
                    setButtonArrValue({ telegram: false, wallet: true, play: false });
                }
            } catch (error) {
                console.error("Failed to check authentication status:", error);
            }
        };

        const interval = setInterval(checkAuthStatus, 5000); // Poll every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    const handleLogin = () => {
        const width = 400;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(
            'https://oauth.telegram.org/auth?bot_id=6626043922&origin=https://rock-paper-scissors-navy-eta.vercel.app/&request_access=write',
            'TelegramAuth',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    };

    return (
        <div>
            <button onClick={handleLogin} className={styles.telegramLoginButton}>
            </button>
            
                <TelegramRedirectHandler />
            
        </div>
    );
}

export default TelegramButton