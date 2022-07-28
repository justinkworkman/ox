import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';


const StyledText = styled.p<TextProps>`
   margin: 0px;
   color: ${props => props.disabled ? "#e4e3ea" : (props.error ? "#a9150b": "#080808")};
`;


const Text: FC<TextProps> = ({id, disabled, error, success, children, ...props}) => {
    return (
      <Fragment>
       <StyledText error={error}>{children}</StyledText>
      </Fragment>
    )
  }
  
  export default Text;