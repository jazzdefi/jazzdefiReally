import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://www.exchange.jazzdefi.com',
      },
      {
        label: 'Liquidity',
        href: 'https://www.exchange.jazzdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Duets',
    icon: 'DuetsIcon',
    href: '/farms',
  },
  {
    label: 'Solos',
    icon: 'SolosIcon',
    href: '/pools',
  },
]

export default config
