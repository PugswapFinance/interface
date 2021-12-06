import { ChainId } from '../sdk'

type AddressMap = { [chainId: number]: string }

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.ROPSTEN]: '',
  [ChainId.BSC]: '',
  [ChainId.MOONRIVER]: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC',
  [ChainId.MATIC_TESTNET]: '0x3d9f3187C98032579eaCd4AaB52997db95f91407', // Changed this
  [ChainId.CRONOS_TESTNET]: '0x5F612DA005897AAAd1D6190832250a6F41Dc7eA1', // Changed this
}

export const LOCKER_ADDRESS: AddressMap = {
  [ChainId.ROPSTEN]: '',
  [ChainId.BSC]: '',
  [ChainId.MOONRIVER]: '0xA9Ead5d7C9D0B59A2900824A125F3913009fD638',
  [ChainId.MATIC_TESTNET]: '0x8140F757b0F9bA25EFEf2098dF162CF0116e731a', // Changed this
  [ChainId.CRONOS_TESTNET]: '0x5afb450C31941d4340f30286b7D4b84661527104', // Changed this
}

export const SOLAR_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.ROPSTEN]: '',
  [ChainId.BSC]: '',
  [ChainId.MOONRIVER]: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
  [ChainId.MATIC_TESTNET]: '0x72502B004817aAf94937b580EE65b2DFED2c7cd4', // Changed this
  [ChainId.CRONOS_TESTNET]: '0x786E8C2879E0D07F2F656601522D21959077e44d', // Changed this
}

export const SOLAR_VAULT_ADDRESS: AddressMap = {
  [ChainId.MOONRIVER]: '0x7e6E03822D0077F3C417D33caeAc900Fc2645679',
  [ChainId.MATIC_TESTNET]: '0x72502B004817aAf94937b580EE65b2DFED2c7cd4', // Does not exist, need to check
  [ChainId.CRONOS_TESTNET]: '0x5afb450C31941d4340f30286b7D4b84661527104', // Does not exist, need to check
}

export const SOLAR_MOVR_PAIR: AddressMap = {
  [ChainId.ROPSTEN]: '',
  [ChainId.BSC]: '',
  [ChainId.MOONRIVER]: '0x7eDA899b3522683636746a2f3a7814e6fFca75e1',
  [ChainId.MATIC_TESTNET]: '0xd4f3a200bbd8d105faed6e8ed995f8a12ad4e276', // Changed this
  [ChainId.CRONOS_TESTNET]: '0x195bd6e941064cf270B443D780fecfBAd49315C2', // Changed this
}

export const BNB_USD_PAIR: AddressMap = {
  [ChainId.ROPSTEN]: '',
  [ChainId.BSC]: '',
  [ChainId.MOONRIVER]: '',
}

export const ARCHER_ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x9917C083FF9FbD29Df1367FBF7F2388A9a202431',
}

export const MINICHEF_ADDRESS: AddressMap = {
  [ChainId.MATIC]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.XDAI]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
}

export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
  [ChainId.ROPSTEN]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
  [ChainId.ROPSTEN]: '0x84d1f7202e0e7dac211617017ca72a2cb5e2b955',
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ROPSTEN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.GÖRLI]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.KOVAN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ARBITRUM]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [ChainId.ARBITRUM_TESTNET]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [ChainId.CELO]: '0x9aac9048fC8139667D6a2597B902865bfdc225d3',
  [ChainId.FANTOM]: '0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.MATIC_TESTNET]: '0x4707E34f2A2F4fD9D07fC58b9EcBfbB385055474', // Changed this
  [ChainId.XDAI]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.BSC_TESTNET]: '0xA6949B8FBa9DF546b9c66F98CFCa960A96E3b68e',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.MOONRIVER]: '0x43D002a2B468F048028Ea9C2D3eD4705a94e68Ae',
  [ChainId.AVALANCHE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CRONOS_TESTNET]: '0x09Ea89B88eD9De6bC40565ded88e25ddcA4909eb', // Changed this
}

export const WETH9: AddressMap = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '0x9c3c9283d3e44854697cd22d3faa240cfb032889', // Changed this
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.MOONRIVER]: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CRONOS_TESTNET]: '0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a', // Changed this
  [ChainId.CRONOS]: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', // Changed this
}

export const WNATIVE: AddressMap = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.CELO]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '0x9c3c9283d3e44854697cd22d3faa240cfb032889', // Changed this
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.MOONRIVER]: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.CRONOS_TESTNET]: '0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a', // Changed this
  [ChainId.CRONOS]: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', // Changed this
}
