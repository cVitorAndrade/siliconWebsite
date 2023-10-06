import { styled } from "styled-components";
export const Container = styled.div`
    display: flex;
    width: 41.6rem;
    justify-content: center;
    gap: 4.4rem;

    > h5 {
        padding-left: 2.4rem;
        border-left: 1px solid var(--gray_600);
        color: var(--gray_900);
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        line-height: 140%;
        
        span {
            color: var(--gray_600);
            font-size: 1.4rem;
            line-height: 160%;
            font-weight: 400;
        }
    }

    > img {
        object-fit: contain;
        filter: brightness(var(--img_filter));
    }

    @media(max-width: 350px) {
       flex-direction: column;
       width: 100%;
       margin: 0 auto 2rem;
       align-items: center;
       gap: 1.5rem;

       > h5 {
            border-top: 1px solid var(--gray_600);
            border-left: none;
            color: var(--gray_900);
            padding: 1rem 0 0;
            text-align: center;
       }

       
    }

`;