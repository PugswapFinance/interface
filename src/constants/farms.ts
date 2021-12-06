import { ChainId } from '../sdk'

export type TokenInfo = {
  id: string
  name: string
  symbol: string
  decimals?: number
}

type PairInfo = {
  id: number
  token0: TokenInfo
  token1?: TokenInfo
  name?: string
  symbol?: string
}

type AddressMap = {
  [chainId: number]: {
    [address: string]: PairInfo
  }
}

export const POOLS: AddressMap = {
  [ChainId.CRONOS_TESTNET]: {
    '0x58B3751EEFF46Cd7e5a765f16a42C5e63F6BB344': {
      id: 0,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0x0636617c67CB84D49C1417F641629Db7d8c065BA',
        name: 'USDC Test Coin',
        symbol: 'USDCt',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x6a09c284e56771633255B8719281b9Fb5bF7Ce18': {
      id: 1,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0xD7C5BB823bB5E4D6581605B057c92486D1f5CE6a',
        name: 'Shiba Inu Test Coin',
        symbol: 'SHIBt',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x382308715962270BA8B9C1beB143891C1Fb7717a': {
      id: 2,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
        name: 'Wrapped CRO',
        symbol: 'WCRO',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x810DC08096E28C1306818A71a196F4E17d8D9cB4': {
      id: 3,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
    },
  },
}
