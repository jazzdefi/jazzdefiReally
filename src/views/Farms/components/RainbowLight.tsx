import styled, { keyframes } from 'styled-components'

export const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

export const StyledIconImage = styled.div`
  div {
    background: linear-gradient(
      45deg,
      rgb(255, 231, 103) 0%,
      rgb(255, 255, 255) 10%,
      rgb(244, 253, 139) 20%,
      rgb(255, 250, 207) 30%,
      rgb(255, 204, 83) 40%,
      rgb(255, 255, 255) 50%,
      rgb(255, 253, 240) 60%,
      rgb(255, 199, 65) 70%,
      rgb(255, 244, 182) 80%,
      rgb(255, 255, 255) 90%,
      rgb(255, 223, 163) 100%
    );
    background-size: 300% 300%;
    animation: ${RainbowLight} 2s linear infinite;
    border-radius: 48px;
  }
`

export const StyledImageContainer = styled.div``

export const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgb(230, 198, 26) 0%,
    rgb(255, 154, 0) 10%,
    rgb(208, 222, 33) 20%,
    rgb(204, 185, 29) 30%,
    rgb(218, 179, 63) 40%,
    rgb(226, 181, 47) 50%,
    rgb(249, 241, 178) 60%,
    rgb(242, 166, 21) 70%,
    rgb(248, 222, 12) 80%,
    rgb(251, 201, 7) 90%,
    rgb(255, 179, 0) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

export default RainbowLight
