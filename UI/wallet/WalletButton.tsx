import React, { Dispatch, SetStateAction } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import styles from "./walletButton.module.css"
import walletImg from '../../pages/screenshots/1920-1680px/wallet.png'
import { createAuthenticationAdapter } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';

interface IValueForButtons {
  telegram: boolean;
  wallet: boolean;
  play: boolean;
}

interface WalletButtonProps {
  setButtonArrValue: Dispatch<SetStateAction<IValueForButtons>>;
}

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce');
    return await response.text();
  },

  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    });
  },

  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },

  verify: async ({ message, signature }) => {

    const verifyRes = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature }),
    });
    console.log(authenticationAdapter);

    return Boolean(verifyRes.ok);
  },


  signOut: async () => {
    console.log("lolol")

    await fetch('/api/logout');
  },
});



const WalletButton: React.FC<WalletButtonProps> = ({ setButtonArrValue }) => {

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        console.log()

        // if (account?.balanceSymbol !== "") setButtonArrValue({ telegram: false, wallet: false, play: true })

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button className={styles.walletButton} onClick={openConnectModal} type="button">
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              function furtherFunc() {
                setButtonArrValue({ telegram: false, wallet: false, play: true })
              }

              return (
                <div className={styles.blockDataAndButton}>
                  <button onClick={furtherFunc} className={styles.walletButton} type="button">
                  </button>

                  <div style={{ display: 'flex', gap: 12 }} className={styles.walletButtonData}>
                    <button
                      onClick={openChainModal}
                      style={{ display: 'flex', alignItems: 'center' }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>
                    <button onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  )
}

export default WalletButton