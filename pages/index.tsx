import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import slackeyFontImg from "./screenshots/Slackey-Regular.png"
import buttonImg from "./screenshots/Ellipse.png"
// import TelegramLoginButton from "react-telegram-auth"
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button'

/* const onAuth = ctx => {
  console.log(ctx);
} */

/* const Button = () => {
  return <TelegramLoginButton botName="RtaoTelegramBot" dataOnAuth="{onAuth}" />
} */

const Home: NextPage = () => {
  return (
    <div>
      <meta
        content="Generated by @rainbow-me/create-rainbowkit"
        name="description"
      />

      <div className="App">
        <header className="App-header">
          <img src={slackeyFontImg.src} className="SlackeyFontImg" alt="" />
          <p> Сonnect your Telegram to start the game </p>

          {/*  <button onClick={() => onTelegramAuth()} className="buttonForAuth">
            <img src={buttonImg.src} alt="" />
            <p> Connect <br /> telegram </p>
          </button> */}
          {/* <Button /> */}
          <TelegramLoginButton
            botName="RtaoTelegramBot"
            dataOnauth={(user: TelegramUser) => console.log(user)}
          />
          <main>
            <ConnectButton />
          </main>
        </header>
      </div>

      {/* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="RtaoTelegramBot" data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script> */}
    </div>
  )
  /*  function onTelegramAuth(user) {
     alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')')
   } */
}

export default Home
