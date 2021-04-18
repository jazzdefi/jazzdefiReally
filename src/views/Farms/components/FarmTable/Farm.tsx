import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { Text, Image } from '@mozartfinance/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { StyledIconImage, StyledImageContainer } from '../RainbowLight'

export interface FarmProps {
  label: string
  pid: number
  image: string
  depositFeeBP?: number
}

const IconImage = styled(Image)`
  width: 32px;
  height: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }
`

const Container = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 32px;
  }
`

const Farm: React.FunctionComponent<FarmProps> = ({ image, label, pid, depositFeeBP }) => {
  const { stakedBalance } = useFarmUser(pid)
  const TranslateString = useI18n()
  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const depositFeeColor = depositFeeBP / 100 === 0 ? 'rgb(50, 176, 123)' : '#1a1a1a'

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold>
          {TranslateString(999, 'FARMING')}
        </Text>
      )
    }

    return null
  }

  return (
    <Container>
      {label.split('-')[0] === 'JAZZ' ? (
        <StyledImageContainer>
          <StyledIconImage>
            <IconImage src={`/images/farms/${image}.png`} alt="icon" width={64} height={64} mr="8px" />
          </StyledIconImage>
        </StyledImageContainer>
      ) : (
        <StyledImageContainer>
          <IconImage src={`/images/farms/${image}.png`} alt="icon" width={64} height={64} mr="8px" />
        </StyledImageContainer>
      )}

      <div>
        {handleRenderFarming()}
        {label.split('-')[0] === 'JAZZ' ? (
          <Text bold style={{ textShadow: 'rgb(255, 231, 36) 1px 1px' }}>
            {label}
          </Text>
        ) : (
          <Text bold>{label}</Text>
        )}
        <Text bold>
          Deposit Fee: <span style={{ color: depositFeeColor }}>{depositFeeBP / 100}%</span>
        </Text>
      </div>
    </Container>
  )
}

export default Farm
