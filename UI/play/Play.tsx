import React, { Dispatch, SetStateAction } from 'react'
import styles from './play.module.css'

interface IBooleanSteps {
    second: boolean;
    third: boolean;
}

interface PlayButtonProps {
    setBooleanSteps: Dispatch<SetStateAction<IBooleanSteps>>;
}

const Play: React.FC<PlayButtonProps> = ({ setBooleanSteps }) => {
    return (
        <a href="tg://resolve?domain=YetAnotherRoshamBot">
            <div onClick={() => setBooleanSteps({ second: true, third: true })} className={styles.playButton}>
            </div>
        </a>
    );
}

export default Play 