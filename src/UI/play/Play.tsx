import React, { Dispatch, SetStateAction, useEffect } from 'react'
import styles from './play.module.css'

interface IBooleanSteps {
    second: boolean;
    third: boolean;
}

interface PlayButtonProps {
    setBooleanSteps: Dispatch<SetStateAction<IBooleanSteps>>;
}

const Play: React.FC<PlayButtonProps> = ({ setBooleanSteps }) => {
    useEffect(() => {
        setBooleanSteps({ second: true, third: true })
    }, [])

    return (
        <a href="tg://resolve?domain=YetAnotherRoshamBot">
            <div className={styles.playButton}>
            </div>
        </a>
    );
}

export default Play 