import { styled } from "styled-components";
export const Container = styled.div`
    max-width: 19.6rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_300};

    > img {
        width: min(90%, 13.2rem);
        filter: brightness(var(--img_filter));
    }
`;