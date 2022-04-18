import React from "react";
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 245px;
    padding: 5px 12px;
    margin-bottom: 12px;
`

export const Button = ({
    label,
    disabled,
    onClick,
    ...props
}) => {
    return (
        <div>
            <ButtonStyled
                disabled={disabled}
                onClick={onClick}
            >
                {label}
            </ButtonStyled>
        </div>
    )
}