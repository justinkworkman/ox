import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import { CheckBoxProps } from './Checkbox.types';
import { Label } from '../Label';

const StyledCheckbox = styled.input<CheckBoxProps>`
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${props => props.disabled ? "#e4e3ea" :(props.error ? "a915ob":(props.success ? "#067d68" : "#353637"))}
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`;

const Input: FC<CheckBoxProps> = ({id, disabled, label, message, error, success, onChange, ...props}) => {
  return (
    <Fragment>
      <Label disabled={disabled} error={error} text={label} />
      <StyledCheckbox type="checkbox" id={id} onChange={onChange} disabled={disabled} error={error} success={success} {...props}></StyledCheckbox>
    </Fragment>
  )
}

export default Input;