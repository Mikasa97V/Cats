import React from "react";
import styled from 'styled-components';

const CheckBoxStyled = styled.div`
    margin-bottom: 12px;
    label {
        margin-left: 5px;
    }
`

export const CheckBox = ({
    label,
    value,
    onChange,
    ...props
}) => {
    const handleChange = () => {
        onChange(!value);
    }

    return (
        <CheckBoxStyled>
            <input
                type='checkbox'
                checked={value}
                onChange={handleChange}
            />
            <label>
                {label}
            </label>
        </CheckBoxStyled>
    )
}