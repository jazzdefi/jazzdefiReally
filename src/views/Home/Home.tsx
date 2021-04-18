import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@mozartfinance/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  background-repeat: no-repeat;
  background-position: left 80% center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  margin-left: 24px;
  margin-right: 5rem;
  margin-bottom: 64px;
  padding-top: 116px;
  text-align: left;
  height: 100px;
  padding-top: 0;
  background-size: contain;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: right 40% center;
    align-items: space-around;
    margin-right: 10rem;
    background-size: 50%;
    height: 100px;
    padding-top: 0;
    background-size: contain;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`
const HeroAll = styled.div`
  display: inline-flex;
  align-items: flex-start;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.lg} {
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <HeroAll>
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="text" fontSize="80px">
            {TranslateString(576, 'Jazz ')}
            <span style={{ fontWeight: 'normal' }}>{TranslateString(1576, 'DeFi')}</span>
          </Heading>
          <Text>
            {TranslateString(578, "The DeFi project that's ")}{' '}
            <em style={{ fontWeight: 500 }}>{TranslateString(1578, 'smooth')}</em>
          </Text>
        </Hero>
        <object style={{ float: 'right' }} width="128px" type="image/svg+xml" data="images/saxophone-animated.svg">
          <img alt="saxophone" src="images/saxophone-animated.svg" />
        </object>
      </HeroAll>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
        </Cards>
        <CTACards>
          <EarnAPYCard />
          <EarnAssetCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
