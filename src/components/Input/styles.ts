import ReactInputMask from 'react-text-mask'
import styled, { css } from 'styled-components'

type ContainerProps = {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ isFocused, isErrored }) => css`
    position: relative;
    width: 100%;
    border: 0.2px solid #bbbbbb;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.09);
    transition: border-color margin 0.3s;

    & + div {
      margin-top: 16px;
    }
  `}
`

type InputProps = {
  as: React.ElementType
}

export const inputModifiers = {
  textarea: () => css`
    max-height: 120px;
    min-height: 120px;
    min-width: 100%;
    max-width: 100%;
  `
}

export const Input = styled.input<InputProps>`
  ${({ as }) => css`
    background: transparent;
    border: 0;
    width: 100%;
    padding-left: 16px;
    padding-bottom: 8px;
    padding-top: 24px;
    height: 49px;
    color: black;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.3s ease-out;
    -webkit-appearance: none;

    ${as === 'textarea' && inputModifiers.textarea};

    &::placeholder {
      color: transparent;
    }

    &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
      font-size: 12px;
      top: 8px;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      box-shadow: none;
      -webkit-box-shadow: none;
      transition: background-color 5000s ease-in-out 0s;
    }
  `}
`

export const InputMask = styled(ReactInputMask)`
    background: transparent;
    border: 0;
    width: 100%;
    padding-left: 16px;
    padding-bottom: 8px;
    padding-top: 24px;
    height: 49px;
    color: white;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.3s ease-out;
    -webkit-appearance: none;
`

export const Label = styled.label`
    pointer-events: none;
    position: absolute;
    top: 1.6rem;
    left: 0.8rem;
    font-weight: 500;
    font-size: 1rem;
    color: #8F8F8F;
    transition: all 0.3s ease-out;
`

export const Error = styled.span`
    position: absolute;
    color: red;
    top: calc(100% + (1.4rem / 2));
    font-size: 1.2rem;
    left: 0;
`
