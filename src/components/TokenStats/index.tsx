import React, { useContext } from 'react'
import Image from 'next/image'
import { formatNumberScale } from '../../functions/format'
import { useTokenStatsModalToggle } from '../../state/application/hooks'
import { useWeb3React } from '@web3-react/core'
import TokenStatsModal from '../../modals/TokenStatsModal'
import { ChainId } from '../../sdk'
import PriceContext from '../../contexts/priceContext'

const supportedTokens = {
  MOVR: {
    name: 'Crypto.com Coin',
    symbol: 'CRO',
    icon: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/cryptoorg/info/logo.png',
  },
  SILVER: {
    name: 'SilverSwap Token',
    symbol: 'SILVER', //<-- This changes both the text and the backend connection to pricing
    icon: '/images/tokens/silver.png',
    address: {
      [ChainId.CRONOS_TESTNET]: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
      //Can include other chains
    }
  },
}

interface TokenStatsProps {
  token: string
}

function TokenStatusInner({ token }) {
  const { account } = useWeb3React()

  const toggleModal = useTokenStatsModalToggle(token)

  const priceData = useContext(PriceContext)

  return (
    <div className="flex pl-2" onClick={toggleModal}>
      {token.icon && (
        <Image
          src={token['icon']}
          alt={token['symbol']}
          width="24px"
          height="24px"
          objectFit="contain"
          className="rounded-md"
        />
      )}
      <div className="px-3 py-2 text-primary text-bold">
        {formatNumberScale(priceData?.data?.[token.symbol.toLowerCase()], true, 2)}
      </div>
    </div>
  )
}

export default function TokenStats({ token, ...rest }: TokenStatsProps) {
  const selectedToken = supportedTokens[token]

  return (
    <>
      <TokenStatusInner token={selectedToken} />
      <TokenStatsModal token={selectedToken} />
    </>
  )
}
