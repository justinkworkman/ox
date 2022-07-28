import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import { CheckBoxProps } from './Checkbox.types';
import { Label } from '../Label';

const StyledCheckbox = styled.input<CheckBoxProps>`
    height: 20px;
    width: 100px;
    border-radius: 10px;
    border: solid 2px ${props => props.disabled ? "#e4e3ea" :(props.error ? "a915ob":(props.success ? "#067d68" : "#353637"))}
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`;

const Checkbox: FC<CheckBoxProps> = ({id, disabled, label, message, error, success, onClick, ...props}) => {
  return (
    <Fragment>
      <span><Label disabled={disabled} error={error} text={label} /></span>
      <StyledCheckbox type="checkbox" id={id} onClick={onClick} disabled={disabled} error={error} success={success} {...props}></StyledCheckbox>
    </Fragment>
  )
}

export default Checkbox;