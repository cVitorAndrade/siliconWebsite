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
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .projects {
        width: min(90%, 130rem);
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 130%;
            color: ${ ({ theme }) => theme.COLORS.GRAY_900};
            text-align: center;
        }

        p {
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 160%;
            color: ${ ({ theme }) => theme.COLORS.GRAY_600};
            max-width: 63.3rem;
            text-align: center;
            margin: 2.4rem 0 4rem;
        }
    }

    .projects-image {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 41.6rem 30rem;

        grid-template-areas: 
        "man mask whale"
        "man explosion explosion";

        grid-gap: 2.4rem;

        margin-bottom: 4rem;
        
        > img {
            transition: filter .3s;
        }

        > img:hover {
            filter: saturate(2);
            cursor: pointer;
        }
    }

    #man {
        grid-area: man;
        height: 100%;
        width: 100%;
    }
    
    #mask {
        grid-area: mask;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    
    #whale {
        height: 100%;
        object-fit: fill;
        width: 100%;
        grid-area: whale;
    }
    
    #explosion {
        width: 100%;
        grid-area: explosion;
        height: 100%;
    }



    @media(max-width: 700px) {
        .projects-image {
            display: flex;
            flex-direction: column;

            > img {
                max-width: 41.6rem;
            } 

            #explosion {
                height: 41.6rem;
                object-fit: fill;
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

export const OurCompetencies = styled.div`
    width: min(90%, 130rem);
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_100};
    padding: 7.2rem 0 9.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 9.6rem auto 0;
    text-align: center;

    > h2 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 130%;
            color: ${ ({ theme }) => theme.COLORS.GRAY_900};
        }

    > p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 160%;
        color: ${ ({ theme }) => theme.COLORS.GRAY_600};
        width: min(90%, 85.6rem);
        text-align: center;
        margin: 2.4rem auto 4rem;
    }

    .accordion-wrapepr {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min(90%, 85.6rem);
        gap: .8rem;

    }

    .MuiTypography-root {
        font-size: 2rem;
        font-weight: 600;
        line-height: 160%;
        color: ${ ({ theme }) => theme.COLORS.GRAY_900};
        text-align: start;
    }

    .MuiAccordionDetails-root {
        display: flex;
        align-items: center;
        text-align: justify;
        gap: 4rem;

        color: ${ ({ theme }) => theme.COLORS.GRAY_700};
        font-size: 1.6rem;
        line-height: 160%;


        display: flex;
        flex-direction: column;

        > img {
            max-width: 20rem;
        }
    }


    .MuiAccordionSummary-expandIconWrapper {
        > span {
            height: 3.6rem;
            width: 3.6rem;
        }
    }

    .MuiButtonBase-root {
        &:hover .MuiAccordionSummary-expandIconWrapper span {
            background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};

            > svg {
                color: #fff;
            }
        }
    }

    @media(min-width: 600px) {

        .MuiAccordionDetails-root {
            flex-direction: row;
        }
    }
`;