import { styled } from "styled-components";
export const Container = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    
    > .wrapper {
        background: radial-gradient(circle, rgba(99, 135, 241, 0.1), transparent);
        padding-bottom: 9.6rem;
        position: relative;
    }

    .discover-more {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        margin: 8rem auto 0;
        width: min(90%, 130rem);

        span {
            font-size: 1.4rem;
            color: ${ ({ theme }) => theme.COLORS.GRAY_700};
            line-height: 160%;
        }
    }

    .line-shape, .bg-shape {
        position: absolute;
        bottom: 0;
        z-index: -1000;
    }
    
    .line-shape {
        opacity: 0;
        right: 0;
        z-index: -9999;
        max-width: 66rem;
    }
    

    @media(min-width: 1110px) {
        .line-shape, .bg-shape {
            visibility: visible;
            opacity: 1;
        }
    }

    
`;

export const Apresentation = styled.div`
    width: min(90%, 130rem);
    margin: 6.8rem auto 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 3.4rem;

    .text {
        max-width: 63.6rem;
        margin: auto;

        h2 {
            font-size: 6.2rem;
            margin: 1.6rem 0 6.4rem;
            font-weight: 800;
            line-height: 130%;
            color: ${ ({ theme }) => theme.COLORS.GRAY_900};
            text-align: center;

            span {
                background: -webkit-linear-gradient(left, #6366f1, #d946ef);
                background: -moz-linear-gradient(left, #6366f1, #d946ef);
                background: -ms-linear-gradient(left, #6366f1, #d946ef);
                background: -o-linear-gradient(left, #6366f1, #d946ef);
                background: linear-gradient(to right, #6366f1, #d946ef);
                -webkit-background-clip: text; 
                background-clip: text;
                color: transparent; 
            }
        }
    }


    .video-idle {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        .video-title {
            font-weight: 800;
            color: ${ ({ theme }) => theme.COLORS.GRAY_800};
            font-size: 2.4rem;
            line-height: 140%;
        }
    }

    .work-with-us {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        p {
            color: ${ ({ theme }) => theme.COLORS.GRAY_700};
            font-size: 1.6rem;
            line-height: 160%;
            text-align: justify;
        }
    }

    img {
        width: 50%;
        margin: auto;
    }



    @media(min-width: 738px) {
            flex-direction: row;
            margin-top: 12.8rem;
        

        img {
            width: 50%;
        }

        .text {
            h2 {
                font-size: 7.2rem;
                text-align: start;
            }
        }

        .work-with-us {
            flex-direction: row;
            margin-top: 6.4rem;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;

            p {
                max-width: 43.4rem;
            }
        }
    } 
    
`;

export const Features = styled.div`
    width: 100%;
    background-color: #fff;

    .features {
        width: min(90%, 130rem);
        margin: auto;
        padding-top: 11.2rem;
        padding-bottom: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7rem;

        .item:nth-child(2) {
            padding: 7rem 0;
            border-top: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_400};
            border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_400};
        }

        .item {
            max-width: 33.6rem;
            background-color: white;
            text-align: center;

            h3 {
                color: ${ ({ theme }) => theme.COLORS.GRAY_900};
                font-size: 2.4rem;
                line-height: 140%;
                font-weight: 800;
                margin: 2.4rem 0 1.2rem;
            }

            p {
                color: ${ ({ theme }) => theme.COLORS.GRAY_700};
                font-size: 1.6rem;
            }
        }
    }

    @media(min-width: 1070px) {
        .features {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            .item:nth-child(2) {
                border: none;
                border-left: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_400};
                border-right: 1px solid ${ ({ theme }) => theme.COLORS.GRAY_400};
                padding: 0 2rem;
            }
        }
    }
`;