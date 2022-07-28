import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import { InputProps } from './Input.types';
import { Label } from '../Label';
import { Text } from '../../../accessories';

const StyledInput = styled.input<InputProps>`
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${props => props.disabled ? "#e4e3ea" :(props.error ? "a915ob":(props.success ? "#067d68" : "#353637"))}
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`;

const StyledMessage = styled.div<InputProps>`
   font-size: 14px;
   color: #a9150b8;
   padding-top: 4px;
`;



const Input: FC<InputProps> = ({id, disabled, label, message, error, success, onChange, placeholder, ...props}) => {
  return (
    <Fragment>
      <Label disabled={disabled} error={error} text={label} />
      <StyledInput id={id} type="text" onChange={onChange} disabled={disabled} error={error} success={success} placeholder={placeholder} {...props}></StyledInput>
      <StyledMessage><Text error={error}>{message}</Text></StyledMessage>
    </Fragment>
  )
}

export default Input;