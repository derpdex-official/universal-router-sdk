import { BigNumber } from 'ethers'

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: // mainnet
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 5: // goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 11155111: // sepolia
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 137: // polygon
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 80001: // polygon mumbai
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 10: // optimism
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 420: // optimism goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42161: // arbitrum
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 421613: // arbitrum goerli
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 42220: // celo
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 44787: // celo alfajores
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 56: // binance smart chain
      return '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD'
    case 280: // Zksync Goerli
      return '0xA755E7D93cc20274e79d0DB7A122ed04284cC706'
    case 324: // ZkSync mainnet
      return '0xd896563806661Cf88697b15F13bB794D89870A36'
    case 84531: // Base Goerli
      return '0xe58cFf7aA41ac6b33DBC5D1bC1b61Cab3a377B52'
    case 8453: // Base Mainnet
      return '0xd068aA2be5F7605ABbFC766AA870bDAa430E6d4C'
    case 5611:
      return '0x6c20D77ab0e7105D467054B4178310f08c90C9eD'
    case 204:
      return '0x21D85aF6eb573ec3a08017A0c0515a8d70DafF4D'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

export const WETH_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 1: //mainnet
      return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    case 5: // goerli
      return '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'
    case 137: // polygon
      return '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    case 80001: // polygon mumbai
      return '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
    case 10: // optimism
      return '0x4200000000000000000000000000000000000006'
    case 420: // optimism goerli
      return '0x4200000000000000000000000000000000000006'
    case 42161: // arbitrum
      return '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
    case 421613: // arbitrum goerli
      return '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3'
    case 56: // binance smart chain
      return '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    case 280:
      return '0xC3ec043C150c945652A09D7E47F856AC9fB0F893'
    case 324:
      return '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91'
    case 84531:
      return '0x4200000000000000000000000000000000000006'
    case 8453:
      return '0x4200000000000000000000000000000000000006'
    case 5611:
      return '0x4200000000000000000000000000000000000006'
    case 204:
      return '0x4200000000000000000000000000000000000006'
    default:
      throw new Error(`WETH9 or UniversalRouter not deployed on chain ${chainId}`)
  }
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
