import React from "react";
import styled from 'styled-components';

const PictureStyled = styled.div`
    width: 500px;
    height: 500px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 0 10px #000;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        
    }
`

export const Picture = ({
    urlPicture,
    ...props
}) => {
    return (
        <PictureStyled>
            <img src={urlPicture}/>
        </PictureStyled>
    )
}