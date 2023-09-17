import React, { useState } from 'react'
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'

export default function Buttons() {

  const [buttonArr, setButtonArr] = useState({ telegram: false, wallet: false })

  const Telegram = () => {
    return <TelegramLoginButton
      botName="RtaoTestTelegramBot"
      dataOnauth={(user: TelegramUser) => console.log(user.auth_date)}
    />
  }

  function buttonBool() {
    setButtonArr({ telegram: true })

  }

  return (
    <div>
      {buttonArr.telegram &&
        <Telegram />
      }
      <button onClick={() => buttonBool()}> true </button>
    </div>
  )
}
