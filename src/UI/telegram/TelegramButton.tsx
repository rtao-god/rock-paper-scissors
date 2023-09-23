import React, { Dispatch, SetStateAction } from 'react'
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
    const handleLogin = () => {
        setButtonArrValue({ telegram: false, wallet: true, play: false });
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
        <button onClick={handleLogin} className={styles.telegramLoginButton}>
        </button>
    )
}

export default TelegramButton

/* import React, { useEffect, Dispatch, SetStateAction } from 'react'
import Script from 'next/script';
import styles from './telegramButton.module.css'

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}
interface TelegramButtonProps {
    setButtonArrValue: Dispatch<SetStateAction<IValueForButtons>>;
}
 */
/* const TelegramLogin = () => {
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
            console.log(user); // Here you will receive user data from Telegram
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
                src="https://oauth.telegram.org/"
                data-telegram-login="RtaoTestTelegramBot"
                data-size="large"
                data-radius="10"
                data-auth-url="https://rock-paper-scissors-navy-eta.vercel.app"
                data-request-access="write_post,read_post">
            </Script>
        </div>
    );
}

export default TelegramLogin */