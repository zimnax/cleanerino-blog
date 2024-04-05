/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const headerStyle = css`
padding: 14px 32px;
border-radius: 4px;
background: #609966;
border:none;
font-family: Steppe;
font-size: 16px;
font-weight: 600;
color: #FFFFFF;
cursor:pointer;
`

function ContainedButton({text}){
    return(
        <button css={headerStyle}>
            {text}
        </button>
    )
}

export default ContainedButton;