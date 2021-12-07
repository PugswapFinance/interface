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
    '0x195bd6e941064cf270B443D780fecfBAd49315C2': {
      id: 0,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a',
        name: 'Wrapped CRO',
        symbol: 'WCRO',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x8FFA8517f8d2d4958b8f7a34ACF6CAe124baeAc7': {
      id: 1,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0x76D3Ae5Ef3Edc8F7d946d7E47be3DC22bE4D5754',
        name: 'USDC Test Coin',
        symbol: 'USDCt',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x17f21c3BEe0c84357A6C5a2Bd8F85Ea226801217': {
      id: 2,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
      token1: {
        id: '0x691258797E8778f4237C3A6B09484eA1c844314e',
        name: 'Shiba Inu Test Coin',
        symbol: 'SHIBt',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x7cDA4d9F5C8e677fD51aAccDc6d342984C3b66c4': {
      id: 3,
      token0: {
        id: '0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a',
        name: 'Wrapped CRO',
        symbol: 'WCRO',
        decimals: 18,
      },
      token1: {
        id: '0x76D3Ae5Ef3Edc8F7d946d7E47be3DC22bE4D5754',
        name: 'USDC Test Coin',
        symbol: 'USDCt',
        decimals: 18,
      },
      name: 'Silver LP',
      symbol: 'SLP',
    },
    '0x810DC08096E28C1306818A71a196F4E17d8D9cB4': {
      id: 4,
      token0: {
        id: '0x810DC08096E28C1306818A71a196F4E17d8D9cB4',
        name: 'Silver Token',
        symbol: 'SILVER',
        decimals: 18,
      },
    },
  },
}
