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
    const [buttonArrValue, setButtonArrValue] = useState<IValueForButtons>({ telegram: true, wallet: false, play: false })

    function func() {
        buttonArrValue.telegram ? setBooleanSteps({ first: true, second: true, third: true }) : console.log("telegram no ")
    }
    useEffect(() => {
        func()
        console.log(buttonArrValue)
    }, [buttonArrValue])

    return (
        <div>
            {buttonArrValue.telegram &&
                <TelegramButton setButtonArrValue={setButtonArrValue} />
            }

            {buttonArrValue.wallet &&
                <WalletButton />
            }
            {buttonArrValue.play &&
                <a className="playButton" href="tg://resolve?domain=YetAnotherRoshamBot"> <img src={playButton.src} alt="" /> </a>
            }


            {buttonArrValue.telegram === false &&
                <p>telegram no </p>
            }

            {buttonArrValue.wallet === false &&
                <p>wallet no</p>
            }
            {buttonArrValue.play === false &&
                <p>play no</p>
            }

        </div>
    )
}

export default Buttons
