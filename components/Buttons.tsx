import React, { useState, useEffect } from 'react'
import WalletButton from '../UI/wallet/WalletButton'
import playButton from "../pages/screenshots/1920-1680px/play.png"
import TelegramButton from '../UI/telegram/TelegramButton'

interface IValueForButtons {
    telegram: boolean;
    wallet: boolean;
    play: boolean;
}

export default function Buttons() {
    const [buttonArrValue, setButtonArrValue] = useState<IValueForButtons>({ telegram: true, wallet: true, play: true })

    console.log(buttonArrValue)

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


            {buttonArrValue.telegram == false &&
                <p>telegram no </p>
            }

            {buttonArrValue.wallet == false &&
                <p>wallet no</p>
            }
            {buttonArrValue.play == false &&
                <p>play no</p>
            }

        </div>
    )
}
