const Web3 = require('web3')
const { default: axios } = require('axios')
import IUniswapV2PairABI from '../../constants/abis/uniswap-v2-pair.json'
const NETWORK_URL = 'https://cronos-testnet-3.crypto.org:8545'
const web3 = new Web3(NETWORK_URL)

export default async function handler(req, res) {
  let croUSDCContract = new web3.eth.Contract(IUniswapV2PairABI, '0x7cDA4d9F5C8e677fD51aAccDc6d342984C3b66c4') // This is like MaticUSDtest pair contract
  const croUSDCReserves = await croUSDCContract.methods.getReserves().call()

  const croUSDCPrice = (Number(croUSDCReserves.reserve0) / Number(croUSDCReserves.reserve1) ) // * 1e12 <--TO ONLY INCLUDE IF IT IS REAL USDC with 6 decimals

  let silverCroContract = new web3.eth.Contract(IUniswapV2PairABI, '0x195bd6e941064cf270B443D780fecfBAd49315C2') // This is the VAR-MATIC pair contract
  const silverCroReserves = await silverCroContract.methods.getReserves().call()

  const silverCroPrice = Number(silverCroReserves.reserve1) / Number(silverCroReserves.reserve0)

  //let ribMovrContract = new web3.eth.Contract(IUniswapV2PairABI, '0x0acDB54E610dAbC82b8FA454b21AD425ae460DF9')  // Not yet changed, expect error
  //const ribMovrReserves = await ribMovrContract.methods.getReserves().call()
  //const ribMovrPrice = Number(ribMovrReserves.reserve0) / Number(ribMovrReserves.reserve1)

  let ret = {}
  ret['cro'] = croUSDCPrice
  ret['silver'] = silverCroPrice * croUSDCPrice
  //ret['rib'] = ribMovrPrice * movrUSDCPrice
  ret['usdc'] = 1

  res.status(200).json(ret)
}
