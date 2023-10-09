import { styled } from "styled-components";
export const Container = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    > .wrapper {
        background: radial-gradient(circle, rgb(53 93 209 / 18%), transparent);
        padding-bottom: 9.6rem;
        position: relative;
    }

    .discover-more {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        margin: 8rem auto 0;
        width: min(90%, 130rem);

        span:last-child {
            font-size: 1.4rem;
            color: var(--gray_700);
            line-height: 160%;
        }
    }

    .line-shape, .bg-shape {
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
    
    .line-shape {
        opacity: 0;
        right: 0;
        z-index: -1;
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
            color: var(--gray_900);
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
            color: var(--gray_800);
            font-size: 2.4rem;
            line-height: 140%;
        }
    }

    .work-with-us {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        p {
            color: var(--gray_700);
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
    background-color: var(--body_bg_color);
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
            background-color: transparent;

            h3 {
                color: var(--gray_900);
                font-size: 2.4rem;
                line-height: 140%;
                font-weight: 800;
                margin: 2.4rem 0 1.2rem;
            }

            p {
                color: var(--gray_700);
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
            color: var(--gray_900);
            text-align: center;
        }

        p {
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 160%;
            color: var(--gray_600);
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
            border-radius: 8px;
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
    background-color: var(--gray_100);
    padding: 7.2rem 0 9.6rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 9.6rem auto 0;
    text-align: center;

    > h2 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 130%;
            color: var(--gray_900);
        }

    > p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 160%;
        color: var(--gray_600);
        width: min(90%, 85.6rem);
        text-align: center;
        margin: 2.4rem auto 4rem;
    }

    .accordion-wrapper {
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
        color: var(--gray_900);
        text-align: start;
    }

    .MuiAccordionDetails-root {
        display: flex;
        align-items: center;
        text-align: justify;
        gap: 4rem;

        color: var(--gray_700);
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

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
        background-color: var(--bg_accordio_sumary);
    }

    .css-67l5gl {
        background-color: var(--bg_accordio_sumary);
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

export const Clients = styled.div`
    width: min(90%, 130rem);
    margin: 9.2rem auto 0;


    .clients-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;

        > h2 {
            color: var(--gray_900);
            font-weight: 800;
            font-size: 3.2rem;
            line-height: 130%;
        }
    
        .btn-slider-wrapper {
            display: flex;
            gap: 1.6rem;

            > button span {
                width: 3.6rem;
                height: 3.6rem;
                border-radius: 50%;
            }
        }
    }

    .swiper-slide {
        justify-content: center;
    }
`;

export const ClientTestimonial = styled.div`
    width: min(90%, 130rem);
    margin: 11.2rem auto;

    > h2 {
        font-size: 4rem;
        font-weight: 800;
        color: var(--gray_900);
        line-height: 130%;
        text-align: center;
        margin-bottom: 5rem;
    }

    #pagination-element {
        display: flex;
        gap: .8rem;
    }
    
    .testimonial-controls {
        display: flex;
        width: 36rem;
        gap: 1rem;
        align-items: center;

        > button span {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 0;
            box-shadow: none;
            background-color: transparent;
        }
    }

    .swiper-pagination-bullet {
        flex: 1;
        max-width: 3.6rem;
        height: 3.6rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gray_800);
        font-size: 1.2rem;
        background-color: transparent;
        font-weight: 700;
        opacity: 1;
        line-height: 160%;
    }

    .swiper-pagination-bullet:hover {
        background-color: var(--gray_100);
    }

    .swiper-pagination-bullet-active {
        color: #fff;
        background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
    }

    .swiper-pagination-bullet-active:hover {
        background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
    }

    .testimonial-controls-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 6rem;
    }

    .swiperInfo {
        width: 41.6rem;
        margin: 0;
    }

    @media(max-width: 700px) {
        .testimonial-controls-wrapper {
            flex-direction: column-reverse;
            align-items: center;
            gap: 3rem;
            margin-top: 2rem;
        }

        .testimonial-controls {
            max-width: 36rem;
        }
    }
`;

export const OurAtmosphere = styled.div`
    width: min(90%, 130rem);
    margin: 11.2rem auto 0;

    .atmosphere-title {
        max-width: 61.1rem;
        display: flex;
        margin-bottom: 2rem;
        gap: 2.7rem;
        margin: auto;

        flex-direction: column;
        align-items: center;
        
        > h2 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 130%;
            color: var(--gray_900);
            text-align: center;
        }
    }
    
    > img {
        width: 100%;
        min-height: 30rem;
    }

    .award-winning {
        display: flex;
        margin-top: 9.6rem;
        align-items: center;
        flex-direction: column;
        gap: 4rem;

        > h2 {
            max-width: 41rem;
            font-size: 3.2rem;
            line-height: 130%;
            font-weight: 800;
            color: var(--gray_900);
            text-align: center;
        }

        > div {
            display: flex;
            gap: 5rem;
            flex-wrap: wrap;
            justify-content: center;

            div {
                text-align: center;
                p {
                    color: var(--gray_700);
                    line-height: 160%;
                    font-size: 1.4rem;
                    font-weight: 400;
                    margin-top: 1.6rem;
                }
            }
            
        }
    }

    @media(min-width: 375px) {
        .atmosphere-title {
            flex-direction: row;
            margin: 0 0 2rem;
            
            > h2 {
                width: 25rem;
                padding-bottom: 2rem;
            }

            > img {
                align-self: flex-end;
            }
        }
    }

    @media(min-width: 600px) {
        .atmosphere-title {
            justify-content: space-between;
            gap: 0;
            
            height: 9rem;

            > h2 {
                width: 50rem;
                align-self: flex-start;
            }
        }
    }

    @media(min-width: 850px) {
        .award-winning {
            flex-direction: row;
            justify-content: space-between;

            > div {
                flex-wrap: nowrap;
            }

            > h2 {
                text-align: left;
            }
        }
    }
`;