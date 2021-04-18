import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.jazz,
    earningToken: tokens.jazz,
    contractAddress: {
      56: '0x7CC9Ab212a6eF47Ad0976BdcfCE1A7ee3c27A839',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2499779405276626',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
