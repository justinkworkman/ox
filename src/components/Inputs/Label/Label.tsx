import React, {FC, Fragment} from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.div<LabelProps>`
    font-size: 14px;
    color: ${props => props.disabled ? "#e4e3ea" : "#080808"};
    padding-bottom: 6px;
`;

const StyledText = styled.p<LabelProps>`
   margin: 0px;
   color: ${props => props.disabled ? "#e4e3ea" : (props.error ? "#a9150b": "#080808")};
`;


const Label: FC<LabelProps> = ({id, disabled, text, error, success, ...props}) => {
    return (
      <Fragment>
        <StyledLabel>
            <StyledText disabled={disabled} error={error}>{text}</StyledText>
        </StyledLabel>
      </Fragment>
    )
  }
  
  export default Label;