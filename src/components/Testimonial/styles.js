import { styled } from "styled-components";
export const Container = styled.div`
    .testimonial {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        

        > img {
            flex: 1;
            max-width: 41.6rem;
            object-fit: cover;
            border-radius: 8px;
        }

        > .text-wrapper {
            padding: 2rem 0;
        }
    }

    .text {
        background-color: var(--gray_100);
        max-width: 80rem;
        border-radius: 8px;
        padding: 0 4.8rem 4.8rem;
        position: static;
        width: 100%;

        .quote {
            background-color: red;
            color: #fff;
            width: 5.2rem;
            display: flex;
            height: 5.2rem;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
            position: relative;
            top: -2.4rem;
            -webkit-box-shadow: 0px 5px 7px 2px rgba(62,66,101,.7);
            -moz-box-shadow: 0px 5px 7px 2px rgba(62,66,101,.7);
            box-shadow: 0px 5px 7px 2px rgba(62,66,101,.7);
        }

        > p {
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 160%;
            color: var(--gray_700);
            margin-bottom: 2.4rem;
        }

        .stars {
            color: #FFBA08;

            svg + svg {
                margin-left: 5px;
            }
        }

    }

    @media(max-width: 700px) {
        .testimonial {
            flex-direction: column;
            align-items: center;

            > img {
                max-width: 80%;
            }

            .text {
                max-width: 100%;
            }
        }
    }
`;