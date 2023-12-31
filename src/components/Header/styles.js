import { styled } from "styled-components";
export const Container = styled.header`
    width: 100%;
    padding: 3rem 0;   
    display: flex;
    justify-content: space-around;

    .wrapper {
        justify-content: space-around;
        flex: 1;
        display: none;
        align-items: flex-start;
    }

    .brand {
        display: flex;
        gap: 1.7rem;
        justify-content: center;
        align-items: center;
        color: var(--gray_900);
    }

    .toggle-switch {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        span {
            font-size: 1.6rem;
            font-weight: 600;
            color: var(--gray_700);
        }
    }

    input[type="checkbox"] {
        appearance: none;
        width: 46px;
        height: 24px;
        background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 50px;
        position: relative;
        cursor: pointer;
        transition: .3s;
        -webkit-box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);
        -moz-box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);
        box-shadow: 0px 3px 10px -4px rgb(99, 102, 241);
    }

    input[type="checkbox"]::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        left: 4px;
        top: 2px;
        transition: .3s;
    }

    input[type="checkbox"]::after {
        content: "";
        position: absolute;
        font-size: 20px;    
        transition: .3s;
    }

    input[type="checkbox"]:checked {
        background: linear-gradient(91deg, #ff01a5d4, #4b00ffd4);
    }

    input[type="checkbox"]:checked:before {
        background: #000;
        left: 23px;
    }

    input[type="checkbox"]:checked::after {
        content: "";
        left: 85px;
    }

    .hamburguer {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    .bar {
        width: 2.8rem;
        background: ${ ({ theme }) => theme.COLORS.PRIMARY};
        height: 3px;
        display: block;
        border-radius: 2px;
        transition: all .3s ease-in-out;
        margin: 2.5px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: min(90%, 130rem);
        margin: auto;
        position: relative;
    }

    .list-items {
        li a {
            color: var(--gray_800);
            font-weight: 600;
            font-size: 1.6rem;
        }

        height: 25rem;
        display: flex;
        flex-direction: column;
        gap: 1.7rem;
    }

    .wrapper.active {
            position: absolute;
            inset: 1;
            display: flex;
            flex-direction: column;
            top: 130%;
            width: 100%;
            gap: 5rem;
            transition: all .25s ease-in-out;
            background: radial-gradient(circle, rgb(53 93 209 / 18%), transparent);

            background-color: var(--header_bg);
        }

        .hamburguer.active .bar:nth-child(2) {
            opacity: 0;
        }

    .hamburguer.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburguer.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .dropdown {
        color: var(--gray_800);
        font-weight: 600;
        font-size: 1.6rem;

        ul {
            
            > li a {
                display: none;
                color: ${ ({ theme }) => theme.COLORS.PRIMARY};

            }
        }

        &:hover ul {
            display: flex;
            padding: 1rem 0;
            flex-direction: column;

            li a {
                display: block;
            }
        }

        span {
            display: flex;
            align-items: center;
            gap: .4rem;
        }
    }


    @media(min-width: 850px) {

        .list-items {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            height: auto;
            flex-direction: row;
        }

        .dropdown {
            span {
                display: flex;
                align-items: center;
                gap: .4rem;
                color: var(--gray_800);
            }

            &:hover ul {
                position: absolute;
                padding: 2rem 0;
                flex-direction: column;
                gap: 1rem;
                display: flex;
                text-align: center;
            }
        }

        .wrapper {
            display: flex;
            align-items: center;
        }

        .hamburguer {
            display: none;
        }
    }
`;