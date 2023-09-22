import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import WalletButton from '../UI/wallet/WalletButton'
import playButton from "../pages/screenshots/1920-1680px/play.png"
import TelegramButton from '../UI/telegram/TelegramButton'
import Play from '../UI/play/Play';

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}

interface IBooleanSteps {
    second: boolean;
    third: boolean;
}

interface ButtonsProps {
    setBooleanSteps: Dispatch<SetStateAction<IBooleanSteps>>;
}

const Buttons: React.FC<ButtonsProps> = ({ setBooleanSteps }) => {
    const [buttonArrValue, setButtonArrValue] = useState<IValueForButtons>({ telegram: true, wallet: false, play: false })

    function func() {
        buttonArrValue.wallet && setBooleanSteps({ second: true, third: false })
    }

    useEffect(() => {
        func()
    }, [buttonArrValue])

    return (
        <div>
            {buttonArrValue.telegram &&
                <TelegramButton setButtonArrValue={setButtonArrValue} />
            }

            {buttonArrValue.wallet &&
                <WalletButton setButtonArrValue={setButtonArrValue} />
            }
            {buttonArrValue.play &&
              <Play setBooleanSteps={setBooleanSteps} />
            }
        </div>
    )
}

export default Buttons
