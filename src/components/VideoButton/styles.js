import { styled } from "styled-components";
export const Container = styled.span`
    width: 5.2rem;
    height: 5.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    -webkit-box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    -moz-box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    box-shadow: 0px 4px 7px -4px rgba(62,66,101,1);
    transition: all .3s ease-in-out;


    &:hover {
        background-color: ${ ({ theme }) => theme.COLORS.PRIMARY};
        cursor: pointer;

        > svg {
            color: #fff;
        }
    }
`;