import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.div<{ size?: number; color?: string }>`
  display: inline-block;
  width: ${({ size }) => size || 16}px;
  height: ${({ size }) => size || 16}px;
  border: 2px solid ${({ theme }) => theme.colors.gray.default};
  border-radius: 50%;
  border-top-color: ${({ color }) => color || '#fff'};
  animation: ${spin} 0.6s linear infinite;
`
