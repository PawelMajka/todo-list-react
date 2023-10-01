import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: ${({ theme }) => theme.breakpoint.mobileMaxWidth};
    padding: 20px;
    margin: 0 auto;
`;