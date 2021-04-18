import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'JAZZ',
    lpAddresses: {
      56: '0x303ba087356901f4178075C3a4Ca58A97Fae845d',
      97: '',
    },
    token: tokens.jazz,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'JAZZ-BNB LP',
    lpAddresses: {
      56: '0x3DeA352B9eC0369EA69F206706DCf8BAcd5Abb9F',
      97: '',
    },
    token: tokens.jazz,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'JAZZ-BUSD LP',
    lpAddresses: {
      56: '0x600870108f27ab9ca57a7Bf955916564bbd708a6',
      97: '',
    },
    token: tokens.jazz,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'JAZZ-CAKE LP',
    lpAddresses: {
      56: '0x27687A6A1d9C213fd376C9265B1FB0AD5b19E8A2',
      97: '',
    },
    token: tokens.jazz,
    quoteToken: tokens.cake,
  },
  {
    pid: 4,
    lpSymbol: 'JAZZ-DOT LP',
    lpAddresses: {
      56: '0x4BCC3c67D07E23b3C462d2eb1a0dc9B8b4BcfDEb',
      97: '',
    },
    token: tokens.jazz,
    quoteToken: tokens.dot,
  },
  {
    pid: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      97: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
      97: '',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
      97: '',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
      97: '',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
      97: '',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
      97: '',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
]

export default farms
