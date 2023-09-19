import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import WalletButton from '../UI/wallet/WalletButton'
import playButton from "../pages/screenshots/1920-1680px/play.png"
import TelegramButton from '../UI/telegram/TelegramButton'

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}

interface IBooleanSteps {
    first: boolean;
    second: boolean;
    third: boolean;
}

interface Buttons {
    setBooleanSteps: Dispatch<SetStateAction<IBooleanSteps>>;
}

const Buttons: React.FC<Buttons> = ({ setBooleanSteps }) => {
    const [buttonArrValue, setButtonArrValue] = useState<IValueForButtons>({ telegram: false, wallet: false, play: false })

    function func() {
        buttonArrValue.telegram ? setBooleanSteps({ first: true, second: true, third: false }) : setBooleanSteps({ first: true, second: false, third: false })
    }
    useEffect(() => {
        func()
        console.log(buttonArrValue, buttonArrValue.telegram)
    }, [buttonArrValue])

    return (
        <div>
            {buttonArrValue.wallet !== true &&
                <TelegramButton setButtonArrValue={setButtonArrValue} />
            }

            {buttonArrValue.wallet &&
                <WalletButton />
            }
            {buttonArrValue.play &&
                <a className="playButton" href="tg://resolve?domain=YetAnotherRoshamBot"> <img src={playButton.src} alt="" /> </a>
            }
        </div>
    )
}

export default Buttons
