import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.color.gallery};
    } 
`;